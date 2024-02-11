import "./CardView.css";
import cards from "../../data/static_cards"
import Spell from "../spell/spell.jsx"

function CardView({ name = null, price = "0.00", id = '0' }) {
    let image_path = cards[name].image
    let card = cards[name]
    let spells = card.spells.map(item => {
        return <Spell name={item} />
    })

    return (
        <div class="ClassView">
            <div className="container_img">
                <img src={card.image} alt="card image" />
            </div>
            <div className="text">
                <div className="namespace">

                    <h1>{card.name}
                        <div className="type">
                            {card.type}
                        </div>
                    </h1>
                    <hr class="line" />
                    <div className="details">
                        <h3 className={card.element}>
                            <img className="icon_element" src="/images/icons/fire_icon.png" alt="icon" />
                            {card.element}
                        </h3>
                        <h3 className={card.rare}> {card.rare} </h3>
                    </div>
                </div>
                <div class="description">
                    <p>{card.description}</p>
                </div>
                <div class="stats">
                    <h2 className="head"> <b>Stats</b></h2>
                    <hr class="line" />
                    <h3 className="stat"> <img className="icon_element" src="/images/icons/attack.png" alt="atk" /> {card.attack}</h3>
                    <h3 className="stat"> <img className="icon_element" src="/images/icons/defense.png" alt="atk" /> {card.defense}</h3>
                    <h3 className="stat"> <img className="icon_element" src="/images/icons/vitality.png" alt="atk" />  {card.vitality}</h3>
                </div>

                <div className="spells_space">
                    <h1>Spells</h1>
                    <hr class="line" />
                    <div className="spells_container">
                        {spells}
                    </div>

                </div>
            </div>
        </div>
    )
}

export default CardView;