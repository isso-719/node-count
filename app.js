const express = require('express');

const app = express();

const bodyParser = require('body-parser');
const session = require('express-session');

app.use(bodyParser.urlencoded({extended: false}));
app.use(bodyParser.json());

app.use(session({
    secret: "secret word",
    resave: false,
    saveUninitialized: false,
    cookie: {
      maxAge: 60 * 1000
    },
}));

app.get('/', (req, res) => {
    if(req.session.count === undefined) { req.session.count = 0; }
    if(req.session.count2 === undefined) { req.session.count2 = 0; }
    res.render('index.ejs', {count: req.session.count, count2: req.session.count2});
});

app.post('/plus', (req, res) => {
    req.session.count++;
    res.redirect('/');
});

app.post('/minus', (req, res) => {
    req.session.count--;
    res.redirect('/');
});

app.post('/multi', (req, res) => {
    req.session.count *= 2;
    res.redirect('/');
});

app.post('/divide', (req, res) => {
    req.session.count /= 2;
    res.redirect('/');
});

app.post('/clear', (req, res) => {
    req.session.count = 0;
    res.redirect('/');
});



app.post('/plus2', (req, res) => {
    req.session.count2++;
    res.redirect('/');
});

app.post('/minus2', (req, res) => {
    req.session.count2--;
    res.redirect('/');
});

app.post('/multi2', (req, res) => {
    req.session.count2 *= 2;
    res.redirect('/');
});

app.post('/divide2', (req, res) => {
    req.session.count2 /= 2;
    res.redirect('/');
});

app.post('/clear2', (req, res) => {
    req.session.count2 = 0;
    res.redirect('/');
});

app.listen(3000);