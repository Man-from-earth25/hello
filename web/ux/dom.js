"use strict";
exports.__esModule = true;
exports.qa = exports.q = exports.CLICK_CLEANER_CODE = void 0;
// Variables 
var element_length;
// Functions
var CLICK_CLEANER_CODE = function (_a) {
    var element = _a.element, CLICK_FUNCTION = _a.CLICK_FUNCTION;
    element_length = element.length;
    if (element_length > 1) {
        if (element == null)
            console.log('Click Listner');
        ;
        element.forEach(function (elements) {
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
exports.CLICK_CLEANER_CODE = CLICK_CLEANER_CODE;
function q(child) { return document.querySelector(child); }
exports.q = q;
function qa(child) { return document.querySelectorAll(child); }
exports.qa = qa;
