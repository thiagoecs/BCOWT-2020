'use strict';
const express = require('express');
const session = require('express-session');
const bodyParser = require('body-parser');
const cookieParser = require('cookie-parser');
const app = express();
const port = 3000;

const username = 'foo';
const password = 'bar';

app.use(session({
  secret: 'keyboard cat',
  resave: true,
  saveUninitialized: true,
  cookie: { maxAge: 60 * 1000 }
}));

app.use(bodyParser.urlencoded({extended: true}));

app.use(cookieParser());

app.set('views', './views');
app.set('view engine', 'pug');

app.get('/', (req, res) => {
  res.render('home');
});

app.get('/form', (req, res) => {
  res.render('form');
});

app.get('/secret', (req, res) => {
  console.log('session stuff?', req.session);
  if(req.session.logged){
    res.render('secret');
  } else{
    res.send('good try ;)');
  }
});

app.post('/login', (req, res) => {
  console.log('username', req.body.username);
  if(req.body.username === username) {
    req.session.logged = true;
    req.session.test = { more: 'stuff', yay: 42};
    res.redirect('secret');
  } else{
    req.session.logged = false;
    res.redirect('form');
  }
});


app.get('/setCookie/:clr', (req, res) => {
  res.cookie('color', req.params.clr, {httpOnly: true}).send('cookie set');
});

app.get('/readCookie/', (req, res) => {
  console.log('Cookies: ', req.cookies);
  res.send('cookie read');
});

app.get('/deleteCookie', (req, res) => {
  res.clearCookie('color');
  res.send('cookie deleted');
});

app.listen(port, () => console.log(`Example app listening on port ${port}!`));
