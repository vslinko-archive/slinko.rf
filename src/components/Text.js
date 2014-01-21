/**
 * @vslinko
 * @jsx React.DOM
 */


var React = require('React');
var AnimableMixin = require('../mixins/AnimableMixin');
var Block = require('./Block');


var Text = React.createClass({
    mixins: [AnimableMixin],

    render: function() {
        return this.transferPropsTo(
            <Block ref="animable" className="text">
                {this.props.children}
            </Block>
        );
    }
});


module.exports = Text;
