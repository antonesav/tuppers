'use strict';

const Gulp = require('gulp'),
    Config = require('./gulp/config'),
    RequireDir = require('require-dir'),
    Del = require('del');

RequireDir('./gulp/tasks');

const ProjectName = 'Tupperware';
global.projectName = ProjectName;

Gulp.task('default', Gulp.series(['data', 'svgSprites', 'styles', 'html', 'scripts'], Gulp.parallel(watch)));

function clean(cb) {
    Del('dist');
    cb();
}