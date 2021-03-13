import './style.css';
import dogua from '../../assets/dogua.png';

export default function Card() {
    return(
        <div className="card">
            <img src={dogua} alt="adImage"/>
            <div className="content">
                
                <p>    No entanto, não podemos esquecer que o 
                    acompanhamento das preferências de consumo afeta positivamente a correta previsão 
                    das condições inegavelmente apropriadas.
                </p>
                <p>21 9999999999 - Fulano de Tal</p>
                <p>Rua ze das couves 30 - barra mansa, RJ</p>
            </div>
        </div>
    );
};