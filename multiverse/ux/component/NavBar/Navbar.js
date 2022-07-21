import { q,qa } from '../../dom.js';



// Navbar
const navbar = () => {
    // Variables
    const body = q('body');
    const main = q('main');
    const sidebar_dropdown = qa('.st_main');
    const sidebar_lists = qa('.st');
    const sidebar_toggler = q('#pnt_it1');
    const sidebar = q('.sidebar');
    const theme = q('#pnt_it5');
    const notification_container = q('.notifications-container');
    const notification_toggler = q('.notifications-toggler');
    
    // Sidebar Drop-down 
    sidebar_dropdown.forEach((sidebar_dropdowns) => {
        let parentDropdownElement = sidebar_dropdowns.parentElement;
        // Adding class 
        sidebar_dropdowns.addEventListener('click', () => {
            parentDropdownElement.classList.toggle('active1o1');
        })
    });
    // Sidebar_lists
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
    theme.addEventListener('click', () => {
        theme.classList.toggle('active');
        body.classList.toggle('dark');
    });
    // Notifications 
    // notification_toggler.addEventListener('click', () => {
    //     notification_toggler.classList.toggle('close');
    //     if (notification_toggler.classList.contains('close')) {
    //         main.addEventListener('click', () => {
    //             notification_toggler.classList.remove('close');
    //             notification_container.classList.remove('show');
    //         })
    //     }
    //     notification_container.classList.toggle('show');
    // });

    return console.log('Hi bro Navbar')
};
// Navbar logger
const navbar_logger = (log) => {
    console.log(log)
};


export {
    navbar,
    navbar_logger
}
