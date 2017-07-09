const gulp = require("gulp");

// pug compiler
const pug = require("gulp-pug");

// sass compiler
const sass = require("gulp-sass");

// minifier
const uglify = require("gulp-uglify");

// browser-sync
const browserSync = require("browser-sync").create();

// better error handler
const pump = require("pump");

// gulp rename files
const rename = require("gulp-rename");

// minify javascrpt
gulp.task("minify", function () {
    pump([
        gulp.src("js/*.js"),
        uglify(),
        gulp.dest("src/js")
    ]);
});

// pug compiler
gulp.task("pug", function buildHTML() {
    gulp.src("./**.pug")
        .pipe(pug({
            pretty: true
        }))
        .pipe(rename({
            basename: "index"
        }))
        .pipe(gulp.dest("./"));
})

// browser-sync dev server
gulp.task("browser-sync", function() {
    browserSync.init({
        server: {
            baseDir: "./",
            index: "index.html",
            files: "./**"
        }
    });
});

// sass compiler
gulp.task("sass", function() {
    gulp.src("sass/*.scss")
        .pipe(sass().on("error", sass.logError))
        .pipe(gulp.dest("src/css"));
});

gulp.task("watch", function() {
    gulp.watch(["js/*.js", "sass/*.scss", "./**.pug"], ["minify", "sass", "pug"]);
});

gulp.task("default", ["watch", "browser-sync"]);