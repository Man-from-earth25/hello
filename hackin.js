'use-strick';


// Imports
import { q,qa,CLICK_CLEANER_CODE } from './www/ux/dom.js';


// Variables
let body = q('body');


CLICK_CLEANER_CODE({
    
    ELEMENT: body,
    FUNCTION : (e)=>{
        
        console.log(`X(${e.offsetX}) Y(${e.offsetY})`);
        
    }
    
})
