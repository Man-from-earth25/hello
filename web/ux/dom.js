// Variables 
let element_length;

// Functions
const CLICK_CLEANER_CODE = ({ ELEMENT, FUNCTION }) => {
    
    element_length = ELEMENT.length;
    
    if (element_length > 1) {
        
        if(ELEMENT == null) console.log('Click Listner');;
        ELEMENT.forEach((elements) => {
            
            if(elements == null) console.log('Click Listner');;
            elements.addEventListener('click', FUNCTION);
            
            
        });
        
    } else {
        
        if(ELEMENT == null) console.log('Click Listner');;
        ELEMENT.addEventListener('click', FUNCTION);
        
    }
}
function q(child) { return document.querySelector(child);}
function qa(child) { return document.querySelectorAll(child);}









// Exports
export{
    
    CLICK_CLEANER_CODE,    
    q,
    qa
    
}
