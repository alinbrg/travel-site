'use strict';

var gulp = require('gulp');
var sass = require('gulp-sass')(require('sass'));

function buildStyles() {
  return gulp.src('./scss/style.scss')
    .pipe(sass().on('error', sass.logError))
    .pipe(gulp.dest('./css'));
};

exports.buildStyles = buildStyles;
exports.watch = function () {
  gulp.watch('./scss/**/*.scss', gulp.parallel('buildStyles'));
};


// const autoprefixer = require('gulp-autoprefixer');

// exports.default = () => (
// 	gulp.src('css/style.css')
// 		.pipe(autoprefixer({
// 			cascade: false
// 		}))
// 		.pipe(gulp.dest('dist'))
// );