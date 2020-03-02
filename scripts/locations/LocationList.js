import { useLocations } from "./LocationDataProvider.js"
import Locations from "./Location.js"

// putting a function into a variable named TipList
const locationList = () => {

    // searching the html with querySelector for an element with the class of "tipList" 
    const contentElement = document.querySelector(".container")
    // invoking the useTips function that returns the array of tips in the variable arrayOfTips
    const arrayOfLocations = useLocations()
    // looping over arrayOfTips
    for (const locationObject of arrayOfLocations) {
        // each tipObject is being added to html
        contentElement.innerHTML += Locations(locationObject)
    }
}

export default locationList