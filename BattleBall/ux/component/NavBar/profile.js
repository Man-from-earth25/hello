import { q,qa } from '../../dom.js';



// Profile 
const profile = () => {
    
    // Variables
    let profile_closer,backdrop,profile_toggler,profile_container,profile_back_buttons,profile_swap_container,profile_setting_buttons,profile_help_buttons,profile_switch_buttons,profile_language_buttons,profile_location_buttons;
    backdrop = q('.backdrop');
    profile_toggler = q('#profile_toggler');
    profile_closer = qa('.profile_close');
    profile_container = q('.NDPC');
    profile_swap_container = q('.NDPCGD');
    profile_setting_buttons = q('.profile_setting_button');
    profile_switch_buttons = q('.profile_switch_button');
    profile_help_buttons = q('.profile_help_button');
    profile_language_buttons = q('.profile_language_button');
    profile_location_buttons = q('.profile_location_button');
    profile_back_buttons = qa('.profile_back_button');
    
    // Profile Container
    profile_toggler.addEventListener('click',()=>{
        
        profile_container.classList.toggle('active');
        backdrop.classList.toggle('active');
        
        
    })
    // Profile Container Close
    profile_closer.forEach((profile_close)=>{
        profile_close.addEventListener('click',()=>{
            
            profile_container.classList.remove('active');
            backdrop.classList.remove('active');
            
        })
    })
    // console.log(profile_closer);
    backdrop.addEventListener('click',()=>{
        
        profile_container.classList.remove('active');
        backdrop.classList.remove('active');
        
    })
    // Switch
    profile_switch_buttons.addEventListener('click',()=>{
        
        profile_swap_container.style.marginLeft = '-330px';
        
        
        
    })
    // Setting 
    profile_setting_buttons.addEventListener('click',()=>{
        
        
        profile_swap_container.style.marginLeft = '-660px';
        
    })
    // help
    profile_help_buttons.addEventListener('click',()=>{
        
        
        profile_swap_container.style.marginLeft = '-990px';
        
    })
    // location 
    profile_location_buttons.addEventListener('click',()=>{
        profile_swap_container.style.marginLeft = '-1650px';
        
        
        
    })
    // Language 
    profile_language_buttons.addEventListener('click',()=>{
        profile_swap_container.style.marginLeft = '-1320px';
        
        
        
    })
    // console.log(profile_setting_buttons);
    // profile_setting_buttons.addEventListener('click',()=>{
    //     console.log('Yehh');
    // })
    
    profile_back_buttons.forEach((profile_back_button)=> {
        
        profile_back_button.addEventListener('click',()=>{
            
            profile_swap_container.style.marginLeft = '-00px';
            
            
            
        })
        
    })
    
    
    // console.log(profile_back_buttons);
    return console.log('Hi bro Profile!!!')
};


export {
    profile 
}

