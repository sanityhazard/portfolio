import Card from "./Card";

function Cards() {
    return ( 
        <div className="card-container">
            <div className="cards">
            <Card name={"Mafiosi (WIP)"} desc={"A telegram bot for hosting mafia games. Comes with an admin panel to control roles and outcomes (for private parties only)"} img={''} link={''}/>
            <Card name={"Taste"} desc={"A movie searcher that has a UX similar to Tinder: users swipe left or right depending on whether they like a movie or not."} img={''} link={''}/>
            <Card name={"DST Recipe bot"} desc={"A discord bot aimed at letting users to search for Don’t Starve Together recipes directly in Discord."} img={''} link={''}/>
            <Card name={"Wanderer"} desc={"A minecraft mod that adds runes obtainable in custom structures. Each one has unique effects or mechanics."} img={''} link={''}/>
        </div>
        </div>
     );
}

export default Cards;