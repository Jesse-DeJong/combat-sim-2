import styles from "./unitbar.module.scss";
import Resourcebar from "../resourcebar/resourcebar";

const Unitbar = ({
    name,
    resouce,
    hitpoints
}) => {
    return (
        <section className={styles.unitbar}>
            <h4 className={styles.name}>{name}</h4>
            <div className={styles.div}><Resourcebar resouce={resouce}/></div>
        </section>
    )
}

export default Unitbar;