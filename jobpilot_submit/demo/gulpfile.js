const gulp = require('gulp');
const { src, dest, watch, series, parallel } = require('gulp');
const uglify = require('gulp-uglify');
const concat = require('gulp-concat');
const minifyCss = require('gulp-clean-css');
const plumberNotifier = require('gulp-plumber-notifier');
const sourcemaps = require('gulp-sourcemaps');
//const sass = require('gulp-sass');
const sass = require('gulp-dart-sass');
const del = require('del');
const imagemin = require('gulp-imagemin');
const imageminPngQuant = require('imagemin-pngquant');
const imageminjpegCrompress = require('imagemin-jpeg-recompress');
const babel = require('gulp-babel');
const rename = require("gulp-rename");
const csscomb = require('gulp-csscomb');
const browserSync = require('browser-sync').create();
const prettyHtml = require('gulp-pretty-html');
const nunjucksRender = require('gulp-nunjucks-render');
const cssbeautify = require('gulp-cssbeautify');

//path 
const files = {
    output: 'dist',
    templates: 'src/templates',
    layout: 'src/layout',
    pages: 'src/pages',
    sass_path: 'src/sass/**/*.{sass,scss}',
    css_path: 'src/css/**/*.css',
    plugins_path: 'src/js/plugins/**/*.js',
    main_js_path: 'src/js/main.js',
    fonts_path: 'src/fonts/**/*',
    jquery_js_path: 'src/js/jquery-3.6.0.min.js',
    image_path: 'src/images/**/*.{png,jpeg,jpg,svg,gif,ico}',
    buildOutput:'build'
};



function serve(done) {
    browserSync.init({
        server: {
            baseDir: files.output
        },
    });
    done();

}



function sassCompile() {
    console.log('sass task start');
    return src('assets/sass/**/*.{sass,scss}')
        .pipe(plumberNotifier())
        .pipe(sourcemaps.init())
        .pipe(sass())
        .pipe(cssbeautify({
            indent: '',
            openbrace: 'separate-line',
            autosemicolon: true
        }))
        .pipe(sourcemaps.write('.'))
        .pipe(dest( 'assets/css'))
        .pipe(browserSync.stream())
        .pipe(rename({ suffix: ".min" }))
        .pipe(minifyCss())
        .pipe(dest('assets/css'));
}





function reload(done) {
    browserSync.reload();
    done();
}

function watchfiles() {
    watch(['assets/sass/**/*.{sass,scss}'], series(sassCompile, reload));
    watch('/*').on('change', browserSync.reload);
}




exports.default = parallel(
   
    sassCompile,
    watchfiles,
    serve,
 

);








