import "../../../../styles/reset.css";
import styles from "./unitbar.scss";
import Resourcebar from "../resourcebar/resourcebar";

const Unitbar = ({
    name,
    resource,
    hitpoints,
    playerClass
}) => {
    return (
        <section id={playerClass} className="unitbar">
            <h4 className={name}>{name}</h4>
            <Resourcebar resource={resource}/>
        </section>
    )
}

export default Unitbar;