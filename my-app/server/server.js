//Imports
import express from 'express';
import cors from 'cors'
import { Low, JSONFile } from 'lowdb'

import React from 'react';
import ReactDOM from 'react-dom/server';
import App from ".../src/App";

const PORT = 8000;

const app = express();

app.use("^/$", (req, res, next) => {
    fs.readFile(path.resolve('./public/index.html'), 'utf-8', (err, data) => {
        if(err){
            console.log(err);
            return res.status(500).send("Error detected");
        }
    return res.send(
        data.replace(
            '<div id="root"></div', 
            '<div id="root">${ReactDOMServer.renderToString(<App />)}</div>'
    )
    );
    });
});

app.use(express.static(
    path.resolve(__dirname, '..', 'build' )
));

app.listen(PORT, () => {
    console.log('App launched on ${PORT}');
});