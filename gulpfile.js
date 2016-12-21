const gulp = require('gulp');
const connect = require('gulp-connect');
const sass = require('gulp-sass');
const ghPages = require('gulp-gh-pages');
const ssg = require('metal-ssg');

const runSequence = require('run-sequence');

ssg.registerTasks({
	gulp: gulp,
	plugins: ['metal-ssg-components']
});

// AlloyEditor -----------------------------------------------------------------
gulp.task('alloyeditor', () => {
	return gulp.src('node_modules/alloyeditor/dist/**')
		.pipe(gulp.dest('dist/js'));
});

// CSS -------------------------------------------------------------------------

gulp.task('css', () => {
	return gulp.src('src/styles/**/*.scss')
		.pipe(sass({includePaths: ['node_modules']}))
		.pipe(gulp.dest('dist/styles'));
});

// Fonts -----------------------------------------------------------------------

gulp.task('fonts', () => {
	return gulp.src('node_modules/westyle/build/fonts/**')
		.pipe(gulp.dest('dist/fonts'));
});

// Server ----------------------------------------------------------------------

gulp.task('server', () => {
	connect.server({
		root: 'dist',
		port: 8888
	});
});

// Deploy ----------------------------------------------------------------------

gulp.task('wedeploy', () => {
	return gulp.src('src/container.json')
		.pipe(gulp.dest('dist'));
});

gulp.task('deploy', ['default'], () => {
	return gulp.src('dist/**/*')
		.pipe(ghPages({
			branch: 'wedeploy'
		}));
});

// Watch -----------------------------------------------------------------------

gulp.task('watch', () => {
	runSequence('build');
	gulp.watch('src/**/*', ['build']);
});

// Build -----------------------------------------------------------------------

gulp.task('build', (callback) => {
	runSequence('generate', ['alloyeditor', 'css', 'fonts', 'wedeploy'], callback);
});

gulp.task('default', (callback) => {
	runSequence('build', 'server', callback);
});