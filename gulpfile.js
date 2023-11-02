const {series} = require('gulp');

function publick(cb){
  console.log('publick');
  cb();
}

exports.publick = publick;

function privat(cb){
  console.log('privat');
  cb();
}

function privat2(cb){
  console.log('privat2');
  cb();
}

exports.default = series(publick, privat, privat2);