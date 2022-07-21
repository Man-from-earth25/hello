// import { Robin } from './src/toogle/robin.js';
// import { Notes_page } from './todo/notes.js';//Update later
//                                All variables
const body = document.querySelector('body');
const btn = document.querySelector('.pro_navbar_mb_btn');
const small_ul = document.querySelector('.mb_list5');
const navbar_sm = document.querySelector('.pro_navbar_main_container');
const navbar_main_content = document.querySelector('.pro_navbar_mb_main-content');
const sub = document.querySelector('.pro_navbar_sub-menu_mb');
const page_menu = document.querySelector('.pro_navbar_page-menu_mb');
let menu = document.querySelector('span');
let navbar2 = document.querySelector('body');
let marker = document.querySelector('#marker');
let items = document.querySelectorAll('.scroll_li_a');
let navbar = document.querySelector('.sidebar-sm');

let nine_dots = document.querySelector('#nine_dots');
// let nine_dots_cancel = document.querySelector('#nine_dots_cancel');

// let navbarmb_top = document.querySelector('#mb_navbar_top');
let navbar_top = document.querySelector('#pro-navbartop-container');

let navbar_top_header = document.querySelector('#mb_navbartop_header');
let cancel_btn = document.querySelector('#cancel_web');

let navbarmb_top_scroll = document.querySelector('#mb_navbartop_scroll-container');
// let navbarmb_top_header = document.querySelector('#mb_navbartop_header');

let navbarmb_bottom_scroll = document.querySelector('#mb_navbar_bottom');


let segment_items2 = document.querySelectorAll('.segment-item2');
let segment_indicator2 = document.querySelector('#segment-indicator2');
let segment_items3 = document.querySelectorAll('.segment-item3');
let segment_indicator3 = document.querySelector('#segment-indicator3');


let sticky;
let mb = 1100;






// Sticky💎💎💎
if (navbar_top !== null) {
    sticky = navbar_top.offsetTop;
    function myFunction() {
      if (window.pageYOffset >= sticky) {
        navbar_top.classList.add("sticky");
      } else {
        navbar_top.classList.remove("sticky");
      }
    }
    window.onscroll = function() {myFunction()};
    

}

// Sticky       Navbar2  Top scroll 📜📜📜📜        Mb💎💎💎
if (navbarmb_top_scroll !== null && body.clientHeight < mb) {
    sticky = navbarmb_top_scroll.offsetTop;
    function myFunction() {
      if (window.pageYOffset >= sticky) {
        navbarmb_top_header.classList.add("pi_eft1");
        navbarmb_bottom_scroll.classList.add("pi_eft2");
        
        // body.classList.add("pi_eft1");
        
        
        // console.log('mb op');
      } else {
        // body.classList.remove("sticky");
        navbarmb_top_header.classList.remove("pi_eft1");
        navbarmb_bottom_scroll.classList.remove("pi_eft2");
        
      }
    }
    window.onscroll = function() {myFunction()};
    
    
    
    
    
    
    
    
    
    

nine_dots.onclick = function (){
    
    // console.log('op');
    nine_dots.classList.toggle('active');
    navbarmb_top.classList.add('op');
    navbarmb_top_header.classList.toggle('active');
    
    
}
// cancel_btn.onclick = () => {
//     console.log('ui');
//     // nine_dots.classList.toggle('active');
//     nine_dots.classList.remove('active');
    
    
    
// }    
    
    
    
    
    
    
    
    
    
    
    

}



if (btn !== null) {
    btn.onclick = () => {
        navbar2.classList.toggle('active')
    };
    btn.onclick = () => {
        btn.classList.toggle('active');
        navbar_sm.classList.toggle('active');
    };
}









// Horizental Scrolling💯
if (marker !== 'undefined' && items !== 'undefined') {
    function indicator(e) {
        let rule1 = 11;
        let rule2 = 9;
        let ifcon = 100;
        
        marker.style.left = e.offsetLeft - rule1 + 'px';
        if (e.offsetLeft > ifcon) {
            // marker.style.right = e.offsetLeft + 'px';
            // console.log('working');
            
            
        }
        
        marker.style.width = 50 + 'px';
        
        
        // console.log(marker.style.left);
        
    };
    items.forEach(link => {
        link.addEventListener('click', (e) => {
            indicator(e.target);
            
        })
        link.addEventListener('dbclick', (e) => {
            indicator(e.target);
        })
        
    });
}







// Segment2🥳🥳🥳
if (segment_items2 !== 'undefined' && segment_indicator2 !== 'undefined') {
    function indicator(e) {
        let rule = 45;
        let width_rule = 0;
        
        segment_indicator2.style.left = e.offsetLeft - rule + 'px';
        
        
        segment_indicator2.style.width = e.offsetWidth + width_rule + 'px';
        // console.log(segment_indicator2.style.left);
        // console.log(segment_indicator2.style.width'');
    };
    segment_items2.forEach(link => {
        link.addEventListener('click', (e) => {
            indicator(e.target);
            
        })
        link.addEventListener('dbclick', (e) => {
            indicator(e.target);
        })
        
    });
    
}




// Segment3🥳🥳🥳
if (segment_items3 !== 'undefined' && segment_indicator3 !== 'undefined') {
    function indicator(e) {
        let ifcon1 = 54;
        let ifcon2 = 140;
        let ifcon3 = 160;
        
        let first = 1.5;
        let second = 8.3;
        let third = 15.2;
        
        let width_rule = 20;
        let left_rule = 28;
        
        
        segment_indicator3.style.left = e.offsetLeft - left_rule + 'px';
        
        
        segment_indicator3.style.width = e.offsetWidth + width_rule + 'px';
        // console.log(segment_indicator3.style.left);
        // console.log(segment_indicator3.style.width);
    };
    segment_items3.forEach(link => {
        link.addEventListener('click', (e) => {
            indicator(e.target);
            
        })
        link.addEventListener('dbclick', (e) => {
            indicator(e.target);
        })
        
    });
    
}
    
    
    
    
    
    
    
    
    
    
    
    
    
    
    
    
    
    


    
    
    
    
    
    
    
    
    
    
    
    
    
    
    
    



// Others😅😅😅
console.log(body.clientHeight);
// Robin('Op Argument');
// Notes_page('Op Argument');










































                                                                                                                                                                                                                                                                                                                                                
