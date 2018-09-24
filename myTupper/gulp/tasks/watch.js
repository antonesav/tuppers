const Gulp = require('gulp');

module.exports = watch = () => {

    // ------------styles
    Gulp.watch(['./src/modules/**/*.styl', './src/static/styles/**/*.styl', './src/css/*.styl', './src/css/partials/*.styl'], {usePolling: true}, Gulp.series('styles'));

    // ------------html
    Gulp.watch('./src/**/*.pug', {usePolling: true}, Gulp.series('html'));

    //-------------data
    Gulp.watch(Config.source.yml, {usePolling: true}, Gulp.series('data', 'html'));

    // ------------scripts
    Gulp.watch(Config.source.scripts, {usePolling: true}, Gulp.series('scripts'));
};
