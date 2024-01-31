// proxy-server.js
const express = require('express');
const request = require('request');

const app = express();
const PORT = process.env.PORT || 3001;

app.use('/', (req, res) => {
    const url = req.query.url;

    res.setHeader('Access-Control-Allow-Origin', '*');
    res.setHeader('Access-Control-Allow-Methods', 'GET,OPTIONS,PATCH,DELETE,POST,PUT');
    res.setHeader('Access-Control-Allow-Headers', 'X-CSRF-Token, X-Requested-With, Accept, Accept-Version, Content-Length, Content-MD5, Content-Type, Date, X-Api-Version');
    res.setHeader('Access-Control-Allow-Credentials', 'true');

    req.pipe(request(url)).pipe(res);
});

app.listen(PORT, () => {
    console.log(`CORS Proxy Server running on http://localhost:${PORT}`);
});
