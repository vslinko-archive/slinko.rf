/**
 * @vslinko
 * @jsx React.DOM
 */


var React = require('React');
var ParallaxDirector = require('./parallax/ParallaxDirector');
var SceneContainer = require('./scenes/SceneContainer');


document.addEventListener('DOMContentLoaded', function() {
    React.renderComponent(<SceneContainer />, document.body);
    ParallaxDirector.init();
});
