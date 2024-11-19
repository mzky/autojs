// ==UserScript==
// @name         对外经贸刷课
// @namespace    自动点击弹窗按钮
// @version      0.1.0
// @description  对外经贸刷课时自动点击弹窗按钮
// @author       mzky
// @match        *://*.euibe.*
// ==/UserScript==

(function() {
    "use strict";
    async function next(){
        setInterval(function() {
            var nextLessonButton = document.querySelector('#layui-layer1 > div.layui-layer-btn.layui-layer-btn- > a'); 
            if (nextLessonButton && nextLessonButton.textContent === '下一课时') {
				nextLessonButton.click();
                console.log("点击下一课时");
			}
        }, 3000);
    }
    async function message_close(){
        setInterval(function() { 
            var jx = document.querySelector('#message_close');
            if (jx && jx.value === '继续学习'){
                window.focus();
                jx.click();
                console.log("点击继续学习");
            }
        }, 3000);
    }
    async function play(){
        setInterval(function() { 
           var targetDiv = document.querySelector('form > div > div:nth-child(1) > div:nth-child(2) > div:nth-child(4)');
            if (targetDiv) {
                player.play();
                console.log('点击播放');
            }
        }, 3000);
    }
    next();
    play();
    message_close();
})();
