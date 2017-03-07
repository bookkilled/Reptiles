/**
 * Edit by bookkilled on 4/25/16.
 */

'use strict';

let $ = require('cheerio');
//let coRequest = require('co-request');

let lib = require('../../lib');
let twentyOneLib = require('./twentyOneLib');

function* twentyOne () {
    let resBody = yield lib.parseBody('http://www.21jingji.com/').then((body) => {
        return body;
    });
    let lists = $(resBody).find('#data_list').children('.li');
    let twentyOneLists = twentyOneLib.parseList(lists);
    let arr = lib.listToArr(twentyOneLists);
    console.log(arr);
    this.response.body = {
        postLists:arr
    };
}
function* twentyOnePrev () {
    let prevUrl = this.request.get('x-custom-header');
    let resBody = yield lib.parseBody(prevUrl).then((body) => {
        return body;
    });
    let arr = [];
    let hasNext = 0;
    let posts = $(resBody).find('#data_list');

    if(posts) {
        hasNext = 1;
        let lists = posts.children('.li');
        let twentyOnePrevLists = twentyOneLib.parseList(lists);
        arr = lib.listToArr(twentyOnePrevLists);
    }
    this.response.body = {
        postLists:arr,
        hasNext: hasNext
    };
}

module.exports.register = (router) => {
    router.get('/to', twentyOne);
    router.get('/to/prev', twentyOnePrev);
};