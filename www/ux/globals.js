'use-strick';


// Imports
import { q,qa,CLICK_CLEANER_CODE } from './dom.js';
import { navbar } from './navbar.js';
import { player_name } from './page/player_name/index.js';
import { setting } from './page/setting/index.js';


// Varibles
let body = q('body');
let html = q('body');
let many_elements = qa('h1');
let button = q('button') || q('.sound');
const audio = new Audio();
audio.src = '../media/N56BNFY-click.mp3';


const opLog1 = ()=>{
    // audio.play();
    // console.log('Audio played');
}
const opLog2 = ()=>{
    console.log('H1 Clicked');
}
// Multiverse Click Testing 
// CLICK_CLEANER_CODE({
//     ELEMENT: many_elements,
//     FUNCTION : opLog2
// })
if(body == null) console.log('Body Is Needed');
CLICK_CLEANER_CODE({
    
    ELEMENT: body,
    FUNCTION : opLog1
    
})



// Function Inisilization
console.log('Javascript is Working');
navbar();
player_name();
setting();


// Local Storage 
localStorage.setItem('Name','Emon');


// Ethereum Detection
if(!window.ethereum){
}
else{
    
    console.log('Etherium detected!');
    console.log(window.ethereum);
    console.log(ethers);
    
}




    
                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                    
