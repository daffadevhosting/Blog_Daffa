const {src, dest, watch, series } = require('gulp')
const cleanCss = require('gulp-clean-css')
const sass = require('gulp-sass')(require('sass'))


function buildStyles() {
    return src('_styling/**/*.scss')
        .pipe(sass({
            includePaths: ['./node_modules'],
         }).on('error', sass.logError))
        .pipe(cleanCss())
        .pipe(dest('src/style/'))
}

function watchTask() {
    watch(['_styling/**/*.scss'], buildStyles)
}

exports.default = series(buildStyles, watchTask)
