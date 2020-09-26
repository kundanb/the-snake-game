/* global require, __dirname */

const { createServer } = require('http');
const { readFile } = require('fs');
const { resolve, extname } = require('path');
const launcher = require('chrome-launcher');

const dir = resolve(__dirname, '..', 'build');
const port = 1024;

// ------------------------
// serve directory at http

createServer(function ({ url }, response) {
    const filePath = dir + (url === '/' ? '/index.html' : url);
    const extName = String(extname(filePath)).toLowerCase().replace('.', '');

    const mimeTypes = {
        html: 'text/html',
        js: 'text/javascript',
        css: 'text/css',
        json: 'application/json',
        png: 'image/png',
        jpg: 'image/jpg',
        gif: 'image/gif',
        svg: 'image/svg+xml',
    };

    const contentType = mimeTypes[extName];

    readFile(filePath, function (error, content) {
        if (error) {
            if (error.code === 'ENOENT') {
                response.writeHead(404);
                response.end();
            } else {
                response.writeHead(500);
                response.end();
            }
        } else {
            response.writeHead(200, { 'Content-Type': contentType });
            response.end(content, 'utf-8');
        }
    });
}).listen(port, err => {
    if (err) {
        console.error(err);
    } else {
        launcher.launch({
            startingUrl: `http://localhost:${port}`,
        });
    }
});
