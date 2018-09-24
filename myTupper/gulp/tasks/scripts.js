const Gulp = require('gulp'),
    Sourcemaps = require('gulp-sourcemaps'),
    Concat = require('gulp-concat'),
    GulpIf = require('gulp-if'),
    Babel = require('gulp-babel'),
    Plumber = require('gulp-plumber'),
    Uglify = require('gulp-uglifyjs'),
    BrowserSync = require('browser-sync').create();

Gulp.task('scripts', function () {
    return Gulp.src(Config.source.scripts)
        .pipe(Plumber())
        .pipe(GulpIf(Config.isDevelop, Sourcemaps.init()))
        .pipe(Concat(Config.output.jsName))
        .pipe(Babel({
            presets: ['es2015']
        }))
        .pipe(GulpIf(Config.isDevelop, Sourcemaps.write()))
        .pipe(Gulp.dest(Config.output.jsPath))
        .pipe(BrowserSync.stream());
});