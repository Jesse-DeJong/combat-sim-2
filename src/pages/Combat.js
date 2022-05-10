import React from "react";
import { useState, useEffect } from "react";
import styles from "./combat.module.scss";

import furywarriorspellbook from "../data/furywarriorspellbook";
import Actionbar from "../components/combat//ui/actionbar/actionbar";

const Combat = () => {
    return (
        <section className={styles.combat}>
            <Actionbar 
            spellbook={furywarriorspellbook}
            />
        </section>
    )
}

export default Combat;