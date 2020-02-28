  
import initializeDetailButtonEvents from './dialog.js'
import { useFish } from './fish/FishDataProvider.js'
import FishList from './fish/FishList.js'
import TipList from './tips/TipList.js'
TipList()

// initializeDetailButtonEvents()

const arrayOfTheFishObjects = useFish()

FishList()