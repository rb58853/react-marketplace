import "./CardView.css";
import cards from "../../data/static_cards"
import Spell from "../spell/spell.jsx"
import "../elements/elements.css"
import "../elements/rare.css"

function CardView({ name = null, price = "0.00", id = '0' }) {
    let image_path = cards[name].image
    let card = cards[name]
    let spells = card.spells.map(item => {
        return <Spell name={item} />
    })

    return (
        <div className="full">
            <div class="card">
                {/* <div className="container_img">
                <img src={card.image} alt="card image" />
            </div> */}

                <img className='background' src="/images/backgrounds/plant.png" alt="card image" />
                <div className="namespace">
                    <h1>{card.name}
                        {/* <h4 className="type">
                            {card.type}
                        </h4> */}
                    </h1>
                    <div className="items">
                        <div className="detail_content">
                            <h4 className="head_detail_text">
                                <b>CLASS</b>
                            </h4>
                            <div className="details">
                                <h3 className={card.element}>
                                    <img className="icon_element" src={"/images/icons/" + card.element + ".png"} alt="icon" />
                                    {card.element}
                                </h3>
                            </div>
                        </div>
                        <div className="detail_content">
                            <h4 className="head_detail_text">
                                <b>RAREZA</b>
                            </h4>
                            <div className="details">
                                <h3 className={card.rare}> {card.rare} </h3>
                            </div>
                        </div>
                    </div>
                    <hr class="line" />
                    <div class="description">
                        <p>{card.description}</p>
                    </div>
                </div>
                <div class="stats">
                    <h2 className="head"> Stats</h2>
                    <hr class="line" />
                    <h3 className="stat"> <img className="icon_stat" src="/images/icons/attack.png" alt="atk" /> {card.attack}</h3>
                    <h3 className="stat"> <img className="icon_stat" src="/images/icons/defense.png" alt="atk" /> {card.defense}</h3>
                    <h3 className="stat"> <img className="icon_stat" src="/images/icons/vitality.png" alt="atk" />  {card.vitality}</h3>
                </div>

                <div className="spells_space">
                    <h2>Spells</h2>
                    <hr class="line" />
                    <div className="spells_container">
                        {spells}
                    </div>
                </div>
            </div>
        </div >
    )
}

export default CardView;