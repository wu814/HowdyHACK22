import React from 'react'
import express from 'express'
import path from 'path'
const session = require('express-session');
const compression = require('compression')
const FileStore = require('session-file-store')(session);

const app = express();
const now = new Date();

// formatting app
app.use(express.text({limit: '500mb'}));
app.use(express.json({limit: '500mb'}));
app.use(express.raw({limit: '500mb'}));
// image save location
app.use('/images', express.static(path.join(__dirname, '..', 'images')));
// catch invalid CSRF
app.use((err, req, res, next) => {
  if (err.code !== 'EBADCSRFTOKEN') {
      return next(err);
  }

  log.error(`Invalid CSRF token: ${req.headers['x-csrf-token']}, secret: ${req.cookies['_csrf']}`);

  err = new Error('Invalid CSRF token');
  err.status = 403;
  next(err);
});
// catch 404 and forward to error handler
app.use((req, res, next) => {
  const err = new Error('Router not found for request ' + req.url);
  err.status = 404;
  next(err);
});
// error handler
app.use((err, req, res, next) => {
  if (err && err.message && (
      (err.message.includes("Router not found for request") && err.message.includes(".js.map"))
      || (err.message.includes("Router not found for request") && err.message.includes(".css.map"))
  )) {
      // ignore
  }
  else {
      log.info(err);
  }

  res.status(err.status || 500);
  res.send({
      message: err.message
  });
});

function App(){
}


export default App

/*
class Post extends React.Component {
  render() {
    return (
      <div class="post__preview">
            <input class="post__title" type="text"></input>
            <textarea class="post__body"></textarea>
        </div>
    );
      */