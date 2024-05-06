let spaceship = {
    passengers: [{deckHand: 'Jermmy'}],
    telescope: {
      yearBuilt: 2018,
      model: "91031-XLT",
      focalLength: 2032 
    },
    crew: {
      captain: { 
        name: 'Sandra', 
        degree: 'Computer Engineering', 
        encourageTeam() { console.log('We got this!') },
       'favorite foods': ['cookies', 'cakes', 'candy', 'spinach'] }
    },
    engine: {
      model: "Nimbus2000"
    },
    nanoelectronics: {
      computer: {
        terabytes: 100,
        monitors: "HD"
      },
      'back-up': {
        battery: "Lithium",
        terabytes: 50
      }
    }
  }; 
  



  /*

  Assign the captain‘s favorite food (the 
    element in the 0th index of her 'favorite foods' 
    array) to it.

  */


    
let capFave = spaceship.crew.captain['favorite foods'][0];

console.log(capFave);

/*
Assign the first passenger as its value (the element in the 0th 
    index of the spaceship.passengers array you just made). 


*/

let firstPassenger = spaceship.passengers[0];

console.log(firstPassenger);