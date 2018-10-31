"use strict";

var gulp = require("gulp");
var sass = require("gulp-sass");
var plumber = require("gulp-plumber");
var postcss = require("gulp-postcss");
var autoprefixer = require("autoprefixer");
var server = require("browser-sync").create();
var csso = require("gulp-csso");
var rename = require("gulp-rename");
var image = require("gulp-imagemin");
var webp = require("gulp-webp");
var svgsprite = require("gulp-svg-sprite");
var posthtml = require("gulp-posthtml");
var include = require("posthtml-include");
var del = require("del");
gulp.task("css", function () {
  return gulp.src("source/sass/style.scss")
    .pipe(plumber())
    .pipe(sass())
    .pipe(postcss([
      autoprefixer()
    ]))
    .pipe(gulp.dest("build/css"))
    .pipe(csso())
    .pipe(rename("style.min.css"))
    .pipe(gulp.dest("build/css"))
    .pipe(server.stream());
});
gulp.task("images", function () {
  return gulp.src("source/img/*")
    .pipe(plumber())
    .pipe(image())
    .pipe(gulp.dest("build/img"));
});
gulp.task("webp", function () {
  return gulp.src("build/img/**/*.{png, jpg}")
    .pipe(webp({quality: 90}))
    .pipe(gulp.dest("build/img"));
});
gulp.task("sprite", function () {
  return gulp.src("source/img/*.svg")
    .pipe(svgsprite({
      mode: { symbol: true }
    }))
    .pipe(rename("sprite.svg"))
    .pipe(gulp.dest("build/img"));
});
gulp.task("html", function () {
  return gulp.src("source/*.html")
    .pipe(posthtml([
      include()
    ]))
    .pipe(gulp.dest("build"));
});
gulp.task("copy", function () {
  return gulp.src([
      "source/fonts/*.{woff, woff2}",
      "source/js/**"
    ], {
      base: "source"
    })
    .pipe(gulp.dest("build"));
});
gulp.task("clean", function () {
  return del("build");
});
gulp.task("refresh", function (done) {
  server.reload();
  done();
});
gulp.task("server", function () {
  server.init({
    server: "build/",
  });
  gulp.watch("source/sass/**/*.{scss,sass}", gulp.series("css", "refresh"));
  gulp.watch("source/*.html", gulp.series("html", "refresh"));
  gulp.watch("source/img/*.svg", gulp.series("sprite", "html", "refresh"));
  gulp.watch("source/js/*.js", gulp.series("copy", "refresh"));
});
gulp.task("build", gulp.series("clean", "css", "images", "webp", "sprite", "html", "copy"));
gulp.task("start", gulp.series("build", "server"));
