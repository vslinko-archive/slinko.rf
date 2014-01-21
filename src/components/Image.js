/**
 * @vslinko
 * @jsx React.DOM
 */


var React = require('React');
var DelayedMixin = require('../mixins/DelayedMixin');
var AnimableMixin = require('../mixins/AnimableMixin');
var Block = require('./Block');


var Image = React.createClass({
    mixins: [DelayedMixin, AnimableMixin],

    componentDidMount: function(domNode) {
        var img = new window.Image;
        img.src = this.props.src;
        img.onload = function() {
            domNode.style.width = img.width + 'px';
            domNode.style.height = img.height + 'px';
            domNode.style.backgroundImage = 'url(' + img.src + ')';
            this.triggerReadyCallbacks();
        }.bind(this);
    },

    render: function() {
        return this.transferPropsTo(
            <Block ref="animable" className="image" />
        );
    }
});


module.exports = Image;
