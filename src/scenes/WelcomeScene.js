/**
 * @vslinko
 * @jsx React.DOM
 */


var React = require('React');
var morpheus = require('morpheus');
var Text = require('../components/Text');


var WelcomeScene = React.createClass({
    getBackgroundState: function() {
        return {
            type: 'color',
            color: '#000000'
        };
    },

    componentDidMount: function() {
        morpheus(this.refs.welcome.getDOMNode(), Style.welcome.animation);
    },

    render: function() {
        return (
            <div>
                <Text ref="welcome"
                      className="text--style-heading text--align-center"
                      style={Style.welcome.initial}>
                    Welcome
                </Text>
            </div>
        );
    }
});


var Style = {
    welcome: {
        initial: {
            top: 320,
            opacity: 0,
            fontSize: '64px',
            color: '#ffffff'
        },
        animation: {
            opacity: 1,
            top: 300,
            duration: 700
        }
    }
};


module.exports = WelcomeScene;
