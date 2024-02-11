import "./spell.css"
import spells from "../../data/spells.js"

function Spell({ name = null }) {
    let image_path = spells[name].image

    return (
        <div>
            <img className="spell" src={image_path} alt={name} />
        </div>
    )
}

export default Spell;