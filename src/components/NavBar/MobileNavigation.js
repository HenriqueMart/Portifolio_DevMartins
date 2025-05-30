import NavLinks from "./NavLinks";
import'./NavBar.css';
import { HiH2 } from "react-icons/hi2";
/*Icone do Hamburger*/
import { MdMenu } from "react-icons/md";
import { IoClose } from "react-icons/io5";

import { useState } from "react";

const MobileNavigation = () => {
     const [click, setClick] = useState(false);

    const Hamburger = <MdMenu className="HamburgerMenu" 
    size="30px" color="#34b5f2"
    onClick={() => setClick(!click)}/>
    const Close = <IoClose className="HamburgerMenu" 
    size="30px" color="#34b5f2"
    onClick={() => setClick(!click)}/>
   

    return(
        <nav className="MobileNavigation">
            <h2 className="Logo">DevMartins</h2>
            {click ? Close : Hamburger }
            {click && <NavLinks />}
        </nav>
    )
}

export default MobileNavigation;