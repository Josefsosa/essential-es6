/**
 * Created by josefsosa on 3/29/16.
 */
var gulp = require('gulp');
var browserSync = require('browser-sync');
var babel = require('gulp-babel');
var clean = require('gulp-clean');

gulp.task('hello', function()
    {
      console.log('Hey dude!');
    }
);

//browserSync Task
gulp.task('browserSync', function()
    {
      browserSync({
        server:
        {
          baseDir: './build'
        }
      });
    }
);

//streams
gulp.task('copyIndex', function()
    {
      return gulp.src('src/index.html')
          .pipe(gulp.dest('./build'))
          .pipe(browserSync.reload({stream: true, open: 'external'}));
    }
);

//Watch files
gulp.task('watchFiles', function()
{
  gulp.watch('src/index.html', ['copyIndex']);
  gulp.watch('src/**/*.js', ['copyJS']);
  gulp.watch('src/**/*.css', ['copyCSS']);
});

//Babel task
gulp.task('babelIt', function()
{
  return gulp.src('src/**/*.js')
      .pipe(babel(
          {
            presets:['es2015']
          }
      ))
      .pipe(gulp.dest('./build'))
      .pipe(browserSync.reload({stream: true}));

});

gulp.task('copyJS', function()
{
  return gulp.src('src/**/*.js')
      .pipe(gulp.dest('./build'))
      .pipe(browserSync.reload({stream: true}));

});

gulp.task('copyCSS', function()
{
  return gulp.src('src/**/*.css')
      .pipe(gulp.dest('./build'))
      .pipe(browserSync.reload({stream: true}));

});

gulp.task('clean', function()
{
  return gulp.src('./build/*.*',{read: false})
      .pipe(clean());
});

gulp.task('default', ['clean', 'copyIndex', 'copyCSS', 'copyJS', 'browserSync', 'watchFiles' ]);

