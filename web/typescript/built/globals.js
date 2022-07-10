'use-strick';
// Imports
import { q, qa, CLICK_CLEANER_CODE } from './dom.js';
import { navbar } from './navbar.js';
import { player_name } from './page/player_name/index.js';
import { setting } from './page/setting/index.js';
let body = q('body');
let html = q('body');
let many_elements = qa('h1');
let button = q('button') || q('.sound');
const audio = new Audio();
audio.src = '../media/sound.mp3';
const opLog1 = () => {
    audio.play();
    console.log('Audio played');
};
const opLog2 = () => {
    console.log('H1 Clicked');
};
// Multiverse Click Testing 
// CLICK_CLEANER_CODE({
//     element: many_elements,
//     CLICK_FUNCTION : opLog2
// })
if (body == null)
    console.log('Body Is Needed');
CLICK_CLEANER_CODE({
    element: body,
    CLICK_FUNCTION: opLog1
});
console.log('Javascript is Working');
navbar();
player_name();
setting();
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
