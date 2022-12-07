


const database = {
    fish: [ 
       {
        id:1,
        image:"tinyurl.com/5x65p8h4",
        name: "Nemo",
        species: "Clown Fish",
        length: "10cm",
        location: "Indo-Pacific",
        diet: "Omnivore",
       },
       {
        id:2,
        image:"tinyurl.com/4xcctkv8",
        name: "Distress",
        species:"Damselfish",
        length: "30cm",
        location: "Indo-Pacific",
        diet: "Omnivore",
       },
       {
        id:3,
        image:"https://tinyurl.com/3ue44pb5",
        name: "Shiny",
        species:"Green Chromis",
        length: "10cm",
        location: "Indo-Pacific",
        diet: "Omnivore",
       },
       {
        id:4,
        image:"https://tinyurl.com/577wjjdc",
        species:"Chevron Tang",
        length: "10cm",
        location: "Polynesia",
        diet: "Herbivore",
       },
       {
        id:5,
        image: "https://tinyurl.com/4ryceemw",
        name: "Sal",
        species:"Sally Lightfoot",
        length: "2in",
        location: "Caribbean",
        diet: "Omnivore",
       },
       {
        id:6,
        image: "https://tinyurl.com/4ryceemw",
        name: "Rocky",
        species:"Rock Beauty",
        length: "12in",
        location: "Caribbean",
        diet: "Omnivore",
       },
    ]
}

/*
    The database module will maintain the state, but other modules need copies 
    of the state to use for their purposes. Here's the simplest way to do that. 
    The function below returns a copy of the fish array.

    The function is exported so other modules can import it and use it.

    Don't worry about understanding all of the syntax here. Just remember that 
    it copies the objects in an array. Understanding comes with time and practice.
*/

export const getFish = () => {
    return database.fish.map(fish => ({...fish}))
}


