import React, { useState } from 'react';
import "./spell.css"
import spells from "../../data/spells.js"
import "../card/CardView.css"

function Spell({ name = null }) {
    let spell = spells[name]
    let image_path = spells[name].image
    let [showInfo, setShowInfo] = useState(false);

    return (

        <div>
            <div
                onMouseEnter={() => setShowInfo(true)}
                onMouseLeave={() => setShowInfo(false)}
            >
                <img className={`spell ${showInfo ? 'highlight' : ''}`} src={image_path} alt={name} />
            </div>
            <div className={`infoBox ${showInfo ? 'hidden' : ''}`}>
                <h1>{name}</h1>
                <div className='spell_element'>
                    <b className={spell.element}>{spell.element}</b>
                </div>
                <hr class="line" />
                <p>{spell.description}</p>
                <p className='damage'>damage: {spell.damage}</p>
                
                <p className='right_bottom'> <img className="icon_cost" src="/images/icons/cooldown.png" alt="" />{spell.cooldown} <img className="icon_cost" src="/images/icons/mana.png" alt="" />{spell.cost}</p>

            </div>
        </div>
    )
}

export default Spell;