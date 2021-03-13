import './style.css';

export default function Button(props) {

    return(
        <div className="button">
            <a href={props.link}>{props.text}</a>
        </div>
    );
}
