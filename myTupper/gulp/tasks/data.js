const Gulp = require('gulp'),
    Plumber = require('gulp-plumber'),
    Yaml = require('gulp-yaml'),
    MergeJson = require('gulp-merge-json'),
    BrowserSync = require('browser-sync');

Gulp.task('data', () => {
    return Gulp.src(Config.source.yml, {cwd: 'src/modules/'})
        .pipe(Plumber())
        .pipe(Yaml({space: '\t'}))
        .pipe(MergeJson({fileName: 'data.json'}))
        .pipe(Gulp.dest('tmp'))
        .pipe(BrowserSync.stream());
});