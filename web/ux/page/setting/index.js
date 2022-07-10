"use strict";
exports.__esModule = true;
exports.setting = void 0;
// Imports
var dom_js_1 = require("../../dom.js");
var setting_page = (0, dom_js_1.q)('.setting_page');
// Functions
if (setting_page == null)
    ;
var setting = function () {
    // Variables
    var setting_dropdown_container = (0, dom_js_1.qa)('.setting_page .dropdownn');
    var setting_dropdown_buttons = (0, dom_js_1.qa)('.setting_page .dropdown_select');
    var setting_dropdown_selects = (0, dom_js_1.qa)('.dropdown_menu > *');
    var game_dropdown_result = (0, dom_js_1.q)('.game_dropdown_result');
    var crypto_dropdown_result = (0, dom_js_1.q)('.crypto_dropdown_result');
    var network_dropdown_result = (0, dom_js_1.q)('.network_dropdown_result');
    // Menu
    if (setting_dropdown_buttons == null)
        return console.log('Setting Important Element not found');
    setting_dropdown_buttons.forEach(function (setting_dropdown_button) {
        var parentDropdownElement = setting_dropdown_button.parentElement;
        // Adding class 
        setting_dropdown_button.addEventListener('click', function () {
            parentDropdownElement.classList.toggle('active');
            console.log('Setting menu opened');
        });
        setting_dropdown_selects.forEach(function (setting_dropdown_select) {
            setting_dropdown_select.addEventListener('click', function () {
                parentDropdownElement.classList.remove('active');
            });
        });
    });
    // Menu Text
    if (setting_dropdown_selects == null)
        return console.log('Navbar not found');
    setting_dropdown_selects.forEach(function (setting_dropdown_select) {
        var parentDropdownContainer = setting_dropdown_select.parentElement.parentElement;
        setting_dropdown_select.addEventListener('click', function () {
            console.log(setting_dropdown_select.innerText);
            console.log(parentDropdownContainer.getAttribute('class'));
            if (parentDropdownContainer.classList.contains('game')) {
                console.log('Game Drop-down');
                game_dropdown_result.innerText = setting_dropdown_select.innerText;
                localStorage.setItem('GAME_DROPDOWN_RESULT', setting_dropdown_select.innerText);
            }
            if (parentDropdownContainer.classList.contains('network')) {
                console.log('Network Drop-down');
                console.log(setting_dropdown_select.getAttribute('src'));
                network_dropdown_result.setAttribute('src', setting_dropdown_select.getAttribute('src'));
                localStorage.setItem('NETWORK_DROPDOWN_RESULT', setting_dropdown_select.getAttribute('src'));
            }
            if (parentDropdownContainer.classList.contains('crypto')) {
                console.log('Crypto Drop-down');
                crypto_dropdown_result.innerText = setting_dropdown_select.innerText;
                localStorage.setItem('CRYPTO_DROPDOWN_RESULT', setting_dropdown_select.innerText);
            }
        });
        // Localstorage Power
        game_dropdown_result.innerText = localStorage.getItem('GAME_DROPDOWN_RESULT');
        network_dropdown_result.setAttribute('src', localStorage.getItem('NETWORK_DROPDOWN_RESULT'));
        crypto_dropdown_result.innerText = localStorage.getItem('CRYPTO_DROPDOWN_RESULT');
    });
};
exports.setting = setting;
