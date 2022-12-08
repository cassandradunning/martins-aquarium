/* 
    Next, you import that function into the main module. Then you can 
    invoke the function and store the fish collection in a variable that 
    is scoped to the main module. Then just log each fish object to the 
    developer console.

    Note: The imported function is wrapped in curly braces. This is needed 
    for anything that is exported from a module that isn't the default export.
*/


import { getFish } from './database.js'

const allFish = getFish()

for (const fish of allFish) {
    console.log(fish)
}


// Import the FishList function from the correct module
import {FishList} from './FishList.js'


/*
    What is the CSS selector for the element where you
    want to display the fish?

    Use . for elements with a "class" attribute
    Use # for elements with an "id" attribute
 */

const parentHTMLElement = document.querySelector(".fishcard")


parentHTMLElement.innerHTML = FishList()

   