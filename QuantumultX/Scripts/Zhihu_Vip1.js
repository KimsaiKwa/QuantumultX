/******************************
脚本功能：知乎优化
使用声明：⚠️⚠️⚠️此脚本仅供学习与交流，请勿转载与贩卖！⚠️⚠️⚠️
*******************************
    
[rewrite_local]
https://www.zhihu.com/appview/ url script-response-body https://raw.githubusercontent.com/ClydeTime/Quantumult/main/Script/zhihu1.js
^https?:\/\/link\.zhihu\.com\/\?target\=.*$ url script-echo-response https://raw.githubusercontent.com/ClydeTime/Quantumult/main/Script/zhihu2.js

[mitm]
hostname = www.zhihu.com, link.zhihu.com

**************************/

var modifyUrl = $request['url'];
var modifyBody = $response['body']['replace'](/\"is\_copyable\"\ ?\:\ ?false/g, '"is_copyable":true')['replace'](/\"isCopyable\"\ ?\:\ ?false/g, '"isCopyable":true')['replace']('class="AppBar-rightButton"', 'class="AppBar-rightButton" style="visibility:hidden;"')['replace'](/style\=\"font\-size\:17px\"/g, 'style="font-size:17px;color:#777777;"')['replace'](/-webkit-user-select:\w+;?/g, '')['replace'](/-moz-user-select:\w+;?/g, '')['replace'](/-ms-user-select:\w+;?/g, '')['replace'](/user-select:\w+;?/g, '')['replace'](/-webkit-touch-callout:\w+;?/g, '')['replace'](/user-scalable=0/g, 'user-scalable=1')['replace'](/\"\>\d+(\.)?(\d*)?\ (万)?人赞同了该(回答|文章)\<\/a\>/g, '" style="display: none;visibility: hidden;">888 人赞同了码的字</a>')['replace'](/\<\/style\>/, '</style><style>.BottomShare{display: none!important;visibility: hidden!important;}</style>')['replace'](/\<p\>备案号:(\ )?\w+\<\/p\>/g, '')['replace'](/aria-label\=\"[一-龥]*?\"\/\>\<\/button\>/g, 'aria-label=""/></button>')['replace'](/class\=\"KfeCollection-GoodsCardV4-guide\"/g, 'class="KfeCollection-GoodsCardV4-guide" style="display:none!important;visibility:hidden!important;"');
var trueBook = modifyBody['match'](/已解锁价值\ (.\d+\.?\d+?)\ 的(盐选|电子书)/);
if (trueBook) {
    modifyBody = modifyBody['replace'](/\<div\ class\=\"UserLine-Description\"\>([一-龥]| )*?\<\/div\>/g, '<div class="UserLine-Description"><strike style="color:#ce994f;"><span style="color:#ce994f;font-size:16px;">' + trueBook[0x1] + '</span></strike></div>')['replace'](/\<div\ class\=\"KfeCollection-Privilege-newStyle-mobile\"\>/g, '<div class="KfeCollection-Privilege-newStyle-mobile" style="display:none!important;visibility:hidden!important;">');
}
var modifyDiv = '';
if (modifyBody['indexOf']('您的评论将会由作者筛选后显示') != -0x1) {
    modifyDiv = modifyDiv + '<div style="padding: 0 5px;background-color: rgb(212 8 32 / 8%);display: block;text-decoration: none;margin-bottom: 5px;width: fit-content;border-radius: 20px;font-size: 14px;"><div style="color: rgb(212 8 32 / 65%);display: flex;align-items: center;"><div style="vertical-align: middle;fill: currentColor;overflow: hidden;" class="bi x0 y0 w1 h1"><svg role="img" xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" aria-labelledby="shieldIconTitle" style="vertical-align: middle;"><path d="M19,14.7368421 C19,17.122807 16.6666667,19.2105263 12,21 C7.33333333,19.2105263 5,17.122807 5,14.7368421 C5,12.3508772 5,9.36842105 5,5.78947368 C8.13611482,4.59649123 10.4694481,4 12,4 C13.5305519,4 15.8638852,4.59649123 19,5.78947368 C19,9.36842105 19,12.3508772 19,14.7368421 Z"></path></svg></div><div style="flex: 1 1;white-space: nowrap;"><span style="font-family: -apple-system,BlinkMacSystemFont,Helvetica Neue,PingFang SC,Microsoft YaHei,Source Han Sans SC,Noto Sans CJK SC,WenQuanYi Micro Hei,sans-serif;-webkit-tap-highlight-color: rgba(26,26,26,0);font-size: 14px;color: rgb(212 8 32 / 65%);white-space: nowrap;font-weight: 600;padding: 0 5px 0 1px;">糟糕 · 评论会由作者筛选</span></div></div></div>';
}
if ((modifyBody['indexOf']('查看完整内容') != -0x1 || modifyBody['indexOf']('查看全部章节') != -0x1) && modifyBody['indexOf']('paid') != -0x1) {
    modifyDiv = modifyDiv + '<div style="padding: 0 5px;background-color: rgb(212 8 32 / 8%);display: block;text-decoration: none;margin-bottom: 5px;width: fit-content;border-radius: 20px;font-size: 14px;"><div style="color: rgb(212 8 32 / 65%);display: flex;align-items: center;"><div style="vertical-align: middle;fill: currentColor;overflow: hidden;" class="bi x0 y0 w1 h1"><svg role="img" xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" aria-labelledby="shieldIconTitle" style="vertical-align: middle;"><path d="M19,14.7368421 C19,17.122807 16.6666667,19.2105263 12,21 C7.33333333,19.2105263 5,17.122807 5,14.7368421 C5,12.3508772 5,9.36842105 5,5.78947368 C8.13611482,4.59649123 10.4694481,4 12,4 C13.5305519,4 15.8638852,4.59649123 19,5.78947368 C19,9.36842105 19,12.3508772 19,14.7368421 Z"></path></svg></div><div style="flex: 1 1;white-space: nowrap;"><span style="font-family: -apple-system,BlinkMacSystemFont,Helvetica Neue,PingFang SC,Microsoft YaHei,Source Han Sans SC,Noto Sans CJK SC,WenQuanYi Micro Hei,sans-serif;-webkit-tap-highlight-color: rgba(26,26,26,0);font-size: 14px;color: rgb(212 8 32 / 65%);white-space: nowrap;font-weight: 600;padding: 0 5px 0 1px;">糟糕 · 需要付费才能阅读</span></div></div></div>';
}
if (modifyBody['indexOf']('ad-link-card') != -0x1 || modifyBody['indexOf']('xg.zhihu.com') != -0x1 || modifyBody['indexOf']('知乎营销平台') != -0x1 || modifyBody['indexOf']('mcn-link-card') != -0x1) {
    modifyDiv = modifyDiv + '<div style="padding: 0 5px;background-color: rgb(212 8 32 / 8%);display: block;text-decoration: none;margin-bottom: 5px;width: fit-content;border-radius: 20px;font-size: 14px;"><div style="color: rgb(212 8 32 / 65%);display: flex;align-items: center;"><div style="vertical-align: middle;fill: currentColor;overflow: hidden;" class="bi x0 y0 w1 h1"><svg role="img" xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" aria-labelledby="shieldIconTitle" style="vertical-align: middle;"><path d="M19,14.7368421 C19,17.122807 16.6666667,19.2105263 12,21 C7.33333333,19.2105263 5,17.122807 5,14.7368421 C5,12.3508772 5,9.36842105 5,5.78947368 C8.13611482,4.59649123 10.4694481,4 12,4 C13.5305519,4 15.8638852,4.59649123 19,5.78947368 C19,9.36842105 19,12.3508772 19,14.7368421 Z"></path></svg></div><div style="flex: 1 1;white-space: nowrap;"><span style="font-family: -apple-system,BlinkMacSystemFont,Helvetica Neue,PingFang SC,Microsoft YaHei,Source Han Sans SC,Noto Sans CJK SC,WenQuanYi Micro Hei,sans-serif;-webkit-tap-highlight-color: rgba(26,26,26,0);font-size: 14px;color: rgb(212 8 32 / 65%);white-space: nowrap;font-weight: 600;padding: 0 5px 0 1px;">糟糕 · 含有购物营销内容</span></div></div></div>';
}
$done({ 'body': modifyBody });;
