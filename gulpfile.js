	
	// gulp 自动化构建项目

	var gulp = require('gulp');
	var $ = require('gulp-load-plugins')();
	var open = require('open');

	var app = {
		srcPath: 'src/',
		devPath: 'build/',
		prdPath: 'dist/'
	};

	// 打包依赖文件
	gulp.task('lib', function() {
	    gulp.src('bower_components/**/*')
	      .pipe(gulp.dest(app.devPath + 'vendor'))
	      .pipe(gulp.dest(app.prdPath + 'vendor'))
	      .pipe($.connect.reload());
	});	


	// 打包数据
	gulp.task('json', function() {
	    gulp.src(app.srcPath + 'data/**/*.json')
	      .pipe(gulp.dest(app.devPath +'data'))
	      .pipe(gulp.dest(app.prdPath +'data'))
	      .pipe($.connect.reload());

	});

	// 编译html
	gulp.task('html', function() {
	    gulp.src(app.srcPath + '**/*.html')
	      .pipe(gulp.dest(app.devPath ))
	      .pipe(gulp.dest(app.prdPath ))
	      .pipe($.connect.reload());

	});	

	// 编译压缩css
	gulp.task('less', function() {
	    gulp.src(app.srcPath + 'style/index.less')
	      .pipe($.less())
	      .pipe(gulp.dest(app.devPath+'css'))
	      .pipe($.cssmin())
	      .pipe(gulp.dest(app.prdPath + 'css'))
	      .pipe($.connect.reload());

	});

	// 合并压缩混淆js
	gulp.task('js', function() {
	    gulp.src(app.srcPath + 'script/**/*.js')
	      .pipe($.concat('index.js'))
	      .pipe(gulp.dest(app.devPath + 'js'))
	      .pipe($.uglify())
	      .pipe(gulp.dest(app.prdPath + 'js'))
	      .pipe($.connect.reload());

	});

	//压缩图片
	gulp.task('image', function() {
	    gulp.src(app.srcPath + 'image/**/*')
	      .pipe(gulp.dest(app.devPath + 'image'))
	      .pipe($.imagemin())
	      .pipe(gulp.dest(app.prdPath + 'image'))
	      .pipe($.connect.reload());

	});



	// 移除目录
	gulp.task('clean', function() {
	    gulp.src([app.devPath,app.prdPath])
	      .pipe($.clean())
	});

	// 打包任务、构建
	gulp.task('build',['lib','html','json','less','js','image']);


	// 启动服务
	gulp.task('serve', function() {
	    $.connect.server({
	    	root: [app.devPath],
	    	livereload: true,
	    	port: 8080
	    });

	    open('http://localhost:8080');

	    // 监听变化
	    gulp.watch(app.srcPath + 'script/**/*.js', ['js']);
	    gulp.watch(app.srcPath + '**/*.html', ['html']);
	    gulp.watch(app.srcPath + 'data/**/*.json', ['json']);
	    gulp.watch(app.srcPath + 'style/**/*.less', ['less']);
	    gulp.watch(app.srcPath + 'image/**/*', ['image']);
	    gulp.watch('bower_components/**/*', ['lib']);
	});

	gulp.task('default',['serve']);




