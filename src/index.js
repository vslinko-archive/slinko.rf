/**
 * @vslinko
 * @jsx React.DOM
 */


var React = require('React');
var SceneContainer = require('./scenes/SceneContainer');


document.addEventListener('DOMContentLoaded', function() {
    React.renderComponent(<SceneContainer />, document.body);
});
