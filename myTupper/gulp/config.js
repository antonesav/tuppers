module.exports = Config = {
    source: {
        styles: './src/static/styles/*.styl',
        scripts: './src/static/scripts/*.js',
        pug: '*.pug',
        yml: '**/*.yml',
        svg: './src/static/icons/*.svg',
        static: './src/static',
        html: 'public'
    },
    output: {
        cssName: 'style.css',
        cssPath: './public/css',
        jsName: 'script.js',
        jsPath: './public/js',
        htmlPath: './public',
        libsPath: './public/libs',
        svgPath: './public/images'
    },
    isDevelop: true
};

global.htmlPrettifyConfig = {
    unformatted: ["pre", "code", "textarea", "script", "svg"],
    indent_char: " ",
    indent_size: '4',
    preserve_newlines: true,
    brace_style: "expand",
    end_with_newline: true
};