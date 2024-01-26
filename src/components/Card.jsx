function Card({ name, desc, img, link }) {
    return ( 
        <div className="card">
            <div className="info">
                <h3>{ name }</h3>
                <p>{ desc }</p>
            </div>
            <a href={ link }>to github</a>
        </div>
     );
}

export default Card;