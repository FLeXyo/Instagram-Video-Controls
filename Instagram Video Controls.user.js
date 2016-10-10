// ==UserScript==
// @name         Instagram Video Controls
// @namespace    http://github.com/FLeXyo
// @version      0.1
// @description  Adds controls to videos on Instagram
// @author       FLeX
// @match        https://www.instagram.com/*
// @require      http://ajax.googleapis.com/ajax/libs/jquery/1.7.2/jquery.min.js
// @require      https://gist.github.com/raw/2625891/waitForKeyElements.js
// @grant        GM_addStyle
// @run-at       document-idle
// ==/UserScript==

window.addEventListener('load', waitForKeyElements("video", addControls), false);
addControls();


function addControls() {
    var trashcan1 = document.getElementsByClassName('_80v0r');
    var trashcan2 = document.getElementsByClassName('_c2kdw');
    var trashcan3 = document.getElementsByClassName('_cr348');
    clearTrash(trashcan1);
    clearTrash(trashcan2);
    clearTrash(trashcan3);
    var videos = document.getElementsByTagName('video');
    for (var i = 0; i < videos.length; i++) {
        videos[i].setAttribute("controls","true");
    }
}

function clearTrash(trashcan){
    if (trashcan.length > 0)
    {
        for (var i = 0; i < trashcan.length; i++)
        {
            trashcan[i].parentNode.removeChild(trashcan[i]);
        }
    }
}
