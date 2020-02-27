import initializeDetailButtonEvents from './dialog.js'

import { useFish } from './FishDataProvider.js'

const arrayOfTheFishObjects = useFish()
initializeDetailButtonEvents()

for (const fishObject of arrayOfTheFishObjects) {
    console.log(fishObject)
}