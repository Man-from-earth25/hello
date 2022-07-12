// Variables 
let element_length;
// Functions
const CLICK_CLEANER_CODE = ({ element, CLICK_FUNCTION }) => {
    element_length = element.length;
    if (element_length > 1) {
        if (element == null)
            console.log('Click Listner');
        ;
        element.forEach((elements) => {
            if (elements == null)
                console.log('Click Listner');
            ;
            elements.addEventListener('click', CLICK_FUNCTION);
        });
    }
    else {
        if (element == null)
            console.log('Click Listner');
        ;
        element.addEventListener('click', CLICK_FUNCTION);
    }
};
function q(child) { return document.querySelector(child); }
function qa(child) { return document.querySelectorAll(child); }
// Exports
export { CLICK_CLEANER_CODE, q, qa };
