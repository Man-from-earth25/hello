// Functions
// const q = (child) => document.querySelector(chlid);
// const qa = (child) => {  return document.querySelectorAll(chlid); }
function q(child) { return document.querySelector(child);}
function qa(child) { return document.querySelectorAll(child);}

// Exports
export{
    q,
    qa
}
