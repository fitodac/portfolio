var gulp 				= require('gulp'),
		pug 				= require('gulp-pug'), // npm install gulp-pug
		concat 			= require('gulp-concat'), // npm install gulp-concat
		uglify 			= require('gulp-uglify'), // npm install gulp-uglify
		rename 			= require('gulp-rename'), // npm install gulp-rename
		sass 				= require('gulp-sass'), // npm install node-sass
		cssmin 			= require('gulp-cssmin'), // npm install gulp-cssmin
		sourcemaps 	= require('gulp-sourcemaps'), // npm install gulp-sourcemaps
		notify 			= require("gulp-notify"); // npm install --save-dev gulp-notify





// COMPILE PUG
gulp.task('pug', function buildHTML() {
  return gulp.src('pug/*.pug')
	.pipe(pug({ pretty: true }))
	.pipe(gulp.dest('./'))
	.pipe(notify({ message: 'Pug compiled!', onLast: true }));
});





// To compile js, just run 'gulp scripts' on console and be sure to have the right paths.
// gulp.task('scripts', function(){  
// 	gulp.src('assets/js/**/*.js')
// 		// Compile
// 		.pipe(concat('biin.js'))
// 		.pipe(gulp.dest('assets/js/'))
		
// 		// Minify
// 		.pipe(rename('biin.min.js'))
// 		.pipe(uglify())
// 		.pipe(gulp.dest('assets/js/'))

// 		.pipe(notify({ message: 'Scripts compiled!', onLast: true }));
// });







// COMPILE SASS
gulp.task('sass', function(cb){

	// Compile NITRO.css and sourcemaps
	gulp.src('scss/*.scss')
		.pipe(sourcemaps.init())
		.pipe(sass().on('error', sass.logError))
		.pipe(cssmin())
		.pipe(rename({suffix: '.min'}))
		.pipe(sourcemaps.write('.'))
		.pipe(gulp.dest('assets/css/'))

		.pipe(notify({ message: 'SASS compiled!', onLast: true }));

		return cb();
});




// WATCH
gulp.task('watch', function(){
	// gulp.watch('assets/js/*.js', ['scripts']);
	gulp.watch('scss/*.scss', ['sass']);
	gulp.watch('pug/*.pug', ['pug']);
});