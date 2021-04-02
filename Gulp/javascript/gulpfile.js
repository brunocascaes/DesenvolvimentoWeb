const { series } = require('gulp')
const gulp = require('gulp')
const concat = require('gulp-concat')
const uglify = require('gulp-uglify')
const babel = require('gulp-babel')

function padrao(cb) {
    gulp.src('src/**/*.js') //seleciona arquivos
        .pipe(babel({       //transforma para codigo mais compativel
            comments: false,
            presets: ["env"]
        }))
        .pipe(uglify())  //minificação: remove caracteres em branco, tabs, etc
        .on('error', err => console.log(err))
        .pipe(concat('codigo.min.js')) //concatenação dos arquivos 
        .pipe(gulp.dest('build'))

    return cb()
}

function fim(cb) {
    console.log('Fim')
    return cb()
}

exports.default = series(padrao, fim)