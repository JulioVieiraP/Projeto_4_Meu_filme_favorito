const gulp = require('gulp')
const sass = require('gulp-sass')(require('sass'))
const uglify = require('gulp-uglify')

function Sass() {
    return gulp.src('./src/styles/*.scss')
        .pipe(sass({ outputStyle: 'compressed' }))
        .pipe(gulp.dest('./build/css'))
}

function scripts(){
    return gulp.src('./src/scripts/*.js')
    .pipe(uglify())
    .pipe(gulp.dest('./build/js'))
}

function Watch() {
    gulp.watch('./src/styles/**/*.scss', Sass)
}

exports.default = gulp.parallel(Sass, Watch, scripts)
