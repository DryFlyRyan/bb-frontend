var gulp = require('gulp');
var browserSync = require('browser-sync').create();
var sass = require('gulp-sass');

gulp.task('serve', ['sass', 'compress'], function() {

	browserSync.init({
			server: {
					baseDir: "./"
			}
	});

	gulp.watch("./**/*.scss", ['sass']).on('change', browserSync.reload);
	gulp.watch("./js/**.js").on('change', browserSync.reload);
	gulp.watch("./*.html").on('change', browserSync.reload);

});

/* Need to make sure Angular will take the compression. */

// gulp.task('compress', function () {
// 	return gulp.src('./js/**/*.js')
// 		.pipe(minify())
// 		.pipe(gulp.dest('./build'));
// });

gulp.task('sass', function() {
    return gulp.src("./scss/*.scss")
        .pipe(sass())
        .pipe(gulp.dest("./build"))
        .pipe(browserSync.stream());
});

gulp.task('default', ['serve']);
