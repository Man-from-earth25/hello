'use-strick';

// Imports
import { body,variable, variable_logger } from './variable.js';
import { q,qa } from './dom.js';





// Navbar
const navbar = () => {
    // import { ethers } from "https://cdn.ethers.io/lib/ethers-5.2.esm.min.js";
    
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
    
    // Wallet-connect 
    if(connect_button == null) return console.log('Navbar Element not found');
    connect_button.addEventListener('click',()=>{
        
        // if (window.ethereum != 'undefined'){
        //     console.log('Yes');
            
        // }
        // async function allAccounts() {
        //     const accounts = await window.ethereum.request({method:'eth_requestAccounts'}).catch((err) => {
        //         console.log(err.code);
        //     });
            
        //     console.log(accounts);
        // }
        // allAccounts();
        
        
        
        
        // A Web3Provider wraps a standard Web3 provider, which is
        // what MetaMask injects as window.ethereum into each page
        // const provider = new ethers.providers.Web3Provider(window.ethereum)
        // MetaMask requires requesting permission to connect users accounts
        
        // await provider.send("eth_requestAccounts", []);
        // The MetaMask plugin also allows signing transactions to
        // send ether and pay to change state within the blockchain.
        // For this, you need the account signer...
        
        // const signer = provider.getSigner()        
        
        
        
        
    })
    // Sidebar Drop-down 
    if(sidebar_dropdowns == null) return console.log('Navbar Element not found');
    sidebar_dropdowns.forEach((sidebar_dropdown) => {
        let parentDropdownElement = sidebar_dropdown.parentElement;
        // Adding class 
        sidebar_dropdown.addEventListener('click', () => {
            parentDropdownElement.classList.toggle('active1o1');
        })
    });
    // Sidebar_lists
    if(sidebar_lists == null) return console.log('Navbar Element not found');
    sidebar_lists.forEach((sidebars) => {
        sidebars.addEventListener('click', () => {
            if (sidebar.classList.contains('close')) {
                sidebar.classList.remove('close')
            }
            else {
                sidebar.classList.toggle('close')
            }
            if (sidebar_toggler.classList.contains('active')) {
                sidebar.classList.toggle('close')
                sidebar.classList.toggle('active');
            }
            sidebar.classList.toggle('active');
        })
    });
    // Menu
    if(sidebar_toggler == null) return console.log('Navbar Element not found');
    sidebar_toggler.addEventListener('click', () => {
        sidebar_toggler.classList.toggle('active');
        sidebar.classList.toggle('active');
        if (sidebar.classList.contains('close')) {
            sidebar.classList.remove('close')
            main.addEventListener('click', () => {
                sidebar_toggler.classList.remove('active');
                sidebar.classList.remove('active');
            })
        }
        else {
            sidebar.classList.toggle('close')
        }
    });
    // Themes 
    if(theme == null) return console.log('Navbar Element not found');
    theme.addEventListener('click', () => {
        theme.classList.toggle('active');
        body.classList.toggle('light');
    });

    return console.log('Hi from Navbar')
};

// Profile Drop-down 
const profile = () => {
    
    // Variables
    let profile_closer,backdrop,profile_toggler,profile_container,profile_back_buttons,profile_swap_container,profile_setting_buttons,profile_help_buttons,profile_switch_buttons,profile_language_buttons,profile_location_buttons;
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
    
    // const SINGLE_CLICK_LISTNER = ({element,body1,body2}) => {
    //     if(element == null) return console.log('Element not found in Profile Dropdown');
    //     element.addEventListener('click',()=>{
            
    //         let logic1 = body1;
    //         let logic2 = body2 ;
    //         body1;
    //         // 0body2;
    //         console.log(element);
    //         console.log(logic1);
          
            
    //     })
    // }
    // const SINGLE_CLICK_LISTNER = (element,body1,body2) => {
    //     if(element == null) return console.log('Element not found in Profile Dropdown');
    //     element.addEventListener('click',()=>{
            
    //         return body1,body2;
    //         // console.log(element);
    //         // console.log(logic1);
    //       console.log('yess');
            
    //     })
    // }
    
    // Profile Container
    if(profile_toggler == null) return console.log('Element not found in Profile Dropdown');
    profile_toggler.addEventListener('click',()=>{
        
        let body1 = profile_container.classList.toggle('active');
        let body2 = backdrop.classList.toggle('active');
        
        
    })
    // SINGLE_CLICK_LISTNER({
        
    //     element: profile_toggler,
    //     body1: body1,
    //     body2: body2,
        
    // })
    // SINGLE_CLICK_LISTNER(
        
    //     profile_toggler,
    //     body1,
    //     body2,
        
    // )
    
    // Profile Container Close
    if(!profile_closer) return console.log('Element not found in Profile Dropdown');
    profile_closer.forEach((profile_close)=>{
        profile_close.addEventListener('click',()=>{
            
            profile_container.classList.remove('active');
            backdrop.classList.remove('active');
            
        })
    })
    // Back Button 
    if(!profile_back_buttons) return console.log('Element not found in Profile Dropdown');
    profile_back_buttons.forEach((profile_back_button)=> {
        
        profile_back_button.addEventListener('click',()=>{
            
            profile_swap_container.style.marginLeft = '-00px';
            
            
            
        })
        
    })
    // Backdrop 
    if(!backdrop) return console.log('Element not found in Profile Dropdown');
    backdrop.addEventListener('click',()=>{
        
        profile_container.classList.remove('active');
        backdrop.classList.remove('active');
        
    })
    // Switch
    if(!profile_switch_buttons) return console.log('Element not found in Profile Dropdown');
    profile_switch_buttons.addEventListener('click',()=>{
        
        profile_swap_container.style.marginLeft = '-330px';
        
        
        
    })
    // Setting 
    if(!profile_setting_buttons) return console.log('Element not found in Profile Dropdown');
    profile_setting_buttons.addEventListener('click',()=>{
        
        
        profile_swap_container.style.marginLeft = '-660px';
        
    })
    // help
    if(!profile_help_buttons) return console.log('Element not found in Profile Dropdown');
    profile_help_buttons.addEventListener('click',()=>{
        
        
        profile_swap_container.style.marginLeft = '-990px';
        
    })
    // location 
    if(!profile_location_buttons) return console.log('Element not found in Profile Dropdown');
    profile_location_buttons.addEventListener('click',()=>{
        profile_swap_container.style.marginLeft = '-1650px';
        
        
        
    })
    // Language 
    if(!profile_language_buttons) return console.log('Element not found in Profile Dropdown');
    profile_language_buttons.addEventListener('click',()=>{
        profile_swap_container.style.marginLeft = '-1320px';
        
        
        
    })
    
    
    return console.log('Hi bro Profile!!!')
};










console.log('Javascript is Working');
navbar();
profile();































