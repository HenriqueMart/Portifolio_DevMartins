import NavLinks from "./NavLinks";
import'./NavBar.css';
import { HiH2 } from "react-icons/hi2";

const DesktopNavigation = () => {
    return(
        <nav className="DesktopNavigation">
            <h2 className="Logo">DevMartins</h2>
            <NavLinks/>
        </nav>
    )
}

export default DesktopNavigation;