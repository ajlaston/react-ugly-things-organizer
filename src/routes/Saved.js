import React from "react";
import { UglyContext } from "../UglyContext.js";
import Card from "../components/Card";
import "./Saved.css";

function Saved() {

    const app = React.useContext(UglyContext);
    const {uglyArr } = app;
    const [cards, setCards] = React.useState([]);

    const mappedThings = uglyArr.map((item, index) => {
        return <Card
            key={index}
            img={item.imgUrl}
            description={item.description}
            title={item.title}
            id={item._id}
        />
    });

    React.useEffect(()=>{
        setCards(mappedThings);
    }, [uglyArr]);

    return (
        <div className="saved-container">
            <h1 style={{ textAlign: "center" }}>Saved</h1>

            <div className="cards-container">
                <div>
                    {cards}
                </div>

            </div>

        </div>
    )
}

export default Saved;