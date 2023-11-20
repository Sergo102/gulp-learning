const {src, dest} = require('gulp');
const spritesmith = require('gulp.spritesmith');
const plumber = require('gulp-plumber');
const image = require('gulp-imagemin');

function spriteMaker(){
  return src('img/*.png')
  .pipe(plumber())
  .pipe(spritesmith(
    {
      imgName: 'sprite.png',
      cssName: 'sprite.scss',
      algorithm: 'binary-tree',
      padding: 20
    }
  ))
  .pipe(dest('sprit-img/'))
}

exports.spriteMaker = spriteMaker;

function minImages(){
  return src('img/*')
  .pipe(plumber())
  .pipe(image([
    image.svgo({
      plugins: [
        {
          removeViewBox: true,
          removeAtrrs: true,
        }
      ]
    }),
    image.gifsicle({
      plugins:[
        {
          optimizationLevel:3
        }
      ]
    })
  ], {
    verbose: true
  }))
  .pipe(dest('img-min/'))
}

exports.minImages = minImages;