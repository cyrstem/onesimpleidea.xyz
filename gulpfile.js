//------------------------------------
// Setup and Varibles
//------------------------------------
var gulp = require('gulp');
	browserSync = require('browser-sync');
	reload =  browserSync.reload;
	plumber = require('gulp-plumber');
	sass = require('gulp-sass');
	bourbon = require('node-bourbon').includePaths;
	neat = require('node-neat').includePaths;
	refills = require('node-refills').includePaths;

	minify = require('gulp-clean-css');
	uglify = require('gulp-uglify');
	rename = require('gulp-rename');
	concat = require('gulp-concat');
	header = require('gulp-header');

//------------------------------------
// Third party libs boostrap&jquery concat
//------------------------------------ 
gulp.task('build', function(){
	gulp.src([
		'third-party/three.js/build/*.js',
		'third-party/jquery/dist/jquery.min.js',
		'third-party/masonry/dist/masonry.pkgd.min.js',
		'third-party/imagesloaded/imagesloaded.pkgd.min.js'
		])
	.pipe(plumber())
	// .pipe(concat('app.js'))
	.pipe(gulp.dest('./app/third-party'));

	// return gulp.src('third-party/bootstrap/dist/css/bootstrap.min.css')
	// .pipe(gulp.dest('./app/css'));

});
//------------------------------------
// Gulp min end JS
//------------------------------------
gulp.task('end',function(){
	gulp.src(['./app/third-party/jquery.min.js', 'js/works.js','./app/third-party/masonry.pkgd.min.js','./app/third-party/imagesloaded.pkgd.min.js' ])
    .pipe(concat('all.js'))

    .pipe(uglify())
    .pipe(header('/*Author: -cyrstem@gmail.com, Author URI: -onesimpleidea.xyz*/\n'))
    .pipe(gulp.dest('./app/js/'))
    .pipe(plumber())
     return gulp.src('./app/css/main.css')
     	.pipe(minify())
		.pipe(rename({suffix:'.min'}))
		.pipe(header('/*Author: -cyrstem@gmail.com, Author URI: -onesimpleidea.xyz*/\n'))
		.pipe(gulp.dest('./app/css'));
	});
//------------------------------------
//  sass to css + bourbon + neat
//------------------------------------
gulp.task('sass', function(){
	gulp.src('sass/*.scss')
		.pipe(sass({
			includePaths: bourbon,
			includePaths: neat,
			includePaths: refills
		}))
		.pipe(gulp.dest('app/css/'))
		.pipe(plumber())
		.pipe(reload({stream:true}));
});

//------------------------------------
// THREEJS mio 
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
	gulp.watch('sass/*.scss',['sass']);
	gulp.watch('js/*.js',['scripts']);
	gulp.watch('app/*.html');
});
//------------------------------------
// Main task
//------------------------------------
gulp.task('default',['browser-sync','sass','scripts','watch']);
