/**
 * @vslinko
 * @jsx React.DOM
 */


var React = require('React');
var morpheus = require('morpheus');
var Block = require('./Block');


var Background = React.createClass({
    getDefaultProps: function() {
        return {
            updateDuration: 500
        };
    },

    getInitialState: function() {
        return {
            type: 'color',
            color: '#000000'
        };
    },

    shouldComponentUpdate: function() {
        return false;
    },

    update: function(nextBackground) {
        if (this.state.type === 'color' && nextBackground.type === 'color') {
            this.updateBackgroundColor(nextBackground);
        }
    },

    updateBackgroundColor: function(nextBackground) {
        morpheus(this.getDOMNode(), {
            backgroundColor: nextBackground.color,
            duration: this.props.updateDuration,
            complete: function() {
                this.setState(nextBackground);
            }.bind(this)
        });
    },

    render: function() {
        var style = {
            backgroundColor: this.state.color
        };

        return (
            <Block className="background" style={style} />
        );
    }
});


module.exports = Background;
