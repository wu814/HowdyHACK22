import React from 'react'
import express from 'express'
import path from 'path'
const session = require('express-session');
const compression = require('compression')
const FileStore = require('session-file-store')(session);

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