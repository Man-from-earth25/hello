"use strict";
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
var __generator = (this && this.__generator) || function (thisArg, body) {
    var _ = { label: 0, sent: function() { if (t[0] & 1) throw t[1]; return t[1]; }, trys: [], ops: [] }, f, y, t, g;
    return g = { next: verb(0), "throw": verb(1), "return": verb(2) }, typeof Symbol === "function" && (g[Symbol.iterator] = function() { return this; }), g;
    function verb(n) { return function (v) { return step([n, v]); }; }
    function step(op) {
        if (f) throw new TypeError("Generator is already executing.");
        while (_) try {
            if (f = 1, y && (t = op[0] & 2 ? y["return"] : op[0] ? y["throw"] || ((t = y["return"]) && t.call(y), 0) : y.next) && !(t = t.call(y, op[1])).done) return t;
            if (y = 0, t) op = [op[0] & 2, t.value];
            switch (op[0]) {
                case 0: case 1: t = op; break;
                case 4: _.label++; return { value: op[1], done: false };
                case 5: _.label++; y = op[1]; op = [0]; continue;
                case 7: op = _.ops.pop(); _.trys.pop(); continue;
                default:
                    if (!(t = _.trys, t = t.length > 0 && t[t.length - 1]) && (op[0] === 6 || op[0] === 2)) { _ = 0; continue; }
                    if (op[0] === 3 && (!t || (op[1] > t[0] && op[1] < t[3]))) { _.label = op[1]; break; }
                    if (op[0] === 6 && _.label < t[1]) { _.label = t[1]; t = op; break; }
                    if (t && _.label < t[2]) { _.label = t[2]; _.ops.push(op); break; }
                    if (t[2]) _.ops.pop();
                    _.trys.pop(); continue;
            }
            op = body.call(thisArg, _);
        } catch (e) { op = [6, e]; y = 0; } finally { f = t = 0; }
        if (op[0] & 5) throw op[1]; return { value: op[0] ? op[1] : void 0, done: true };
    }
};
exports.__esModule = true;
exports.navbar = void 0;
// Imports
var dom_js_1 = require("./dom.js");
var navbar_element = (0, dom_js_1.q)('.navbar');
// Functions
if (navbar_element == null)
    console.log('Navbar Not Found');
;
var navbar = function () {
    // Variables
    var body = (0, dom_js_1.q)('body');
    var main = (0, dom_js_1.q)('main');
    var sidebar_dropdowns = (0, dom_js_1.qa)('.st_main');
    var sidebar_lists = (0, dom_js_1.qa)('.st');
    var sidebar_toggler = (0, dom_js_1.q)('#pnt_it1');
    var sidebar = (0, dom_js_1.q)('.sidebar');
    var theme = (0, dom_js_1.q)('#pnt_it5');
    var connect_button = (0, dom_js_1.q)('.connect_button');
    var balance_dropdown = (0, dom_js_1.q)('.balance_list');
    var balance = (0, dom_js_1.q)('.blockchain_balance');
    var address_dropdown = (0, dom_js_1.q)('.address_list');
    var address = (0, dom_js_1.q)('.blockchain_address');
    // Wallet-connect 1
    if (!window.ethereum)
        console.log('Please Install Metamask or Any Web3 Wallet!');
    var wallet_connect = function () {
        // Variables    
        var connect_wallet_button = (0, dom_js_1.q)('.connect_wallet');
        var blockchain_wallet_address = (0, dom_js_1.q)('.blockchain_wallet_address');
        if (ethers == null && ethers === 'undefined')
            console.log('Null Ethers js Problem!!!');
        var provider = new ethers.providers.Web3Provider(window.ethereum);
        var signer;
        if (connect_wallet_button == null)
            return console.log('Navbar connect_wallet_button Element not found');
        connect_wallet_button.addEventListener('click', function () {
            function connectMetamask() {
                return __awaiter(this, void 0, void 0, function () {
                    var balance, convertToEth, eth, _a, _b, _c, _d, _e, _f;
                    return __generator(this, function (_g) {
                        switch (_g.label) {
                            case 0: 
                            // MetaMask requires requesting permission to connect users accounts
                            return [4 /*yield*/, provider.send("eth_requestAccounts", [])];
                            case 1:
                                // MetaMask requires requesting permission to connect users accounts
                                _g.sent();
                                return [4 /*yield*/, provider.getSigner()];
                            case 2:
                                signer = _g.sent();
                                return [4 /*yield*/, signer.getBalance()];
                            case 3:
                                balance = _g.sent();
                                convertToEth = 1e18;
                                eth = balance.toString() / convertToEth;
                                console.log("account's balance in ether:", eth);
                                _b = (_a = console).log;
                                _c = ["Account address s:"];
                                return [4 /*yield*/, signer.getAddress()];
                            case 4:
                                _b.apply(_a, _c.concat([_g.sent()]));
                                _e = (_d = localStorage).setItem;
                                _f = ['Wallet_Address'];
                                return [4 /*yield*/, signer.getAddress()];
                            case 5:
                                _e.apply(_d, _f.concat([_g.sent()]));
                                localStorage.setItem('Wallet_Balance', eth);
                                return [2 /*return*/];
                        }
                    });
                });
            }
            connectMetamask();
        });
        // Local Storage 
        blockchain_wallet_address.innerText = localStorage.getItem('Wallet_Address');
    };
    // Sidebar Drop-down 
    if (sidebar_dropdowns == null)
        return;
    sidebar_dropdowns.forEach(function (sidebar_dropdown) {
        var parentDropdownElement = sidebar_dropdown.parentElement;
        // Adding class 
        sidebar_dropdown.addEventListener('click', function () {
            parentDropdownElement.classList.toggle('active1o1');
        });
    });
    // Sidebar_lists
    if (sidebar_lists == null)
        return;
    sidebar_lists.forEach(function (sidebars) {
        sidebars.addEventListener('click', function () {
            if (sidebar.classList.contains('close')) {
                sidebar.classList.remove('close');
            }
            else {
                sidebar.classList.toggle('close');
            }
            if (sidebar_toggler.classList.contains('active')) {
                sidebar.classList.toggle('close');
                sidebar.classList.toggle('active');
            }
            sidebar.classList.toggle('active');
        });
    });
    // Menu
    if (sidebar_toggler == null)
        return;
    sidebar_toggler.addEventListener('click', function () {
        sidebar_toggler.classList.toggle('active');
        sidebar.classList.toggle('active');
        if (sidebar.classList.contains('close')) {
            sidebar.classList.remove('close');
            main.addEventListener('click', function () {
                sidebar_toggler.classList.remove('active');
                sidebar.classList.remove('active');
            });
        }
        else {
            sidebar.classList.toggle('close');
        }
    });
    // Themes 
    if (theme == null)
        return;
    theme.addEventListener('click', function () {
        theme.classList.toggle('active');
        body.classList.toggle('light');
    });
    // Profile Drop-down 
    var profile = function () {
        // Variables
        var profile_closer, backdrop, profile_toggler, profile_container, profile_back_buttons, profile_swap_container, profile_setting_buttons, profile_help_buttons, profile_switch_buttons, profile_language_buttons, profile_location_buttons;
        backdrop = (0, dom_js_1.q)('.backdrop') || null;
        profile_toggler = (0, dom_js_1.q)('#profile_toggler') || null;
        profile_closer = (0, dom_js_1.qa)('.profile_close') || null;
        profile_container = (0, dom_js_1.q)('.NDPC') || null;
        profile_swap_container = (0, dom_js_1.q)('.NDPCGD') || null;
        profile_setting_buttons = (0, dom_js_1.q)('.profile_setting_button') || null;
        profile_switch_buttons = (0, dom_js_1.q)('.profile_switch_button') || null;
        profile_help_buttons = (0, dom_js_1.q)('.profile_help_button') || null;
        profile_language_buttons = (0, dom_js_1.q)('.profile_language_button') || null;
        profile_location_buttons = (0, dom_js_1.q)('.profile_location_button') || null;
        profile_back_buttons = (0, dom_js_1.qa)('.profile_back_button') || null;
        // Profile Container
        if (profile_toggler == null)
            return console.log('Element not found in Profile Dropdown');
        profile_toggler.addEventListener('click', function () {
            var body1 = profile_container.classList.toggle('active');
            var body2 = backdrop.classList.toggle('active');
        });
        // Profile Container Close
        if (!profile_closer)
            return console.log('Element not found in Profile Dropdown');
        profile_closer.forEach(function (profile_close) {
            profile_close.addEventListener('click', function () {
                profile_container.classList.remove('active');
                backdrop.classList.remove('active');
            });
        });
        // Back Button 
        if (!profile_back_buttons)
            return console.log('Element not found in Profile Dropdown');
        profile_back_buttons.forEach(function (profile_back_button) {
            profile_back_button.addEventListener('click', function () {
                profile_swap_container.style.marginLeft = '-00px';
            });
        });
        // Backdrop 
        if (!backdrop)
            return console.log('Element not found in Profile Dropdown');
        backdrop.addEventListener('click', function () {
            profile_container.classList.remove('active');
            backdrop.classList.remove('active');
        });
        // Switch
        if (!profile_switch_buttons)
            return console.log('Element not found in Profile Dropdown');
        profile_switch_buttons.addEventListener('click', function () {
            profile_swap_container.style.marginLeft = '-330px';
        });
        // Setting 
        if (!profile_setting_buttons)
            return console.log('Element not found in Profile Dropdown');
        profile_setting_buttons.addEventListener('click', function () {
            profile_swap_container.style.marginLeft = '-660px';
        });
        // help
        if (!profile_help_buttons)
            return console.log('Element not found in Profile Dropdown');
        profile_help_buttons.addEventListener('click', function () {
            profile_swap_container.style.marginLeft = '-990px';
        });
        // location 
        if (!profile_location_buttons)
            return console.log('Element not found in Profile Dropdown');
        profile_location_buttons.addEventListener('click', function () {
            profile_swap_container.style.marginLeft = '-1650px';
        });
        // Language 
        if (!profile_language_buttons)
            return console.log('Element not found in Profile Dropdown');
        profile_language_buttons.addEventListener('click', function () {
            profile_swap_container.style.marginLeft = '-1320px';
        });
        return console.log('Hi bro Profile!!!');
    };
    return console.log('Hi from Navbar');
};
exports.navbar = navbar;
