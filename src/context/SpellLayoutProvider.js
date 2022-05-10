import { createContext, useState } from "react";

export const LayoutContext = createContext();

export const LayoutProvider = ({ children }) => {

    // const ACTIONBAR_LAYOUT = {
    //     1: "Bloodthirst",
    //     2: "",
    //     3: "Raging Blow",
    //     4: "Rampage",
    //     5: "Whirlwind",
    //     6: "",
    //     7: "",
    //     8: "",
    //     9: "",
    //     10: "",
    //     11: "",
    //     12: ""
    // };
    const ACTIONBAR_LAYOUT = [
        "bloodthirst",
        "",
        "ragingblow",
        "rampage",
        "whirlwind",
        "",
        "",
        "",
        "",
        "",
        "",
        ""
    ];

    const [layout, setLayout] = useState(ACTIONBAR_LAYOUT);
    


    const data = { layout, setLayout };

    return <LayoutContext.Provider value={data}>{children}</LayoutContext.Provider>
}