/**
 * @vslinko
 */


var SceneMixin = {
    componentDidMount: function() {
        if (this.getDelayedRefs) {
            this.hideScene();
            this.waitDelayedComponents();
        }
    },

    hideScene: function() {
        this.getDOMNode().style.opacity = 0;
    },

    waitDelayedComponents: function() {
        var refs = this.getDelayedRefs(),
            count = refs.length;

        var callback = function() {
            count--;

            if (count === 0) {
                this.showScene();
                this.animateScene();
            }
        }.bind(this);

        refs.forEach(function(ref) {
            return this.refs[ref].registerReadyCallback(callback);
        }.bind(this));
    },

    showScene: function() {
        this.getDOMNode().style.opacity = 1;
    },

    animateScene: function() {
        if (!this.getShowAnimations) {
            return;
        }

        var animations = this.getShowAnimations();

        Object.keys(animations).forEach(function(ref) {
            this.refs[ref].animate(animations[ref]);
        }.bind(this));
    }
};


module.exports = SceneMixin;
