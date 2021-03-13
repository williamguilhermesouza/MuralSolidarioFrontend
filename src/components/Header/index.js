import './style.css';
import Button from '../Button';
import logo from '../../assets/logo.jpeg';

export default function Header() {
    return(
        <nav className="header">
            <Button text="Como funciona?" />
            <img src={logo} alt="logo" />
            <Button text="Novo anúncio" />
        </nav>
    );
};