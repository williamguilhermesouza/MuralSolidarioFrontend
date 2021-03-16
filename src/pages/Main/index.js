import './style.css';
import Header from '../../components/Header';
import Card from '../../components/Card';
import BackendAPI from '../../services/BackendAPI';
import { useEffect, useState } from 'react';
import dogua from '../../assets/dogua.png';

export default function Main() {
    let [ads, setAds] = useState();

     async function loadAds() {
        let response = await BackendAPI.get('');
        setAds(response.data);
        console.log(ads);
    }

    function arrayBufferToBase64(buffer) {
        var binary = '';
        var bytes = [].slice.call(new Uint8Array(buffer));    
        bytes.forEach((b) => binary += String.fromCharCode(b));    
        return window.btoa(binary);
    }

    useEffect(() => loadAds(), []);


    return(
        <div className="main">
            <Header />
            <Card img={dogua} endereco="Rua ze das couves 30 - barra mansa, RJ" contato="21 9999999999" nome="Fulano de Tal"
                descricao="    No entanto, não podemos esquecer que o 
                    acompanhamento das preferências de consumo afeta positivamente a correta previsão 
                    das condições inegavelmente apropriadas.
                "/>
            {ads && ads.map((ad, i) => (
                <Card 
                    key={ad._id}
                    img={`data:image/jpeg;base64,${arrayBufferToBase64(ad.img.data.data)}`}
                    endereco={ad.endereco}
                    contato={ad.contato}
                    nome={ad.nome}
                    descricao={ad.descricao}
                />
            ))}
        </div>
    );
}