var gulp,
    sass,
    uglify,
    pump,
    pug,
    rename,
    bs,
    bsStream,
    reload;

gulp = require("gulp");
sass = require("gulp-sass");
uglify = require("gulp-uglify");
pump = require("pump");
pug = require("gulp-pug");
rename = require("gulp-rename");
bs = require("browser-sync").create();

gulp.task("sass", function () {
    return gulp.src("./sass/**.scss")
        .pipe(sass())
        .pipe(gulp.dest("./dist/css"))
        .pipe(bs.reload({
            stream: true
        }));
});

gulp.task("uglify", function (cb) {
    pump([
        gulp.src("./js/**.js"),
        uglify(),
        gulp.dest("./dist/js"),
        bs.reload({
            stream: true
        })
    ], cb);
});

gulp.task("pug", function () {
    return gulp.src("./**.pug")
        .pipe(pug({
            pretty: true
        }))
        .pipe(rename({
            basename: "index"
        }))
        .pipe(gulp.dest("./"))
        .pipe(bs.reload({
            stream: true
        }));
});

gulp.task("server", ["sass", "uglify", "pug"], function () {
    bs.init({
        server: "./"
    });
    gulp.watch("./sass/**.scss", ["sass"]);
    gulp.watch("./js/**.js", ["uglify"]);
    gulp.watch("./**.pug", ["pug"]);
    gulp.watch("./**.html").on("change", bs.reload);
});

gulp.task("default", ["sass", "uglify", "pug", "server"]);