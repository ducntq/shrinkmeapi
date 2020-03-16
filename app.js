const express = require('express');
const app = express();
const fetch = require('node-fetch');
const bodyParser = require('body-parser')

app.set('view engine', 'ejs')
app.use(express.urlencoded({ extended: false }))

app.post('/shorturl', async (req, res) => {
    let url = req.body.fullurl;
    let resp = await fetch(`https://shon.xyz/stxt/0/id/93165/auth_token/IdrKyv?s=${encodeURIComponent(url)}`);
    let tinyurl = (await resp.text()).trim();
    res.render('home.ejs', {shorturl: tinyurl});
})

app.get('/', (req, res) => {
    res.render('home.ejs');
})

app.listen(process.env.PORT || 3000);