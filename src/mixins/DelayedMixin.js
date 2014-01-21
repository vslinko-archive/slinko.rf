/**
 * @vslinko
 */


var DelayedMixin = {
    readyCallbacks: [],

    registerReadyCallback: function(callback) {
        this.readyCallbacks.push(callback);
    },

    triggerReadyCallbacks: function() {
        this.readyCallbacks.forEach(function(callback) {
            callback();
        });
    }
};


module.exports = DelayedMixin;
