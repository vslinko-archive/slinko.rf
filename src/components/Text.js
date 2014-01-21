/**
 * @vslinko
 * @jsx React.DOM
 */


var React = require('React');
var Block = require('./Block');


var Text = React.createClass({
    render: function() {
        return this.transferPropsTo(
            <Block className="text">
                {this.props.children}
            </Block>
        );
    }
});


module.exports = Text;
