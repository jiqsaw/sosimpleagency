'use strict';
// Add Required Gulp Components
var gulp = require('gulp'),
    gutil = require('gulp-util'),
    sass = require('gulp-sass'),
    serveStatic = require('serve-static'),
    finalhandler = require('finalhandler'),
    http = require('http'),
    open = require('open'),
    del = require('del');

// Debug
gulp.task('debug', ['sass', 'sass:watch', 'localServer']);


// Compile sass
gulp.task('sass', function() {
   gulp.src('src/sass/*.scss') // Sass files destination
    .pipe(sass().on('error', sass.logError)) // Log
    .pipe(sass({outputStyle: 'compressed'})) // Compress
    .pipe(gulp.dest('resources/css/')); // Export destionation
   gutil.log('sass compiled.');
});
// Watch sass changes
gulp.task('sass:watch', function () {
  gulp.watch('src/sass/*.scss', ['sass']);
});


// Start Server
gulp.task('localServer', function() {
    var port = 8000;
    var serve = serveStatic('./');
    var server = http.createServer(function (req, res) {
        var done = finalhandler(req, res);
        serve(req, res, done);
    });
    server.listen(port, function() {
        open('http://localhost:' + port);
    });
});



// ----------------------------------------------


// Deploy
gulp.task('deploy');
