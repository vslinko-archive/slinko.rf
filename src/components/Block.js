/**
 * @vslinko
 * @jsx React.DOM
 */


var React = require('React');


var Block = React.createClass({
    render: function() {
        return this.transferPropsTo(
            <div className="block">
                {this.props.children}
            </div>
        );
    }
});


module.exports = Block;
