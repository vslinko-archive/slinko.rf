/**
 * @vslinko
 */


var gulp = require('gulp');
var browserify = require('gulp-browserify');
var reactify = require('reactify');
var server = require('./server');


gulp.task('scripts', function() {
    return gulp.src('src/index.js')
        .pipe(browserify({
            transform: [reactify]
        }))
        .on('prebundle', function(bundle) {
            bundle.require(__dirname + '/node_modules/react-tools/build/modules/React.js', {
                expose: 'React'
            });
        })
        .pipe(gulp.dest('build/js'));
});


gulp.task('assets', function() {
    return gulp.src('assets/**/*')
        .pipe(gulp.dest('build'));
});


gulp.task('server', function() {
    server.listen(3000);
});


gulp.task('default', function() {
    gulp.run('scripts', 'assets');

    gulp.watch('src/**/*.js', function() {
        gulp.run('scripts');
    });

    gulp.watch('assets/**/*', function() {
        gulp.run('assets');
    });

    gulp.run('server');
});
