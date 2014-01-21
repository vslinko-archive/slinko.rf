/**
 * @vslinko
 * @jsx React.DOM
 */


var React = require('React');
var SceneMixin = require('../mixins/SceneMixin');
var Text = require('../components/Text');
var Image = require('../components/Image');


var WelcomeScene = React.createClass({
    mixins: [SceneMixin],

    getBackgroundState: function() {
        return {
            type: 'color',
            color: '#000000'
        };
    },

    getDelayedRefs: function() {
        return ['photo'];
    },

    getShowAnimations: function() {
        return {
            welcome: Style.welcome.show,
            photo: Style.photo.show
        };
    },

    render: function() {
        return (
            <div>
                <Text ref="welcome"
                      className="text--style-heading text--align-center"
                      style={Style.welcome.initial}>
                    Welcome
                </Text>
                <Image ref="photo"
                       src="http://lorempixel.com/400/200"
                       style={Style.photo.initial} />
            </div>
        );
    }
});


var Style = {
    welcome: {
        initial: {
            top: 320,
            left: 0,
            opacity: 0,
            fontSize: '64px',
            color: '#ffffff'
        },
        show: {
            opacity: 1,
            top: 300,
            duration: 700
        }
    },
    photo: {
        initial: {
            bottom: -500,
            left: 20
        },
        show: {
            bottom: 0,
            duration: 500
        }
    }
};


module.exports = WelcomeScene;
