'use strict';
let $ = require('cheerio');

exports.parseList = function (lists) {
    let twentyOneLists = lists.map((index, list) => {
        let titleObj = $(list).find('.listTit');
        let title = titleObj.text();
        let originUrl = titleObj.attr('href');
        let pubDate = $(list).find('.time').attr('data-inputtime');
        let meta =  $(list).find('.shuoming .time').next().text();
        let avatarUrl = $(list).find('.listImg img').attr('src');
        let subjectUrl = '';
        let subjectText = $(list).find('.shuoming span').last().text() || '未知来源';

        return {
            listTitle:title || '',
            listOriginUrl: originUrl || '',
            listPubDate: pubDate || '',
            listMeta: meta || '',
            listAvatarUrl: avatarUrl || '',
            listSubjectUrl: subjectUrl || '',
            listSubjectText: subjectText || ''
        };
    });
    return twentyOneLists;
};
