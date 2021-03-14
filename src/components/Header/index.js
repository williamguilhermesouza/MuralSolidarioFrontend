import './style.css';
import HamburgerMenu from '../HamburgerMenu';
import logo from '../../assets/logo.jpeg';

export default function Header() {
    return(
        <nav className="header">
            <HamburgerMenu />
            <img src={logo} alt="logo" />
            <div></div>
        </nav>
    );
};