const Gulp = require('gulp'),
    BrowserSync = require('browser-sync');


Gulp.task('sync', function () {
    BrowserSync.init({
        server: {
            baseDir: Config.output.htmlPath
        },
        notify: false,
        open: false,
        injectChanges: true,
        // tunnel: "my-private-site"
    });
});