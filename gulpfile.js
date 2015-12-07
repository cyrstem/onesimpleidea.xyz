// ////////////////////////////////////////////
// require start
// ////////////////////////////////////////////
var gulp = 	 require('gulp'),
	uglify = require('gulp-uglify');
	concat = require('gulp-concat');
	filter = require('gulp-filter');
	mainBowerFiles= require('main-bower-files');
	browserSync = require('browser-sync'),
	reload = browserSync.reload,
	minify = require('gulp-minify-css');
	plumber = require('gulp-plumber')
	rename = require('gulp-rename');

var filterByExtension = function(extension){  
    return filter(function(file){
        return file.path.match(new RegExp('.' + extension + '$'));
    });
};
// ////////////////////////////////////////////
// task start css niceeeee
// ////////////////////////////////////////////

gulp.task('minifyCSS', function(){
	gulp.src('css/*.css')
		.pipe(plumber())
		.pipe(minify())
		.pipe(rename({suffix:'.min'}))
		.pipe(gulp.dest('dist/css'))
		.pipe(reload({stream:true}));
});
// ////////////////////////////////////////////
// task start imgs Compresss
// ////////////////////////////////////////////


// ////////////////////////////////////////////
// task start htmls Move dist
// ////////////////////////////////////////////

gulp.task('moveHTML',function(){
	gulp.src('*.html')
		.pipe(plumber())
		.pipe(gulp.dest('dist'));
});

// ////////////////////////////////////////////
// task start Js
// ////////////////////////////////////////////

gulp.task('bower', function() {
  return gulp.src(mainBowerFiles(), {
      base: 'libs/'

    })
    .pipe(gulp.dest('dist/lib'));

});

// ////////////////////////////////////////////
// task start move asstessss!!! bower to dist
// ////////////////////////////////////////////

// ////////////////////////////////////////////
// task start Browser Sync
// ////////////////////////////////////////////
gulp.task('browser-sync', function(){
	browserSync({
		server:{
			baseDir:"dist"
		}
	});
	gulp.watch("dist/*.html").on("change", browserSync.reload);
});

// ////////////////////////////////////////////
// task start watchs CSS
// ////////////////////////////////////////////
gulp.task('watch', function(){
	gulp.watch('css/*.css',['minifyCSS']);
	gulp.watch('*.html',['moveHTML']);

});
// ////////////////////////////////////////////
// master start -comand or default task
// ////////////////////////////////////////////
gulp.task('default',['bower','browser-sync','watch','moveHTML','minifyCSS' ]);






