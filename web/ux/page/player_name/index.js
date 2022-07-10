"use strict";
exports.__esModule = true;
exports.player_name = void 0;
// Imports
var dom_js_1 = require("../../dom.js");
var player_name_page = (0, dom_js_1.q)('.profile_name_page');
// Functions
if (player_name_page == null)
    ;
var player_name = function () {
    // Variables
    var player_name_submit = (0, dom_js_1.q)('.player_name_submit') || null;
    if (player_name_submit == null)
        return;
    player_name_submit.addEventListener('click', function () {
        var profile_name_value = (0, dom_js_1.q)('.player_name_input').value;
        console.log('The Player Name Is', profile_name_value);
        localStorage.setItem('Player_Name', profile_name_value);
        console.log(localStorage.getItem('Player_Name'));
    });
};
exports.player_name = player_name;
