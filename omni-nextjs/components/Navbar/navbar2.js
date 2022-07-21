import Link from 'next/link'
// import Head from 'next/head'





function Navbar12() {
    return(<>
            
              {/* ///////////////////////////////// Pc /////////////////////////////////////*/}
              {/* Top navigation */}
              <nav id="pc_navbar_top">
                {/* Menu icon  will update soon...*/}
                <ion-icon name="menu-outline" className="pc-navbartop-icons" id="menu-icon" />    
                {/* Logo + Global-area or something  */}
                <h1 id="pc-navbartop-brand">1thing</h1>
                {/* Searchbar from boostrap */}
                {/* <form id="navbar-top-form">
              <input class="form-control me-2" type="search" placeholder="Search" aria-label="Search"  id="searchbar"/>
              <ion-icon name="search-outline" class="pc-navbartop-icons" id="search-icon" ></ion-icon>    
              
             </form> */}
                {/* Tools */}
                {/*  <div id="pc_navbartop_tools"> */}
                {/* Voicesearch */}
                <ion-icon name="mic-outline" className="pc-navbartop-icons" id="voicesearch-icon" />
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
                        
                        <Link passHref href="/contract">
                            
                            <ion-icon className="pc-navbarleft-pages" name="albums-outline" />
                            
                        </Link>
                        
                  </li>
                  <li>
                        
                        <Link passHref href="/">
                            
                            <ion-icon className="pc-navbarleft-pages" name="albums-outline" />
                            
                        </Link>
                        
                  </li>
                  <li>
                        
                        <Link passHref href="/web3">
                            
                            <ion-icon className="pc-navbarleft-pages" name="albums-outline" />
                            
                        </Link>
                        
                  </li>
                  <li>
                        
                        <Link passHref href="/about">
                            
                            <ion-icon className="pc-navbarleft-pages" name="albums-outline" />
                            
                        </Link>
                        
                  </li>
                  <li>
                        
                        <Link passHref href="/addpost">
                            
                            <ion-icon className="pc-navbarleft-pages" name="albums-outline" />
                            
                        </Link>
                        
                  </li>
                  <li>
                        
                        <Link passHref href="/addvideo">
                            
                            <ion-icon className="pc-navbarleft-pages" name="albums-outline" />
                            
                        </Link>
                        
                  </li>
                  <li>
                        
                        <Link passHref href="/home">
                            
                            <ion-icon className="pc-navbarleft-pages" name="albums-outline" />
                            
                        </Link>
                        
                  </li>
                  <li>
                        
                        <Link passHref href="/profile1">
                            
                            <ion-icon className="pc-navbarleft-pages" name="albums-outline" />
                            
                        </Link>
                        
                  </li>
                  <li>
                        
                        <Link passHref href="/profile2">
                            
                            <ion-icon className="pc-navbarleft-pages" name="albums-outline" />
                            
                        </Link>
                        
                  </li>
                  <li>
                        
                        <Link passHref href="/resgister1">
                            
                            <ion-icon className="pc-navbarleft-pages" name="albums-outline" />
                            
                        </Link>
                        
                  </li>
                  <li>
                        
                        <Link passHref href="/resgister2">
                            
                            <ion-icon className="pc-navbarleft-pages" name="albums-outline" />
                            
                        </Link>
                        
                  </li>
                  <li>
                        
                        <Link passHref href="/subscription">
                            
                            <ion-icon className="pc-navbarleft-pages" name="albums-outline" />
                            
                        </Link>
                        
                  </li>
                  <li>
                        
                        <Link passHref href="/login">
                            
                            <ion-icon className="pc-navbarleft-pages" name="albums-outline" />
                            
                        </Link>
                        
                  </li>
                  <li>
                        
                        <Link passHref href="/library">
                            
                            <ion-icon className="pc-navbarleft-pages" name="albums-outline" />
                            
                        </Link>
                        
                  </li>
                  <li>
                        
                        <Link passHref href="/reupload1">
                            
                            <ion-icon className="pc-navbarleft-pages" name="albums-outline" />
                            
                        </Link>
                        
                  </li>
                  <li>
                        
                        <Link passHref href="/upload">
                            
                            <ion-icon className="pc-navbarleft-pages" name="albums-outline" />
                            
                        </Link>
                        
                  </li>
                  <li>
                        
                        <Link passHref href="/upload2">
                            
                            <ion-icon className="pc-navbarleft-pages" name="albums-outline" />
                            
                        </Link>
                        
                  </li>
                  <li>
                        
                        <Link passHref href="/xyz1">
                            
                            <ion-icon className="pc-navbarleft-pages" name="albums-outline" />
                            
                        </Link>
                        
                  </li>
                  <li>
                        
                        <Link passHref href="/xyz2">
                            
                            <ion-icon className="pc-navbarleft-pages" name="albums-outline" />
                            
                        </Link>
                        
                  </li>
                  <li>
                        
                        <Link passHref href="/xyz3">
                            
                            <ion-icon className="pc-navbarleft-pages" name="albums-outline" />
                            
                        </Link>
                        
                  </li>
                  <li>
                        
                        <Link passHref href="/xyz4">
                            
                            <ion-icon className="pc-navbarleft-pages" name="albums-outline" />
                            
                        </Link>
                        
                  </li>
                  <li>
                        
                        <Link passHref href="/xyz5">
                            
                            <ion-icon className="pc-navbarleft-pages" name="albums-outline" />
                            
                        </Link>
                        
                  </li>
                  <li>
                        
                        <Link passHref href="/django">
                            
                            <ion-icon className="pc-navbarleft-pages" name="albums-outline" />
                            
                        </Link>
                        
                  </li>
                  <li>
                        
                        <Link passHref href="/contract">
                            
                            <ion-icon className="pc-navbarleft-pages" name="albums-outline" />
                            
                        </Link>
                        
                  </li>
                  <li>
                        
                        <Link passHref href="/goals">
                            
                            <ion-icon className="pc-navbarleft-pages" name="albums-outline" />
                            
                        </Link>
                        
                  </li>
                  <li>
                        
                        <Link passHref href="/cookie">
                            
                            <ion-icon className="pc-navbarleft-pages" name="albums-outline" />
                            
                        </Link>
                        
                  </li>
                  <li>
                        
                        <Link passHref href="/contract">
                            
                            <ion-icon className="pc-navbarleft-pages" name="albums-outline" />
                            
                        </Link>
                        
                  </li>
                  <li>
                        
                        <Link passHref href="/contract">
                            
                            <ion-icon className="pc-navbarleft-pages" name="albums-outline" />
                            
                        </Link>
                        
                  </li>
                  <li>
                        
                        <Link passHref href="/contract">
                            
                            <ion-icon className="pc-navbarleft-pages" name="albums-outline" />
                            
                        </Link>
                        
                  </li>
                  <li>
                        
                        <Link passHref href="/contract">
                            
                            <ion-icon className="pc-navbarleft-pages" name="albums-outline" />
                            
                        </Link>
                        
                  </li>
                  <li>
                        
                        <Link passHref href="/contract">
                            
                            <ion-icon className="pc-navbarleft-pages" name="albums-outline" />
                            
                        </Link>
                        
                  </li>
                  
                  
                </ul>
              </nav>
              {/* ///////////////////////////////// Pc Navbar End /////////////////////////////////////*/}
              {/* ///////////////////////////////// Mb /////////////////////////////////////*/}
              <nav id="mb_navbar_top">
                <div id="mb_navbartop_header">
                  {/* Profile */}
                  <ion-icon name="person-circle-outline" className="mb-navbartop-icons" id="profile-icon-mb" type="button" data-bs-toggle="offcanvas" data-bs-target="#offcanvasExample" aria-controls="offcanvasExample" />
                  {/* Dropdown */}
                  <ion-icon name="caret-down-outline" className="mb-navbartop-icons" id="dropdown-icon-mb" />
                  <div className="offcanvas offcanvas-start" tabIndex={-1} id="offcanvasExample" aria-labelledby="offcanvasExampleLabel">
                    <div className="offcanvas-header">
                      <h5 id="offcanvasRightLabel">Offcanvas left</h5>
                      <button type="button" className="btn-close text-reset" data-bs-dismiss="offcanvas" aria-label="Close" />
                    </div>
                  </div>    
                  {/* All apps */}
                  {/* <ion-icon name="apps-outline" class="mb-navbartop-icons" id="allapps-icon-mb"></ion-icon> */}
                  <div id="nine_dots">
                    <span id="hh" style={{"--i":"0","--x":"-1","--y":"0"}}>
                      <ion-icon name="home-outline" />        
                    </span>
                    <span id="hh" style={{"--i":"1","--x":"1","--y":"0"}}>
                      <ion-icon name="telescope-outline" />
                    </span>
                    <span id="hh" style={{"--i":"2","--x":"0","--y":"-1"}}>
                      <ion-icon name="logo-android" />
                    </span>
                    <span id="hh" style={{"--i":"3","--x":"0","--y":"1"}}>
                      <ion-icon name="logo-css3" />
                    </span>
                    <span id="hh" style={{"--i":"4","--x":"1","--y":"1"}}>
                      <ion-icon name="logo-facebook" />
                    </span>
                    <span id="hh" style={{"--i":"5","--x":"-1","--y":"-1"}}>
                      <ion-icon name="logo-github" />
                    </span>
                    <span id="hh" style={{"--i":"6","--x":"0","--y":"0"}}>
                      <ion-icon name="logo-google-playstore" />
                    </span>
                    <span id="hh" style={{"--i":"7","--x":"-1","--y":"1"}}>
                      <ion-icon name="logo-google" />
                    </span>
                    <span id="hh" style={{"--i":"8","--x":"1","--y":"-1"}}>
                      <ion-icon name="logo-figma" />
                    </span>
                    <ion-icon name="close-outline" id="cancel_web" />
                  </div>
                  {/* Voicesearch */}
                  <ion-icon name="mic-outline" className="mb-navbartop-icons" id="voicesearch-icon" />
                  {/* Brand 🐥🐥🐥 */}
                  <h1 id="mb_navbartop_brand">
                    1 thing
                  </h1>
                  {/* Search 🐥🐥🐥 */}
                  <ion-icon name="search-outline" className="mb-navbartop-icons" id="search-icon" />    
                  {/* Rocket */}
                  <ion-icon name="rocket-outline" className="mb-navbartop-icons" id="rocket-icon-mb" />
                  {/* Notifications */}
                  <ion-icon name="notifications-outline" className="mb-navbartop-icons" id="notifications-icon-mb" />    
                  {/* Menu icon  will update soon...*/}
                  <ion-icon name="menu-outline" className="mb-navbartop-icons" id="menu-icon-mb" data-bs-toggle="offcanvas" data-bs-target="#offcanvasRight" aria-controls="offcanvasRight" />    
                  {/* <button class="btn btn-primary" type="button" data-bs-toggle="offcanvas" data-bs-target="#offcanvasRight" aria-controls="offcanvasRight">Toggle right offcanvas</button> */}
                  <div className="offcanvas offcanvas-end" tabIndex={-1} id="offcanvasRight" aria-labelledby="offcanvasRightLabel">
                    <div className="offcanvas-header">
                      <h5 id="offcanvasRightLabel">Offcanvas right</h5>
                      <button type="button" className="btn-close text-reset" data-bs-dismiss="offcanvas" aria-label="Close" />
                    </div>
                    <div className="offcanvas-body">
                      ...
                      y8vy8c7y7tc8tct7c7tt7c8tc7t
                    </div>
                  </div>
                </div>
                <div id="mb_navbartop_scroll-container">
                  <ul id="mb_navbartop_scroll">
                    
                    <li>
                     
                        <Link passHref href="/contract">
                            <a href="#" className="mb_navbartopscroll_pages"> Contract </a>
                        </Link>
                        
                    </li>
                    <li>
                     
                        <Link passHref href="/about ">
                            <a href="#" className="mb_navbartopscroll_pages"> about </a>
                        </Link>
                        
                    </li>
                    <li>
                     
                        <Link passHref href="/addpost ">
                            <a href="#" className="mb_navbartopscroll_pages"> addpost </a>
                        </Link>
                        
                    </li>
                    <li>
                     
                        <Link passHref href="/addvideo ">
                            <a href="#" className="mb_navbartopscroll_pages"> addvideo </a>
                        </Link>
                        
                    </li>
                    <li>
                     
                        <Link passHref href="/contract">
                            <a href="#" className="mb_navbartopscroll_pages"> contract </a>
                        </Link>
                        
                    </li>
                    <li>
                     
                        <Link passHref href="/cookie">
                            <a href="#" className="mb_navbartopscroll_pages"> cookie </a>
                        </Link>
                        
                    </li>
                    <li>
                     
                        <Link passHref href="/django">
                            <a href="#" className="mb_navbartopscroll_pages"> django </a>
                        </Link>
                        
                    </li>
                    <li>
                     
                        <Link passHref href="/fileupload1">
                            <a href="#" className="mb_navbartopscroll_pages"> fileupload1 </a>
                        </Link>
                        
                    </li>
                    <li>
                     
                        <Link passHref href="/goals">
                            <a href="#" className="mb_navbartopscroll_pages"> goals </a>
                        </Link>
                        
                    </li>
                    <li>
                     
                        <Link passHref href="/home">
                            <a href="#" className="mb_navbartopscroll_pages"> Home </a>
                        </Link>
                        
                    </li>
                    <li>
                     
                        <Link passHref href="/login">
                            <a href="#" className="mb_navbartopscroll_pages"> Login </a>
                        </Link>
                        
                    </li>
                    <li>
                     
                        <Link passHref href="/library">
                            <a href="#" className="mb_navbartopscroll_pages"> Library </a>
                        </Link>
                        
                    </li>
                    <li>
                     
                        <Link passHref href="/profile1">
                            <a href="#" className="mb_navbartopscroll_pages"> Profile1 </a>
                        </Link>
                        
                    </li>
                    <li>
                     
                        <Link passHref href="/profile2">
                            <a href="#" className="mb_navbartopscroll_pages"> Profile2 </a>
                        </Link>
                        
                    </li>
                    <li>
                     
                        <Link passHref href="/">
                            <a href="#" className="mb_navbartopscroll_pages"> Index </a>
                        </Link>
                        
                    </li>
                    <li>
                     
                        <Link passHref href="/register1">
                            <a href="#" className="mb_navbartopscroll_pages"> Register1 </a>
                        </Link>
                        
                    </li>
                    <li>
                     
                        <Link passHref href="/register2">
                            <a href="#" className="mb_navbartopscroll_pages"> Register2 </a>
                        </Link>
                        
                    </li>
                    <li>
                     
                        <Link passHref href="/reupload1">
                            <a href="#" className="mb_navbartopscroll_pages"> Reupload1 </a>
                        </Link>
                        
                    </li>
                    <li>
                     
                        <Link passHref href="/subscription">
                            <a href="#" className="mb_navbartopscroll_pages"> Subscription </a>
                        </Link>
                        
                    </li>
                    <li>
                     
                        <Link passHref href="/upload">
                            <a href="#" className="mb_navbartopscroll_pages"> Upload </a>
                        </Link>
                        
                    </li>
                    <li>
                     
                        <Link passHref href="/upload2">
                            <a href="#" className="mb_navbartopscroll_pages"> Upload2 </a>
                        </Link>
                        
                    </li>
                    <li>
                     
                        <Link passHref href="/web3">
                            <a href="#" className="mb_navbartopscroll_pages"> Web3 </a>
                        </Link>
                        
                    </li>
                    <li>
                     
                        <Link passHref href="/xyz1">
                            <a href="#" className="mb_navbartopscroll_pages"> Xyz1 </a>
                        </Link>
                        
                    </li>
                    <li>
                     
                        <Link passHref href="/xyz2">
                            <a href="#" className="mb_navbartopscroll_pages"> Xyz2 </a>
                        </Link>
                        
                    </li>
                    <li>
                     
                        <Link passHref href="/xyz3">
                            <a href="#" className="mb_navbartopscroll_pages"> Xyz3 </a>
                        </Link>
                        
                    </li>
                    <li>
                     
                        <Link passHref href="/xyz4">
                            <a href="#" className="mb_navbartopscroll_pages"> Xyz4 </a>
                        </Link>
                        
                    </li>
                    
                    <li id="mb_navbartopscroll_pages_last">
                     
                        <Link passHref href="/xyz5">
                            <a href="#" className="mb_navbartopscroll_pages"> Xyz5 </a>
                        </Link>
                        
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

    
    
    
    
    
    </>);
};


export default Navbar12;






