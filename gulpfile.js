// gulpプラグインの読みこみ
const gulp = require('gulp')

// 画像を圧縮するプラグインの読み込み
const imagemin = require('gulp-imagemin')
const pngquant = require('imagemin-pngquant')
const mozjpeg = require('imagemin-mozjpeg')

// imagesフォルダのpng,jpg画像を圧縮して、minified_imageフォルダに保存する
gulp.task('default', function() { // タスクを登録
  return gulp.src('./images/*.{png,jpg}') // imagesフォルダ以下のpng,jpg画像を取得
    .pipe(imagemin(
      [
        pngquant({
          quality: [.65, .8],
          speed: 1
        }),
        mozjpeg({
          quality: 80,
          progressive: true
        }),
        imagemin.svgo(),
        imagemin.optipng(),
        imagemin.gifsicle()
      ],
    )) // 画像の圧縮処理
    .pipe(gulp.dest('./dist')) //保存
})
