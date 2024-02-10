import "./Card.css";
import cards from "../../data/static_cards"

function CardMarket({name = null, price= "0.00", id = '0'}) {
    let image_path =cards[name].image

    return (
        <div className="CardMarket">
            <h2 className="Id"> {'id: '+id}</h2>
            <p>{image_path}</p>
            <p className="Price"> {price + '$'}</p>
        </div>)
}

export default CardMarket;