/**
 * @vslinko
 */


var express = require('express');


var app = module.exports = express();

app.use(express.static('build'));


if (require.main === module) {
    app.listen(3000);
}
