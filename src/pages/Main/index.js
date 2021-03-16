import './style.css';
import Header from '../../components/Header';
import Card from '../../components/Card';
import BackendAPI from '../../services/BackendAPI';
import { useEffect, useState } from 'react';

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

            <div className="ads">
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
        </div>
    );
}