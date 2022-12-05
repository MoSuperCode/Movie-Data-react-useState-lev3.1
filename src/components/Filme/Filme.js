import "./Filme.css";

function Filme(props, index) {
    return (
        <div className="filme" key={index}>
            <p>{props.title}</p>
            <p>{props.year}</p>
            <p>{props.director}</p>
            <p>{props.duration}</p>
            <div key={index} className="genre">{props.genre.map((gen) => {
                return <p key={gen} className='genre'>{gen}</p>;
            })}</div>
            <p>{props.rate}</p>
        </div>
    );
}

export default Filme;