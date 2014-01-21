/**
 * @vslinko
 */



function calculateParallaxOffset(x, y, ratioX, ratioY, offsetX, offsetY) {
    var x = Math.floor((-(x / window.outerWidth * offsetX) + offsetX / 2) * ratioX);
    var y = Math.floor((-(y / window.outerHeight * offsetY) + offsetY / 2) * ratioY);

    return [x, y]
}


module.exports = calculateParallaxOffset;
