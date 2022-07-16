import Link from 'next/link'
// import Head from 'next/head'





function Navbar11() {
    return (
        <>
            
          {/* ///////////////////////////////// Pc /////////////////////////////////////*/}
          {/* Top navigation */}
          <nav id="pc_navbar_top">
            {/* Menu icon  will update soon...*/}
            <ion-icon name="menu-outline" className="pc-navbartop-icons" id="menu-icon" />    
            {/* Logo + Global-area or something  */}
            <h1 id="pc-navbartop-brand">1thing</h1>

            {/* Tools */}
            {/*  <div id="pc_navbartop_tools"> */}
            {/* Voicesearch */}
            <ion-icon name="mic-outline" className="pc-navbartop-icons " id="voicesearch-icon" />
            {/* Rocket */}
            <ion-icon name="rocket-outline" className="pc-navbartop-icons" id="rocket-icon" />
            {/* All apps */}
            <ion-icon name="apps-outline" className="pc-navbartop-icons" id="allapps-icon" />
            {/* Notifications */}
            <ion-icon name="notifications-outline" className="pc-navbartop-icons" id="notifications-icon" />    
            {/* Dropdown */}
            <ion-icon name="caret-down-outline" className="pc-navbartop-icons" id="dropdown-icon" />
            {/* Profile */}
            <ion-icon name="person-circle-outline" className="pc-navbartop-icons" id="profile-icon" />
            {/*   </div>   */}
          </nav>    
          {/* Left navigation */}
          <nav className="sclass" id="pc_navbar_left">
            <ul>
              <li>
                <ion-icon name="albums-outline" />
              </li>
              <li>
                <ion-icon name="aperture-outline" />
              </li>
              <li>
                <ion-icon name="barbell-outline" />
              </li>
              <li>
                <ion-icon name="brush-outline" />
              </li>
              <li>
                <ion-icon name="caret-down-outline" />
              </li>
              <li>
                <ion-icon name="color-wand-outline" />
              </li>
              <li>
                <ion-icon name="contrast-outline" />
              </li>
              <li>
                <ion-icon name="cloud-download-outline" />
              </li>
              <li>
                <ion-icon name="chatbubbles-outline" />
              </li>
              <li>
                <ion-icon name="cellular-outline" />
              </li>
              <li>
                <ion-icon name="home-outline" />
              </li>
              <li>
                <ion-icon name="heart-outline" />
              </li>
              <li>
                <ion-icon name="hardware-chip-outline" />
              </li>
              <li>
                <ion-icon name="git-compare-outline" />
              </li>
              <li>
                <ion-icon name="game-controller-outline" />
              </li>
              <li>
                <ion-icon name="git-branch-outline" />
              </li>
              <li>
                <ion-icon name="flask-outline" />
              </li>
              <li>
                <ion-icon name="flame-outline" />
              </li>
              <li>
                <ion-icon name="flag-outline" />
              </li>
              <li>
                <ion-icon name="fish-outline" />
              </li>
              <li>
                <ion-icon name="earth-outline" />
                {/* <ion-icon name="earth"></ion-icon> */}
              </li>
              <li>
                <ion-icon name="compass-outline" />
              </li>
              <li>
                <ion-icon name="book-outline" />
              </li>
              <li>
                <ion-icon name="attach-outline" />
              </li>
            </ul>
          </nav>
          {/* ///////////////////////////////// Pc Navbar End /////////////////////////////////////*/}
          {/* ///////////////////////////////// Mb /////////////////////////////////////*/}
          <nav id="mb_navbar_top">
            <div id="mb_navbartop_header">
              {/* Dropdown */}
              <ion-icon name="caret-down-outline" className="mb-navbartop-icons" id="dropdown-icon-mb" />
              {/* Profile */}
              <ion-icon name="person-circle-outline" className="mb-navbartop-icons" id="profile-icon-mb" />
              {/* Rocket */}
              <ion-icon name="rocket-outline" className="mb-navbartop-icons" id="rocket-icon-mb" />
              {/* Brand 🐥🐥🐥 */}
              <h1 id="mb_navbartop_brand">
                1 thing
              </h1>
              {/* All apps */}
              <ion-icon name="apps-outline" className="mb-navbartop-icons" id="allapps-icon-mb" />
              {/* Notifications */}
              <ion-icon name="notifications-outline" className="mb-navbartop-icons" id="notifications-icon-mb" />    
              {/* Menu icon  will update soon...*/}
              <ion-icon name="menu-outline" className="mb-navbartop-icons" id="menu-icon-mb" />    
            </div>
            <div id="mb_navbartop_scroll-container">
              <ul id="mb_navbartop_scroll">
                <li>
                  <a href="#" className="mb_navbartopscroll_pages">page1</a>
                </li>
                <li>
                  <a href="#" className="mb_navbartopscroll_pages">page2</a>
                </li>
                <li>
                  <a href="#" className="mb_navbartopscroll_pages">page3</a>
                </li>
                <li>
                  <a href="#" className="mb_navbartopscroll_pages">page4</a>
                </li>
                <li>
                  <a href="#" className="mb_navbartopscroll_pages">page5</a>
                </li>
                <li>
                  <a href="#" className="mb_navbartopscroll_pages">page6</a>
                </li>
                <li>
                  <a href="#" className="mb_navbartopscroll_pages">page7</a>
                </li>
                <li>
                  <a href="#" className="mb_navbartopscroll_pages">page8</a>
                </li>
                <li>
                  <a href="#" className="mb_navbartopscroll_pages">page9</a>
                </li>
                <li>
                  <a href="#" className="mb_navbartopscroll_pages">page10</a>
                </li>
                <li>
                  <a href="#" className="mb_navbartopscroll_pages">page11</a>
                </li>
                <li>
                  <a href="#" className="mb_navbartopscroll_pages">page12</a>
                </li>
                <li>
                  <a href="#" className="mb_navbartopscroll_pages">page13</a>
                </li>
                <li>
                  <a href="#" className="mb_navbartopscroll_pages">page14</a>
                </li>
                <li>
                  <a href="#" className="mb_navbartopscroll_pages">page15</a>
                </li>
                <li>
                  <a href="#" className="mb_navbartopscroll_pages">page16</a>
                </li>
                <li>
                  <a href="#" className="mb_navbartopscroll_pages">page17</a>
                </li>
                <li>
                  <a href="#" className="mb_navbartopscroll_pages">page18</a>
                </li>
                <li>
                  <a href="#" className="mb_navbartopscroll_pages">page19</a>
                </li>
                <li>
                  <a href="#" className="mb_navbartopscroll_pages">page20</a>
                </li>
                <li>
                  <a href="#" className="mb_navbartopscroll_pages">page21</a>
                </li>
                <li>
                  <a href="#" className="mb_navbartopscroll_pages">page22</a>
                </li>
                <li>
                  <a href="#" className="mb_navbartopscroll_pages">page23</a>
                </li>
                <li>
                  <a href="#" className="mb_navbartopscroll_pages">page24</a>
                </li>
                <li id="mb_navbartopscroll_pages_last">
                  <a href="#" className="mb_navbartopscroll_pages">page25</a>
                </li>
              </ul>
            </div>
          </nav>    
          <nav id="mb_navbar_bottom">
            <ul>
              <li>
                {/* Home */}
                <ion-icon name="home-outline" className="mb_navbarbottom_icons mb_navbarbottom_icons_hovering" />
                {/* <ion-icon name="home" class="mb_navbarbottom_icons mb_navbarbottom_icons_hovered"></ion-icon> */}
              </li>
              <li>
                {/* Shorts */}
                <ion-icon name="flash-outline" className="mb_navbarbottom_icons mb_navbarbottom_icons_hovering" />
                {/* <ion-icon name="flash" class="mb_navbarbottom_icons  mb_navbarbottom_icons_hovered"></ion-icon> */}
              </li>
              <li>
                {/* Add */}
                <ion-icon name="add-outline" className="mb_navbarbottom_icons mb_navbarbottom_icons_hovering" />
                {/* <ion-icon name="add" class="mb_navbarbottom_icons mb_navbarbottom_icons_hovered"></ion-icon> */}
              </li>
              <li>
                {/* Subscription */}
                <ion-icon name="earth-outline" className="mb_navbarbottom_icons mb_navbarbottom_icons_hovering" />
                {/* <ion-icon name="earth" class="mb_navbarbottom_icons mb_navbarbottom_icons_hovered"></ion-icon> */}
              </li>
              <li>
                {/* Library */}
                <ion-icon name="library-outline" className="mb_navbarbottom_icons mb_navbarbottom_icons_hovering" />
                {/* <ion-icon name="library" class="mb_navbarbottom_icons mb_navbarbottom_icons_hovered"></ion-icon> */}
              </li>
            </ul>
          </nav>
          {/* ///////////////////////////////// Mb Navbar End /////////////////////////////////////*/}
            
            
            
        </>
    );
};


export default Navbar11;



