const fetch = require('node-fetch');

(async () => {
    let url = 'https://vnexpress.net';
    let resp = await fetch(`https://shon.xyz/stxt/0/id/93165/auth_token/IdrKyv?s=${encodeURIComponent(url)}`);
    console.log((await resp.text()).trim());
})();