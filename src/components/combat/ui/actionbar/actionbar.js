import styles from "./actionbar.module.scss";
import Unitbar from "../unitbar/unitbar";
import { useContext } from "react";
import { LayoutContext } from "../../../../context/SpellLayoutProvider";
import Spellslot from "../spellslot/spellslot";

const Actionbar = ({
    spellbook
}) => {
    const { layout } = useContext(LayoutContext);
    return (
        <section className={styles.actionbar}>
            <ul className={styles.actionbar__row}>
                <li className={styles.actionbar__unitbar}>            
                    <Unitbar
                    name={"Player"}
                    hitpoints={100}
                    resource={"rage"}
                    playerClass={"warrior"}
                    />
                </li>

                {layout.map( (spellslot, index) => {
                    return <Spellslot 
                    key={index} 
                    id={index + 1}
                    img={spellslot}
                    />
                })}

                <li className={styles.actionbar__unitbar}>            
                    <Unitbar
                    name={"Target"}
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