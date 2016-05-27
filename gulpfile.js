//------------------------------------
// Setup and Varibles
//------------------------------------
var gulp = require('gulp');
	browserSync = require('browser-sync');
	reload =  browserSync.reload;
	plumber = require('gulp-plumber');
	minify = require('gulp-minify-css');
	uglify = require('gulp-uglify');
	rename = require('gulp-rename');
	concat = require('gulp-concat');
	header = require('gulp-header');

//------------------------------------
// Bower move 
//------------------------------------

//------------------------------------
// Third party libs boostrap&jquery concat
//------------------------------------ 
gulp.task('build', function(){
	gulp.src([
		'third-party/bootstrap/dist/js/*.js',
		'third-party/jquery/dist/*.js',
		'third-party/p5.js/lib/*.js'

		])
	.pipe(plumber())
	// .pipe(concat('app.js'))
	.pipe(gulp.dest('./app/third-party'));

	return gulp.src('third-party/bootstrap/dist/css/bootstrap.min.css')
	.pipe(gulp.dest('./app/css'));

});
//------------------------------------
// Personal css 
//------------------------------------
gulp.task('minifyCss',function(){
	gulp.src('css/*.css')
		.pipe(plumber())
		.pipe(minify())
		.pipe(rename({suffix:'.min'}))
		.pipe(header('/*Author: -cyrstem@gmail.com, Author URI: -onesimpleidea.xyz*/\n'))
		.pipe(gulp.dest('app/css'))
		.pipe(reload({stream:true}));
});
//------------------------------------
// JS P5js  mio 
//------------------------------------
gulp.task('scripts',function(){
	gulp.src(['js/main.js','js/works.js'])
		.pipe(plumber())
		.pipe(uglify())
		.pipe(rename({suffix:'.min'}))
		.pipe(header('/*Author: -cyrstem@gmail.com, Author URI: -onesimpleidea.xyz*/\n'))
		.pipe(gulp.dest('./app/js'))
		.pipe(reload({stream:true}));
});
//------------------------------------
// Browser-Sync and html change reload
//------------------------------------
gulp.task('browser-sync', function(){
	browserSync({
		server:{
			baseDir:"./app"
		}
	});
	 gulp.watch("app/*.html").on("change", browserSync.reload);
});

//------------------------------------
// Watch task
//------------------------------------
gulp.task('watch', function(){
	gulp.watch('css/*.css',['minifyCss']);
	gulp.watch('js/*.js',['scripts']);
	gulp.watch('app/*.html');
});
//------------------------------------
// Main task
//------------------------------------
gulp.task('default',['browser-sync','minifyCss','scripts','watch']);
