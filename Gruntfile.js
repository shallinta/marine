'use strict';

require('babel-polyfill');
require('babel-core/register');

var grunt = require('grunt');

// 定义编译类型，并将其存入运行环境变量中
switch (grunt.option('deploy-type')) {
  case 'beta':
    process.env.NODE_ENV = 'beta';
    break;
  case 'prod':
    process.env.NODE_ENV = 'production';
    break;
  case 'dev':
    process.env.NODE_ENV = 'development';
    break;
  default:
    process.env.NODE_ENV = 'local';
}

module.exports = require('./Gruntfile.es6');
