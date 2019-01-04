// Consider an array of sheep where some sheep may be missing from their place. 
// We need a function that counts the number of sheep present in the array (true means present).
// It's pretty straightforward. Your goal is to create a function that removes the first and last characters of a string. You're given one parameter, the original string. You don't have to worry with strings with less than two characters.

function countSheeps (arrayOfSheep) {
    var sheepCounter = 0;
    for( var i = 0; i < arrayOfSheep.length; i++) {
      if(arrayOfSheep[i]=== true) {
        sheepCounter++;
      }
    }
    return sheepCounter;
  }