"use strict";
const { src, dest, series, parallel, watch } = require("gulp");
const del = require("del");
const browsersync = require("browser-sync");
const babel = require("gulp-babel");
const concat = require("gulp-concat");
const sass = require("gulp-sass")(require("sass"));

const source = "src";
const destination = "dist";

async function clean(cb) {
  await del(destination);
  cb();
}

function html(cb) {
  src(`${source}/**/*.html`).pipe(dest(destination));
  cb();
}

function video(cb) {
  src(`${source}/**/*.mp4`).pipe(dest(destination));
  cb();
}

function images(cb) {
  src(`${source}/**/*`).pipe(dest(destination));
  cb();
}

function css(cb) {
  src(`${source}/**/*.scss`)
    .pipe(
      sass({
        outputStyle: "compressed",
      })
    )
    .pipe(dest(`${destination}/`));
  cb();
}

function js(cb) {
  // src([
  //   `${source}/js/main.js`,
  //   `${source}/js/app.js`,
  //   `${source}/js/observer.js`,
  // ])
  src(`${source}/**/*.js`)
    .pipe(
      babel({
        presets: ["@babel/env"],
      })
    )
    .pipe(concat("bundle.js"))
    .pipe(dest(`${destination}/js`));
  cb();
}

function watcher(cb) {
  watch(`${source}/**/*.html`).on("change", series(html, browsersync.reload));
  watch(`${source}/**/*.scss`).on("change", series(css, browsersync.reload));
  watch(`${source}/**/*.js`).on("change", series(js, browsersync.reload));
  cb();
}

function server(cb) {
  browsersync.init({
    notify: false,
    port: 3000,
    server: {
      baseDir: destination,
    },
  });
  cb();
}

exports.html = html;
exports.css = css;
exports.js = js;
exports.video = video;
exports.images = images;

exports.default = series(
  clean,
  parallel(html, css, js, images, video),
  server,
  watcher
);
