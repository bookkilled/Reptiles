/**
 * Edit by bookkilled on 17/3/6.
 */

export let $ = window.$ || window.jQuery ||window.jquery;
export let _ = window._ || window.lodash;

export let showTime = (timenum) => {
    var $Date = new Date();
    var time = Math.floor($Date.getTime()/1000);
    var t;
    if(timenum) {
        t = time-timenum;
        if(t < 60){
            return '刚刚';
        }
        if(t < 3600){
            return Math.floor(t/60)+'分钟前';
        }
        if(t < 86400){
            return Math.floor(t/3600)+'小时前';
        }
        var Ddate = new Date(timenum*1000);
        var Year = Ddate.getFullYear();
        var month = Ddate.getMonth()+1;
        var day = Ddate.getDate();
        return Year+'年'+month+'月'+day+'日';
    }
};