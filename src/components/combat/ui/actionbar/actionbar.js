import styles from "./actionbar.module.scss";
import Unitbar from "../unitbar/unitbar";

const Actionbar = ({
    spellbook
}) => {

    return (
        <section className={styles.actionbar}>
            <ul className={styles.actionbar__row}>
                <li className={styles.actionbar__unitbar}>            
                    <Unitbar
                    name={"Warrior"}
                    hitpoints={100}
                    resource={"rage"}
                    playerClass={"warrior"}
                    />
                </li>
                <li className={styles.actionbar__spellslot} id="1">1</li>
                <li className={styles.actionbar__spellslot} id="2">2</li>
                <li className={styles.actionbar__spellslot} id="3">3</li>
                <li className={styles.actionbar__spellslot} id="4">4</li>
                <li className={styles.actionbar__spellslot} id="5">5</li>
                <li className={styles.actionbar__spellslot} id="6">6</li>
                <li className={styles.actionbar__spellslot} id="7">7</li>
                <li className={styles.actionbar__spellslot} id="8">8</li>
                <li className={styles.actionbar__spellslot} id="9">9</li>
                <li className={styles.actionbar__spellslot} id="10">10</li>
                <li className={styles.actionbar__spellslot} id="11">11</li>
                <li className={styles.actionbar__spellslot} id="12">12</li>
                <li className={styles.actionbar__unitbar}>            
                    <Unitbar
                    name={"Mage"}
                    hitpoints={100}
                    resource={`mana`}
                    playerClass={"mage"}
                    />
                </li>
            </ul>
        </section>
    )
}

export default Actionbar;