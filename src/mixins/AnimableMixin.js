/**
 * @vslinko
 */


var morpheus = require('morpheus');


var AnimableMixin = {
    animate: function(animation) {
        morpheus(this.refs.animable.getDOMNode(), animation);
    }
};


module.exports = AnimableMixin;
