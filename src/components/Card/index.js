import './style.css';

export default function Card(props) {
    return(
        <div className="card">
            <img src={props.img} alt="adImage"/>
            <div className="content">
                
                <p>{props.descricao}</p>
                <p>{props.contato} - {props.nome}</p>
                <p>{props.endereco}</p>
            </div>
        </div>
    );
};