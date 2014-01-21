/**
 * @vslinko
 * @jsx React.DOM
 */


var React = require('React');
var ParallaxDirector = require('../parallax/ParallaxDirector');


var Parallax = React.createClass({
    getDefaultProps: function() {
        return {
            ratioX: 1,
            ratioY: 1,
            offsetX: 50,
            offsetY: 50
        };
    },

    componentDidMount: function() {
        ParallaxDirector.mountedComponents.push(this);
    },

    render: function() {
        return this.transferPropsTo(
            <div className="parallax">
                {this.props.children}
            </div>
        );
    }
});


module.exports = Parallax;
