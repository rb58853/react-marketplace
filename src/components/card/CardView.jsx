import React, { useState } from 'react';
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
    let [showInfo, setShowInfo] = useState(false);

    return (
        <div className="full">
            <div class="card">
                <div className='container_images'>
                    <img className='background' src={"/images/backgrounds/" + card.element + ".png"} alt="card image" />

                    <div className="card_image_container">
                        <img className="card_image" src={card.image} alt="card image" />
                        {/* <p className='card_description'> descripcion de la carta</p> */}
                    </div>
                </div>

                <div className="namespace">
                    <h1>{card.name}</h1>
                    <div className="items">

                        <div className="detail_content">
                            <h4 className="head_detail_text">
                                <b>TYPE</b>
                            </h4>
                            <div className="details">
                                <h3 className="type"> {card.type} </h3>
                            </div>
                        </div>

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

                        <div className="detail_content">
                            <h4 className="head_detail_text">
                                <b>COUNT/MAX
                                </b>
                            </h4>
                            <h3 className="count"> {card.count + "/" + card.max_count + "  "}
                                <img
                                    onMouseEnter={() => setShowInfo(true)}
                                    onMouseLeave={() => setShowInfo(false)}

                                    className={`count_info_icon ${showInfo ? 'highlight' : ''}`} src={"/images/icons/info.png"} alt={name} />
                            </h3>
                            <div className={`count_info ${showInfo ? '' : 'hidden'}`}>
                                Existen <code>{card.count}</code> cartas <b> {card.name}</b>, el maximo de cartas iguales a esta que pueden existir es <code>{card.max_count}</code>.
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