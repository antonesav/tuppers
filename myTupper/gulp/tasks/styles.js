const Gulp = require('gulp'),
    Concat = require('gulp-concat'),
    Stylus = require('gulp-stylus'),
    Plumber = require('gulp-plumber'),
    Autoprefixer = require('gulp-autoprefixer'),
    Sourcemaps = require('gulp-sourcemaps'),
    CleanCss = require('gulp-clean-css'),
    GulpIf = require('gulp-if'),
    BrowserSync = require('browser-sync');

Gulp.task('styles', function () {
    return Gulp.src(Config.source.styles)
        .pipe(Plumber())
        .pipe(GulpIf(Config.isDevelop, Sourcemaps.init()))
        .pipe(Stylus())
        .pipe(Autoprefixer({
            browsers: ['last 3 versions'],
            cascade: false,
            grid: true
        }))
        .pipe(Concat(Config.output.cssName))
        .pipe(GulpIf(!Config.isDevelop, CleanCss()))
        .pipe(GulpIf(Config.isDevelop, Sourcemaps.write()))
        .pipe(Gulp.dest(Config.output.cssPath))
        .pipe(BrowserSync.stream());
});