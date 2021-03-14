import './style.css';

export default function HamburgerMenu() {
    let visible = false;
    
    function toggleMenu() {
        let bar1 = document.getElementById('bar1');
        let bar2 = document.getElementById('bar2');
        let bar3 = document.getElementById('bar3');
        let menu = document.getElementById('hamburger-menu');

        if (!visible) {
            bar1.classList.add('change1');
            bar2.classList.add('change2');
            bar3.classList.add('change3');
            menu.classList.remove('closed');
            menu.classList.add('open');
        } else {
            bar1.classList.remove('change1');
            bar2.classList.remove('change2');
            bar3.classList.remove('change3');
            menu.classList.remove('open');
            menu.classList.add('closed');
        }
        visible = !visible;
    }
    
    return(
        <div  className="closed" id="hamburger-menu" onClick={toggleMenu}>
            <div className="bar1" id="bar1"></div>
            <div className="bar2" id="bar2"></div>
            <div className="bar3" id="bar3"></div>
            <ul className="menu">
                <li>
                    <a href="#new" title="new">Novo anúncio</a>
                </li>
                <li>
                    <a href="#how" title="how">Como funciona</a>
                </li>
                <li>
                    <a href="#del" title="del">Remover um anúncio</a>
                </li>
            </ul>
        </div>
    );
}