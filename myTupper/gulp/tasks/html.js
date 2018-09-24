const Gulp = require('gulp'),
    Pug = require('gulp-pug'),
    Prettify = require('gulp-prettify'),
    Plumber = require('gulp-plumber'),
    Path = require('path'),
    Fs = require('fs'),
    BrowserSync = require('browser-sync');

const GetJsonData = file =>
    JSON.parse(Fs.readFileSync(Path.join(process.cwd(), file), "utf8"));

Gulp.task('html', () => {
    const pugConfig = {
        locals: GetJsonData('./tmp/data.json')
    };
    return Gulp.src(Config.source.pug, {cwd: './src/pages'})
        .pipe(Plumber())
        .pipe(Pug(pugConfig))
        .pipe(Prettify(global.htmlPrettifyConfig))
        .pipe(Gulp.dest(Config.output.htmlPath))
        .pipe(BrowserSync.stream());
});