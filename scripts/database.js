


const database = {
    fish: [ 
       {
        id:1,
        image:"https://oceanfloorstore.com/wp-content/uploads/2020/05/ocellaris-clownfish.jpg",
        name: "Nemo",
        species: "Clown Fish",
        length: "10cm",
        location: "Indo-Pacific",
        diet: "Omnivore",
       },
       {
        id:2,
        image:"https://oceanfloorstore.com/wp-content/uploads/2020/05/yellowtail-damselfish.jpg",
        name: "Distress",
        species:"Damselfish",
        length: "30cm",
        location: "Indo-Pacific",
        diet: "Omnivore",
       },
       {
        id:3,
        image:"https://oceanfloorstore.com/wp-content/uploads/2020/05/green-chromis.jpg",
        name: "Shiny",
        species:"Green Chromis",
        length: "10cm",
        location: "Indo-Pacific",
        diet: "Omnivore",
       },
       {
        id:4,
        image:"https://www.thesprucepets.com/thmb/hBRdM5jE2tk7tMU3yk7T11WVRxA=/750x0/filters:no_upscale():max_bytes(150000):strip_icc():format(webp)/GettyImages-1023371392-5eb710c7018f4c5d8a3a99438422db02.jpg",
        species:"Chevron Tang",
        length: "10cm",
        location: "Polynesia",
        diet: "Herbivore",
       },
       {
        id:5,
        image: "https://www.thesprucepets.com/thmb/4s507x1-ZXHzvycPiVQb1imfj4w=/750x0/filters:no_upscale():max_bytes(150000):strip_icc():format(webp)/GettyImages-520760798-5a36df62482c520036b333f8.jpg",
        name: "Sal",
        species:"Sally Lightfoot",
        length: "2in",
        location: "Caribbean",
        diet: "Omnivore",
       },
       {
        id:6,
        image:"https://reefbuilders.com/wp-content/blogs.dir/1/files/2020/05/rock-beauty1.jpg",
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


