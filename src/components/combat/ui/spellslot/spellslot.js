import styles from "./spellslot.scss";

const Spellslot = ({
    id,
    img
}) => {
    return (
        <li className="spellslot" id={img}>
            {id}        
        </li>
    )
}

export default Spellslot;