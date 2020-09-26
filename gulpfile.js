/* global require, exports */

const { src, dest, parallel, watch, series } = require('gulp');
const del = require('del');
const sass = require('gulp-sass');
const autoprefixer = require('gulp-autoprefixer');
const cssnano = require('gulp-cssnano');
const babel = require('gulp-babel');
const uglify = require('gulp-uglify');

sass.compiler = require('node-sass');

const cleanCSS = () => del('./build/css/**/*.css');
const cleanJS = () => del('./build/js/**/*.js');

const browsersList = ['> 1%', 'last 2 versions', 'ie >= 11'];

const compileSCSS = () =>
    src('./src/scss/**/*.scss')
        .pipe(sass())
        .pipe(autoprefixer({ overrideBrowserslist: browsersList }))
        .pipe(cssnano())
        .pipe(dest('./build/css'));

const transpileJS = () =>
    src('./src/js/**/*.js')
        .pipe(babel())
        .pipe(uglify())
        .pipe(dest('./build/js'));

const buildCSS = series(cleanCSS, compileSCSS);
const buildJS = series(cleanJS, transpileJS);

const watchCSS = () => {
    watch('./src/scss/**/*.scss', buildCSS);
};

const watchJS = () => {
    watch('./src/js/**/*.js', buildJS);
};

exports.build = parallel(buildCSS, buildJS);
exports.watch = exports.default = parallel(watchCSS, watchJS);
