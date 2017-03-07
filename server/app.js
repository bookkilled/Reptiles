/**
 * Edit by bookkilled on 16/4/8.
 */

'use strict';

let compress = require('koa-compress');
let logger = require('koa-logger');
let serve = require('koa-static');
let koa = require('koa');
let koaJson = require('koa-json');
let bodyParser = require('koa-bodyparser');
//var router = require('koa-router')();

let path = require('path');

let lib = require('./lib');
let routerRegister = require('./router/index');
const Port = '8003';
const IPadress = '127.0.0.1';
let app = koa();

app.use(bodyParser());
app.use(koaJson());
// Serve static files
app.use(serve(path.resolve(__dirname, '../public')));
// Compress
app.use(compress());
// Logger
app.use(logger());
//router
routerRegister.register(app);
//router.routes()
//app.use(router.middleware());

app.listen(Port, IPadress,  () => {
    console.log(process.env.NODE_ENV, `listening on ${IPadress}:${Port}`);
});