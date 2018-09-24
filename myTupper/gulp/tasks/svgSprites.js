const Gulp = require('gulp'),
    SvgSprite = require('gulp-svg-sprite'),
    SvgMin = require('gulp-svgmin'),
    Cheerio = require('gulp-cheerio'),
    Replace = require('gulp-replace'),
    Fs = require('file-system');

Gulp.task('svgSprites', function () {
    return Gulp.src(Config.source.svg)
        .pipe(SvgMin({
            js2svg: {
                pretty: true
            }
        }))
        .pipe(Cheerio({
            run: function ($) {
                $('[fill]').removeAttr('fill');
                $('[stroke]').removeAttr('stroke');
                $('[style]').removeAttr('style');
                $('style').remove();
            },
            parserOptions: {xmlMode: true}
        }))
        .pipe(Replace('&gt;', '>'))
        .pipe(SvgSprite({
            mode: {
                symbol: {
                    sprite: '../icons/sprite.svg',
                    render: {
                        styl: {
                            dest: '../../../../../src/static/styles/sprites.styl',
                            template: './gulp/templates/sprite-html.hbs'
                        }
                    }
                }
            }
        }))
        .pipe(Gulp.dest(Config.output.svgPath));
});
