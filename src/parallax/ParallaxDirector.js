/**
 * @vslinko
 */


var calculateParallaxOffset = require('./calculateParallaxOffset');


var ParallaxDirector = {
    mountedComponents: [],
    scheduled: false,
    x: null,
    y: null,

    mouseMoveListener: function(event) {
        this.x = event.x;
        this.y = event.y;

        if (this.scheduled) {
            return;
        }

        this.scheduled = true;

        requestAnimationFrame(this.updateComponents.bind(this));
    },

    updateComponents: function() {
        this.mountedComponents.forEach(this.updateComponent.bind(this));

        this.scheduled = false;
    },

    updateComponent: function (component) {
        var node = component.getDOMNode();

        var offset = calculateParallaxOffset(
            this.x,
            this.y,
            component.props.ratioX,
            component.props.ratioY,
            component.props.offsetX,
            component.props.offsetY
        );

        node.style.left = offset[0] + 'px';
        node.style.top = offset[1] + 'px';
    },

    init: function() {
        document.addEventListener('mousemove', this.mouseMoveListener.bind(this));
    }
};


module.exports = ParallaxDirector;
