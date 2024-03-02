import Link from 'next/link';
import React from 'react';
import { useState } from 'react';
import { useEffect } from 'react';
import Sidebar from '../../components/common/sidebar';
import SidebarCart from '../../components/common/sidebar-cart';
import useCartInfo from '../../hooks/use-cart-info';
import useGlobalContext from '../../hooks/use-context';
import HeaderTop from './headertop';
import NavMenu from './navmenu';


const HeaderOne = () => {
    const [openCart,setOpenCart] = useState(false)
    const { quantity } = useCartInfo();
    //for mobile menu
    const { setShowSidebar } = useGlobalContext();

    // Sticky Menu Area start
	// useEffect(() => {
	// 	window.addEventListener('scroll', sticky);
	// 	return () => {
	// 	   window.removeEventListener('scroll', sticky);
	// 	};
    
	//  });
  
	 const sticky = (e) => {
		const header = document.querySelector('.header-main');
		const scrollTop = window.scrollY;
		scrollTop >= 40 ? header.classList.add('sticky') : header.classList.remove('sticky');
	 };
	 // Sticky Menu Area End
    return (
        <>

<header id="header" className="tra-menu navbar-light white-scroll">
				<div className="header-wrapper">


				
				    <div className="wsmobileheader clearfix">	  	
				    	<span className="smllogo"><img src="images/logo-pink.png" alt="mobile-logo" /></span>
				    	<a id="wsnavtoggle" className="wsanimated-arrow"><span></span></a>	
				 	</div>


				 	
				  	<div className="wsmainfull menu clearfix">
	    				<div className="wsmainwp clearfix">


	    				
	    					<div className="desktoplogo">
	    						<a className="logo-black">
	    							<img className="light-theme-img" src="images/logo-pink.png" alt="logo" /> 
	    							<img className="dark-theme-img" src="images/logo-pink-white.png" alt="logo" />
	    						</a>
	    					</div>

	    			
	    					<div className="desktoplogo">
	    						<a href="#hero-1" className="logo-white"><img src='/assets/images/logo-white.png' alt="logo" /></a>
	    					</div>


	    				
	      					<nav className="wsmenu clearfix">
	        					<NavMenu />
	        				</nav>


	    				</div>
	    			</div>	


				</div>     
			</header>	

            {/* sidebar start */}
                {/* <Sidebar /> */}
            {/* sidebar end */}

            {/* side cart */}
            {/* <SidebarCart openCart={openCart} setOpenCart={setOpenCart}/> */}
            {/* side cart */}
        </>
    );
};

export default HeaderOne;