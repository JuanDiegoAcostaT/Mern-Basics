const express = require('express');
const app = express();
const path = require('path');
const webpack = require('webpack');
const webpackDevMiddleware = require('webpack-dev-middleware');
const webpackConfig = require('../webpack.config');


//Settings

app.set('PORT', process.env.PORT || 3000);


//Middlewares


app.use(express.urlencoded({ extended : false }));
app.use(express.json());
app.use(webpackDevMiddleware(webpack(webpackConfig)));

//Routes

app.get('/', (req, res, next) => {
    res.send('Hello World')
})


app.get('/api', (req, res, next) => {
    res.json({ api: 'Works'});
})


//Static Files

app.use(express.static(path.join(__dirname, '/public')))

// Initializing Server

app.listen(app.get('PORT'), () => {
    console.log(`Server on port ${app.get('PORT')}`)
});