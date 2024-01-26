function Section({name, text}) {
    return ( 
        <div className="section">
            <h2>me/{ name }/</h2>
            <p>{ text }</p>
        </div>
     );
}

export default Section;