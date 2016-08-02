import express from 'express';
import webpack from 'webpack';
import path from 'path';
import config from '../webpack.config';
import logger from 'morgan';
import bodyParser from 'body-parser';
import cookieParser from 'cookie-parser';
import mongoose from 'mongoose';
import api from './api/index'


const PORT = process.env.PORT || 3000;
const MONGO_URL = process.env.MONDODB_URI || 'mongodb://localhost/vapeSwitch';
const app = express();
const compiler = webpack(config);

app.use(require('webpack-dev-middleware')(compiler, {
  noInfo: true,
  publicPath: config.output.publicPath,
}));
app.use(require('webpack-hot-middleware')(compiler));
app.use(logger('dev'));
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: false }));
app.use(cookieParser());
app.use((req, res, next) => {
  res.handle = (err, dbData) => res.status(err ? 400 : 200).send(err || dbData);
  next();
})
app.use('/api', api)

app.get('*', (req, res) => res.sendFile(path.join(__dirname, '../src/index.html')));

mongoose.connect(MONGO_URL, err => console.log(err || `Server on ${PORT}`));
app.listen(PORT, err => console.log(err || `Server on ${PORT}`));
