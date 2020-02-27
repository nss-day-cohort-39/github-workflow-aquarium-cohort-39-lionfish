const fishCollection = [
    {
        name: "Betty",
        Species: "Longtooth Barracuda",
        Location: "Cumberland River",
        Length: "2 ft",
        food: "Dirt",

    },

    {
        name: "Nemo",
        Species: "Clownfish",
        Location: "Great Barrier Reef",
        Length: "2 in",
        food: ["Plankton"]
    },


    {
        name: "Dory",
        Species: "Blue Tang",
        Location: "New Zealand Sea",
        Length: "4 in",
        food: ["Clownfish"]
    },


    {
        name: "Larry",
        Species: "Unicorn Fish",
        Location: "Camen Islands",
        Length: "8 in",
        food: ["algae"]
    },


    {
        name: "Bob",
        Species: "Anglerfish",
        Location: "20,000 leaques under the sea",
        Length: "1 ft",
        food: ["bottom feeders"]
    },

    {
        name: "Karen",
        Species: "Lionfish",
        Location: "New Zealand Sea",
        Length: "6 in",
        food: ["Scad"]
    }
]

export const useFish = () => {
    return fishCollection.slice()
}