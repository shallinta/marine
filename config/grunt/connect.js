'use strict';

import grunt from 'grunt';
import webpack from 'webpack';
import webpackConfig from './webpack';
import webpackDevMiddleware from 'webpack-dev-middleware';
import ma from '../marine';
import routerApi from '../router-api';
import {rewriteRequest} from 'grunt-connect-route/lib/utils';
import serverRender from '../../serverRender';

let compiler = webpack(webpackConfig.options);

let mountFolder = (connect, dir) => {
  return connect.static(require('path').resolve(dir));
};

export default {
  rules: routerApi,
  dev: {
    options: {
      port: grunt.option('port') || ma.port.www,
      hostname: '0.0.0.0',
      localhost: grunt.option('host') || 'localhost',
      // keepalive: true,
      livereload: ma.port.liveReload,
      middleware: (connect) => {
        return [
          serverRender,
          mountFolder(connect, ma.path.app + '/public'),
          rewriteRequest,
          webpackDevMiddleware(compiler, webpackConfig.options.devMiddleware)//,
          // require('webpack-hot-middleware')(compiler)
        ];
      }
    }
  },
  dist: {
    options: {
      port: grunt.option('port') || ma.port.www || 9000,
      hostname: '0.0.0.0',
      localhost: grunt.option('host') || 'localhost',
      keepalive: true,
      middleware: (connect) => {
        return [
          mountFolder(connect, ma.path.dist),
          mountFolder(connect, ma.path.dist + '/views'),
          rewriteRequest
        ];
      }
    }
  }
};