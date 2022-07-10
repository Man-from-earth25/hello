'use-strick';
"use strict";
exports.__esModule = true;
// Imports
var dom_js_1 = require("./dom.js");
var navbar_js_1 = require("./navbar.js");
var index_js_1 = require("./page/player_name/index.js");
var index_js_2 = require("./page/setting/index.js");
var body = (0, dom_js_1.q)('body');
var html = (0, dom_js_1.q)('body');
var many_elements = (0, dom_js_1.qa)('h1');
var button = (0, dom_js_1.q)('button') || (0, dom_js_1.q)('.sound');
var audio = new Audio();
audio.src = '../media/sound.mp3';
var opLog1 = function () {
    audio.play();
    console.log('Audio played');
};
var opLog2 = function () {
    console.log('H1 Clicked');
};
// Multiverse Click Testing 
// CLICK_CLEANER_CODE({
//     element: many_elements,
//     CLICK_FUNCTION : opLog2
// })
if (body == null)
    console.log('Body Is Needed');
(0, dom_js_1.CLICK_CLEANER_CODE)({
    element: body,
    CLICK_FUNCTION: opLog1
});
console.log('Javascript is Working');
(0, navbar_js_1.navbar)();
(0, index_js_1.player_name)();
(0, index_js_2.setting)();
// Local Storage 
localStorage.setItem('Name', 'Emon');
// console.log('The Player Name From LocalStorage is',localStorage.getItem('Name'));
// console.log(ethers);
if (!window.ethereum) {
}
else {
    console.log('Etherium detected!');
    console.log(window.ethereum);
    console.log(ethers);
}
