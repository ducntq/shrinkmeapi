const express = require('express');
const app = express();
const fetch = require('node-fetch');


app.set('view engine', 'ejs')
app.use(express.urlencoded({ extended: false }))

app.post('/shorturl', (req, res) => {
    let url = req.body.fullurl;
})

app.get('/', (req, res) => {
    fetch(`https://shon.xyz/stxt/0/id/93165/auth_token/IdrKyv?s=${url}`)
    .then(res => res.text())
    .then(tinyturl => res.render('home.ejs', {shorurl: tinyurl}));
})

app.listen(process.env.PORT)