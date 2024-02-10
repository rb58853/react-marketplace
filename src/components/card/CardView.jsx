import "./Card.css";
import cards from "../../data/static_cards"

function CardView({name = null, price= "0.00", id = '0'}) {
    let image_path =cards[name].image
    let card =cards[name]
    return (
        <div className="CardView">
            <h1 className="name"> {card.name}</h1>
            <h1 className="Id"> {'id: '+id}</h1>
            
        </div>)
}

export default CardView;