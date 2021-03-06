const { src, dest, series } = require('gulp');
const clean = require('gulp-clean');
const concat = require('gulp-concat');
const cleanCSS = require('gulp-clean-css');
const terser = require('gulp-terser');
const rev = require('gulp-rev');
const revReplace = require('gulp-rev-replace');
const rename = require('gulp-rename');
const revFormat = require('gulp-rev-format');

function cleanTask(cb) {
  return src('dist/', { read: false, allowEmpty: true })
    .pipe(clean());
}

function copyTask(cb) {
  return src(['src/*', '!src/css', '!src/js', 'rev-manifest.json'])
    .pipe(dest('dist/'));
}

function styleTask(cb) {
  return src('src/css/*', { sourcemaps: true})
    .pipe(concat('styles.min.css'))
    .pipe(cleanCSS())
    .pipe(rename({
        dirname: 'css'
    }))
    .pipe(rev())
    .pipe(revFormat({
        prefix: '-v-',
    }))
    .pipe(dest('dist', { sourcemaps: 'maps' }))
    .pipe(rev.manifest({
      base: 'dist'
    }))
    .pipe(dest('src/'));
}

function jsTask(cb) {
  return src('src/js/*', { sourcemaps: true })
    .pipe(concat('main.min.js'))
    .pipe(terser())
    .pipe(rename({
        dirname: 'js'
    }))
    .pipe(rev())
    .pipe(revFormat({
        prefix: '-v-',
    }))
    .pipe(dest('dist', { sourcemaps: 'maps' }))
    .pipe(rev.manifest({
      base: 'dist',
      merge: true
    }))
    .pipe(dest('src/'));
}

function revReplaceTask(cb) {
  return src('src/index.html')
    .pipe(revReplace({
      manifest: src('dist/rev-manifest.json')
    }))
    .pipe(dest('dist/'))
}

exports.default = series(cleanTask, styleTask, jsTask, copyTask, revReplaceTask);