//------------------------------------
// Setup and Varibles
//------------------------------------
var gulp = require('gulp');
var mainBowerFiles = require('main-bower-files');
var browserSync = require('browser-sync');
var reload =  browserSync.reload;
var plumber = require('gulp-plumber');
var minify = require('gulp-minify-css');
var uglify = require('gulp-uglify');
var rename = require('gulp-rename');
//------------------------------------
// Bower files mimify notocar!!!!!!!!
//------------------------------------
gulp.task('bower', function moveBowerDeps() {
  return gulp.src(mainBowerFiles(), {
      base: 'third-party'
    })
    .pipe(gulp.dest('./app'));
});
//------------------------------------
// Third party libss
//------------------------------------
gulp.task('third',function(){
	gulp.src('js/*.js')
		.pipe(plumber())
		.pipe(uglify())
		.pipe(gulp.dest('app/js'));
});
//------------------------------------
// Personal css
//------------------------------------
gulp.task('minifyCss',function(){
	gulp.src('css/*.css')
		.pipe(plumber())
		.pipe(minify())
		.pipe(rename({suffix:'.min'}))
		.pipe(gulp.dest('app/css'))
		.pipe(reload({stream:true}));
});
//------------------------------------
// JS MIOOOOOOO
//------------------------------------
gulp.task('scripts',function(){
	//gulp.src(['js/main.js','js/volcanes.js'])
	gulp.src('js/main.js')
		.pipe(plumber())
		.pipe(uglify())
		.pipe(gulp.dest('app/js'))
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
// gulp.task('default',['browser-sync','minifyCss','watch']);
