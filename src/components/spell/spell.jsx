import React, { useState } from 'react';
import "./spell.css"
import spells from "../../data/spells.js"

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

            <div
                // onMouseOver={() => setShowInfo(true)}
                // onMouseLeave={() => setShowInfo(false)}
            >
                <div className={`infoBox ${showInfo ? '' : 'hidden'}`}>
                    <h2>{spell.name}</h2>
                    <div className='spell_details'>
                        <b className={spell.element}>{spell.element}</b>
                        <b className={spell.type + "_type"}>{spell.type}</b>
                    </div>
                    <hr class="line" />
                    <p>{spell.description}</p>

                    <p className='damage'> {spell.type == 'damage'? "damage:" + spell.damage:''}</p>

                    <div className='right_bottom'>
                        <p className='text_cooldown'>
                            <img className="icon_cost" src="/images/icons/cooldown.png" alt="" />{spell.cooldown}
                        </p>
                        <p className='text_cost'>
                            <img className="icon_cost" src="/images/icons/mana.png" alt="" /> {spell.cost}
                        </p>
                    </div>
                </div>
            </div>

        </div>
    )
}

export default Spell;