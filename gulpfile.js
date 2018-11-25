var gulp = require("gulp");
var pug = require("gulp-pug");

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
// gulp.task("watch", function() {
//   return watch("views/app.pug", {
//     ignoreInitial: false
//   }).pipe(gulp.dest("pug"));
// });
