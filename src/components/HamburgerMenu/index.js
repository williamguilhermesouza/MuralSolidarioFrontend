import './style.css';
import React, {useState} from 'react';
import Modal from '../Modal';

export default function HamburgerMenu() {
    let visible = false;
    let [newModal, setNewModal] = useState(false);
    let [howModal, setHowModal] = useState(false);
    let [delModal, setDelModal] = useState(false);
    
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

    function newHandle() {
        setNewModal(!newModal);
    }
    
    function howHandle() {
        setHowModal(!howModal);
    }

    function delHandle() {
        setDelModal(!delModal);
    }

    return(
        <>
            <div  className="closed" id="hamburger-menu" onClick={toggleMenu}>
                <div className="bar1" id="bar1"></div>
                <div className="bar2" id="bar2"></div>
                <div className="bar3" id="bar3"></div>
                <ul className="menu">
                    <li>
                        <a href="##" onClick={newHandle} title="new">Novo anúncio</a> 
                    </li>
                    <li>
                        <a href="##" onClick={howHandle} title="how">Como funciona</a>
                    </li>
                    <li>
                        <a href="##" onClick={delHandle} title="del">Remover um anúncio</a>
                    </li>
                </ul>
            </div>
            <Modal title="Novo anúncio" show={newModal} close={newHandle}>
                <form action="#" method="post">
                    <input name="nome" placeholder="Digite seu nome"></input>
                    <input name="phone" placeholder="Digite seu telefone para contato"></input>
                    <input name="address" placeholder="Digite seu endereço"></input>
                    <textarea name="description" placeholder="Digite uma descrição para o anúncio" ></textarea>
                    <input name="image" type="file" accept="image/*" placeholder="Escolha uma imagem para o anúncio" alt="chooseImage"></input>
                </form>
            </Modal>
            <Modal title="Como funciona" show={howModal} close={howHandle}>
                <p>
                    O Mural Solidário tem como objetivo ser um espaço comum onde
                    Instituições de Caridade podem postar seus pedidos de doação e assim
                    receber os recursos necessários para continuar ajudando aqueles que precisam dessa ajuda.
                </p>
            </Modal>
            <Modal title="Remover um anúncio" show={delModal} close={delHandle}>
                <form action="#" method="get">
                    <p>Digite o código do anúncio abaixo:</p>
                    <input name="del-id" placeholder="Ex.: 8b2a4eef-a4b9-4ae1-9890-442122054416"></input>
                </form>
            </Modal>
        </>
    );
}