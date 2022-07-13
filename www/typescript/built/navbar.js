var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
// Imports
import { q, qa } from './dom.js';
let navbar_element = q('.navbar');
// Functions
if (navbar_element == null)
    console.log('Navbar Not Found');
;
const navbar = () => {
    // Variables
    const body = q('body');
    const main = q('main');
    const sidebar_dropdowns = qa('.st_main');
    const sidebar_lists = qa('.st');
    const sidebar_toggler = q('#pnt_it1');
    const sidebar = q('.sidebar');
    const theme = q('#pnt_it5');
    let connect_button = q('.connect_button');
    let balance_dropdown = q('.balance_list');
    let balance = q('.blockchain_balance');
    let address_dropdown = q('.address_list');
    let address = q('.blockchain_address');
    // Wallet-connect 1
    if (!window.ethereum)
        console.log('Please Install Metamask or Any Web3 Wallet!');
    const wallet_connect = () => {
        // Variables    
        let connect_wallet_button = q('.connect_wallet');
        let blockchain_wallet_address = q('.blockchain_wallet_address');
        if (ethers == null && ethers === 'undefined')
            console.log('Null Ethers js Problem!!!');
        let provider = new ethers.providers.Web3Provider(window.ethereum);
        let signer;
        if (connect_wallet_button == null)
            return console.log('Navbar connect_wallet_button Element not found');
        connect_wallet_button.addEventListener('click', () => {
            function connectMetamask() {
                return __awaiter(this, void 0, void 0, function* () {
                    // MetaMask requires requesting permission to connect users accounts
                    yield provider.send("eth_requestAccounts", []);
                    signer = yield provider.getSigner();
                    const balance = yield signer.getBalance();
                    const convertToEth = 1e18;
                    let eth = balance.toString() / convertToEth;
                    console.log("account's balance in ether:", eth);
                    console.log("Account address s:", yield signer.getAddress());
                    localStorage.setItem('Wallet_Address', yield signer.getAddress());
                    localStorage.setItem('Wallet_Balance', eth);
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
    sidebar_dropdowns.forEach((sidebar_dropdown) => {
        let parentDropdownElement = sidebar_dropdown.parentElement;
        // Adding class 
        sidebar_dropdown.addEventListener('click', () => {
            parentDropdownElement.classList.toggle('active1o1');
        });
    });
    // Sidebar_lists
    if (sidebar_lists == null)
        return;
    sidebar_lists.forEach((sidebars) => {
        sidebars.addEventListener('click', () => {
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
    sidebar_toggler.addEventListener('click', () => {
        sidebar_toggler.classList.toggle('active');
        sidebar.classList.toggle('active');
        if (sidebar.classList.contains('close')) {
            sidebar.classList.remove('close');
            main.addEventListener('click', () => {
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
    theme.addEventListener('click', () => {
        theme.classList.toggle('active');
        body.classList.toggle('light');
    });
    // Profile Drop-down 
    const profile = () => {
        // Variables
        let profile_closer, backdrop, profile_toggler, profile_container, profile_back_buttons, profile_swap_container, profile_setting_buttons, profile_help_buttons, profile_switch_buttons, profile_language_buttons, profile_location_buttons;
        backdrop = q('.backdrop') || null;
        profile_toggler = q('#profile_toggler') || null;
        profile_closer = qa('.profile_close') || null;
        profile_container = q('.NDPC') || null;
        profile_swap_container = q('.NDPCGD') || null;
        profile_setting_buttons = q('.profile_setting_button') || null;
        profile_switch_buttons = q('.profile_switch_button') || null;
        profile_help_buttons = q('.profile_help_button') || null;
        profile_language_buttons = q('.profile_language_button') || null;
        profile_location_buttons = q('.profile_location_button') || null;
        profile_back_buttons = qa('.profile_back_button') || null;
        // Profile Container
        if (profile_toggler == null)
            return console.log('Element not found in Profile Dropdown');
        profile_toggler.addEventListener('click', () => {
            let body1 = profile_container.classList.toggle('active');
            let body2 = backdrop.classList.toggle('active');
        });
        // Profile Container Close
        if (!profile_closer)
            return console.log('Element not found in Profile Dropdown');
        profile_closer.forEach((profile_close) => {
            profile_close.addEventListener('click', () => {
                profile_container.classList.remove('active');
                backdrop.classList.remove('active');
            });
        });
        // Back Button 
        if (!profile_back_buttons)
            return console.log('Element not found in Profile Dropdown');
        profile_back_buttons.forEach((profile_back_button) => {
            profile_back_button.addEventListener('click', () => {
                profile_swap_container.style.marginLeft = '-00px';
            });
        });
        // Backdrop 
        if (!backdrop)
            return console.log('Element not found in Profile Dropdown');
        backdrop.addEventListener('click', () => {
            profile_container.classList.remove('active');
            backdrop.classList.remove('active');
        });
        // Switch
        if (!profile_switch_buttons)
            return console.log('Element not found in Profile Dropdown');
        profile_switch_buttons.addEventListener('click', () => {
            profile_swap_container.style.marginLeft = '-330px';
        });
        // Setting 
        if (!profile_setting_buttons)
            return console.log('Element not found in Profile Dropdown');
        profile_setting_buttons.addEventListener('click', () => {
            profile_swap_container.style.marginLeft = '-660px';
        });
        // help
        if (!profile_help_buttons)
            return console.log('Element not found in Profile Dropdown');
        profile_help_buttons.addEventListener('click', () => {
            profile_swap_container.style.marginLeft = '-990px';
        });
        // location 
        if (!profile_location_buttons)
            return console.log('Element not found in Profile Dropdown');
        profile_location_buttons.addEventListener('click', () => {
            profile_swap_container.style.marginLeft = '-1650px';
        });
        // Language 
        if (!profile_language_buttons)
            return console.log('Element not found in Profile Dropdown');
        profile_language_buttons.addEventListener('click', () => {
            profile_swap_container.style.marginLeft = '-1320px';
        });
        return console.log('Hi bro Profile!!!');
    };
    return console.log('Hi from Navbar');
};
// Exports
export { navbar };