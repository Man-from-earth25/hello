'use-strick';


// Imports
import { q,qa,CLICK_CLEANER_CODE } from './www/ux/dom.js';


// Variables
let body = q('body');


// Click Sound 
const audio = new Audio();
audio.src = './click.mp3';



// Function Inisilization
CLICK_CLEANER_CODE({
    
    ELEMENT: body,
    FUNCTION : (e)=>{
        
        audio.play();
        console.log(`X(${e.offsetX}) Y(${e.offsetY})`);
        
    }
    
})






