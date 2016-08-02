sconst fs = require('fs');
const path = require('path');

const express = require('express');
const app = express();

const compress = require('compression');
const layouts = require('express-ejs-layouts');

app.set('layout');
app.set('view engine', 'ejs');
app.set('view options', {layout: 'layout'});
app.set('views', path.join(process.cwd(), '/server/views'));
app.use(compress());
app.use(layouts);
app.use((req, res, next) => {
  res.handle = (err, dbData) => res.status(err ? 400 : 200).send(err || dbData);
  next();
});
app.use('/client', express.static(path.join(process.cwd(), '/client')));


var env = {
  production: process.env.NODE_ENV === 'production'
};
if (env.production) {
  Object.assign(env, {
    assets: JSON.parse(fs.readFileSync(path.join(process.cwd(), 'assets.json')))
  });
}

app.get('/*', function(req, res) {
  res.render('index', {
    env: env
  });
});

var PORT = process.env.PORT || 3001;
app.listen(PORT, err => console.log(err || `Server @ ${PORT}`));

if (env.production === false) {
  var webpack = require('webpack');
  var WebpackDevServer = require('webpack-dev-server');
  var webpackDevConfig = require('./webpack.config.development');

  new WebpackDevServer(webpack(webpackDevConfig), {
    publicPath: '/client/',
    contentBase: './client/',
    inline: true,
    hot: true,
    stats: false,
    historyApiFallback: true,
    headers: {
      'Access-Control-Allow-Origin': 'http://localhost:3001',
      'Access-Control-Allow-Headers': 'X-Requested-With'
    }
  }).listen(3000, 'localhost', (err) => {
    if (err) {
      console.error(err);
    }
    console.log('webpack dev server listening on localhost:3000');
  });
}