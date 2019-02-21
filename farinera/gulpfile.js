var gulp 		= require('gulp'),
		jade 		= require('gulp-jade'), // npm install gulp-jade
		sass 		= require('gulp-sass'), // npm install node-sass
		cssmin 	= require('gulp-cssmin'), // npm install gulp-cssmin
		notify 	= require("gulp-notify"); // npm install --save-dev gulp-notify




// COMPILE SASS
gulp.task('sass', function(){
	gulp.src('./scss/**/*.scss')
		.pipe(sass())
		.pipe(gulp.dest('./assets/css/'))
		.pipe(notify({ message: 'SASS compiled!' }));
});




// COMPILE JADE
gulp.task('jade', function(){
	gulp.src('./jade/*.jade')
		.pipe(jade({ pretty: true }))
		.pipe(gulp.dest('./'))
		.pipe(notify({ message: 'Jade compiled!' }));
});




// WATCH
gulp.task('watch', function(){
	gulp.watch('./scss/**/*.scss', ['sass']);
	gulp.watch('./jade/*.jade', ['jade']);
});






