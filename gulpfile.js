/* ==============================================================================
 * Gulpfile for danilucaci.com
 * V1.0.0
 * Using gulp4 to build svg sprite from several svg icons
 * run with npm script
 */

const gulp = require("gulp");
const del = require("del");
const svgSprite = require("gulp-svg-sprites");

/* -------------------------------------------------------------------------------
 * SVG Stuff
 */

// SVG Sprinting
gulp.task("build:svg", (done) => {
  return gulp
    .src("./icons/*.svg")
    .pipe(svgSprite({
      svg: {
        symbols: "icons.svg",
      },
      preview: false,
      mode: "symbols",
      selector: "%f",
      // selector: "icon-%f",
    }))
    .pipe(gulp.dest("./icons/sprite/"));
  done();
});

// Delete previous svg sprite from public/
gulp.task("clean:svg", (done) => {
  del(["./icons/sprite/*"]);
  done();
});

/* -------------------------------------------------------------------------------
 * Sprite builds svg sprite
 */

gulp.task("build:svg", gulp.series("clean:svg", "build:svg"));
