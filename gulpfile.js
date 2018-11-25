var gulp = require("gulp");
var pug = require("gulp-pug");
var sass = require("gulp-sass");
var minifycss = require("gulp-minify-css");
var watch = require("gulp-watch");

var paths = {
  sass: ["./sass/*.sass"]
};

gulp.task("views", function buildHTML() {
  return gulp
    .src("views/*.pug")
    .pipe(
      pug({
        // client: true
      })
    )
    .pipe(gulp.dest("compiled/"));
});

/* Compile SASS */
gulp.task("sass", function(done) {
  gulp
    .src("./sass/general.sass")
    .pipe(sass())
    .on("error", sass.logError)
    .pipe(gulp.dest("./css/"))
    .pipe(
      minifycss({
        keepSpecialComments: 0
      })
    );
});

/* Watch Mode */
gulp.task("watch", ["sass"], function() {
  gulp.watch(paths.sass, ["sass"]);
});

// gulp.task("watch", function() {
//   return watch("sass/*.sass", {
//     ignoreInitial: false
//   }).pipe(gulp.dest("pug"));
// });
