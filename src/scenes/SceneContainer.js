/**
 * @vslinko
 * @jsx React.DOM
 */


var React = require('React');
var ScenesMapping = require('./ScenesMapping');


var SceneContainer = React.createClass({
    getInitialState: function() {
        return {
            scene: 'Welcome'
        };
    },

    render: function() {
        var Scene = ScenesMapping[this.state.scene];

        return (
            <div>
                <Scene />
            </div>
        );
    }
});


module.exports = SceneContainer;
