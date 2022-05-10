import { createContext, useState } from "react";

export const ClassContext = createContext();

export const ClassProvider = ({ children }) => {
    const [playerClass, setPlayerClass] = useState("Warrior");
    
    const PLAYER_CLASS = [
        "Warrior",
        "Mage",
        "Warlock",
        "Shaman",
        "Rogue",
        "Priest",
        "Paladin",
        "Monk",
        "Hunter",
        "Evoker",
        "Druid",
        "Demonhunter",
        "Deathknight"
    ];

    const data = { playerClass, setPlayerClass };

    return <ClassContext.Provider value={data}>{children}</ClassContext.Provider>
}