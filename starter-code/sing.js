console.log("sing.js loaded");

function singFunction(){
  let bottleString = "bottles";
  let beerOnTheWall = null;

  let bottlesOfBeer = prompt("How many bottles of beer should we start with?");

  if (bottlesOfBeer === NaN){
    alert("That's not a number, silly. Hit refresh to try again.");
  } else {
    while (bottlesOfBeer){
      if (bottlesOfBeer === 1){
        bottleString = "bottle";
        beerOnTheWall = "No more";
      } else {
        beerOnTheWall = bottlesOfBeer-1;
      }
      console.log(`${bottlesOfBeer} ${bottleString} of beer on the wall.`);
      console.log(`${bottlesOfBeer} ${bottleString} of beer!`);
      console.log(`Take one down and pass it around,${beerOnTheWall} bottles of beer on the wall!`);
      bottlesOfBeer--;
    }
  }
}
