const furywarriorspellbook = [
    {
        name: `Rampage`,
        desc: `Enrages you and unleases a series of 4 brutal strikes for a total of ${"206.8% of Attack Power"} Physical damage.`,
        minDmg: 10,
        maxDmg: 15,
        cost: 80,
        resource: `rage`,
        cooldown: 0,
        sourceRate: null,
        img: `https://icons.wowdb.com/retail/large/ability_warrior_rampage.jpg?43340`
    },
    {
        name: `Enrage`,
        desc: `Becoming Enraged increases your damage done by ${"11.2%"}, Haste by 15%, and movement speed by 10% for 4 sec.`,
        minDmg: null,
        maxDmg: null,
        cost: null,
        resource: null,
        cooldown: null,
        sourceRate: ["Bloodthirst", 30, "Rampage", 100],
        img: `https://icons.wowdb.com/retail/large/spell_shadow_unholyfrenzy.jpg?43340`
    },
    {
        name: `Bloodthirst`,
        desc: `Assault the target in a bloodthirsty craze, dealing ${"65% of Attack Power"} Physical damage and restoring 3% of your health.`,
        minDmg: 5,
        maxDmg: 10,
        cost: -8,
        resource: `rage`,
        cooldown: 4500,
        sourceRate: null,
        img: `https://icons.wowdb.com/retail/large/spell_nature_bloodlust.jpg?43340`
    },
    {
        name: `Raging Blow`,
        desc: `A mighty blow with both weapons that deals a total of ${"122.2% of Attack Power"} Physical damage. Raging Blow has a 20% chance to instantly reset its own cooldown.`,
        minDmg: 10,
        maxDmg: 15,
        cost: 1,
        resource: `charge`,
        cooldown: 8000,
        sourceRate: ["Raging Blow", 20],
        img: `https://icons.wowdb.com/retail/large/warrior_wild_strike.jpg?43340`
    },
    {
        name: `Whirlwind`,
        desc: `Unleashes a whirlwind of steel, striking all nearby enemies for ${"51.6% of Attack Power"} Physical damage. Deals reduced damage beyond 5 targets. Causes your next 2 single-target melee attacks to strike up to 4 additional targets for 45% damage.`,
        minDmg: 1,
        maxDmg: 5,
        cost: 30 - 3,
        resource: `rage`,
        cooldown: 0,
        sourceRate: null,
        img: `https://icons.wowdb.com/retail/large/ability_whirlwind.jpg?43340`
    }
];

export default furywarriorspellbook;