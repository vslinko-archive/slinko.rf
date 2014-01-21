/**
 * @vslinko
 * @jsx React.DOM
 */


var React = require('React');
var ScenesMapping = require('./ScenesMapping');
var Background = require('../components/Background');


var SceneContainer = React.createClass({
    getInitialState: function() {
        return {
            scene: 'Welcome'
        };
    },

    componentDidMount: function() {
        this.updateBackground();
    },

    shouldComponentUpdate: function(nextProps, nextState) {
        return this.state.scene !== nextState.scene;
    },

    componentDidUpdate: function() {
        this.updateBackground();
    },

    updateBackground: function() {
        var nextBackground = this.refs.scene.getBackgroundState();
        this.refs.background.update(nextBackground);
    },

    render: function() {
        var Scene = ScenesMapping[this.state.scene];

        return (
            <div>
                <Background ref="background" />
                <Scene ref="scene" />
            </div>
        );
    }
});


module.exports = SceneContainer;
