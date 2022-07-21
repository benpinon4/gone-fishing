const prompt = require("prompt-sync")({ sigint: true });

//Global Variables
let fishKeep = [];
let caughtFish = {};
let fishCount = 0;
let totalPounds = 0;
let totalValue = 0;
let fishdescriptor1 = [
  "Riggidy",
  "Dinkity",
  "Clinkity",
  "Slankity",
  "Crunkity",
];
let fishdescriptor2 = ["Balled", "Eyed", "Knuckled", "Finned", "Gilled"];
let fishType = ["Trout", "Salmon", "Bass", "Snook", "Carp"];
let timeOfDay = 6;

//Functions

let createFish = () => {
  let weight = fishWeight();
  let value = fishValue();
  let name = fishName();
   let newFish = {
     name: name,
     weight: weight,
     value: value,
   };
 
   return newFish;
 };
 
 //Random Fishweight Generator Function
 let fishWeight = () => {
   weight = (Math.random() * 10).toFixed(2);
   return weight ;
 };
 //Random FishValue Generator Function
 let fishValue = () => {
   value = (Math.random() * 10).toFixed(2);
   return value;
 };
 //Random FishName Generator Function
 let fishName = () => {
   i = Math.round(Math.random() * 4);
   c = Math.round(Math.random() * 4);
   p = Math.round(Math.random() * 4);
   descriptor = fishdescriptor1[i];
   secondDescriptor = fishdescriptor2[c];
   type = fishType[p];
   return descriptor + " " + secondDescriptor + " " + type;
 };




console.log(
  "\nYou've gone fishing! Try to maximize the value of your caught fish. \nYou can fish for six hours (till 12:00pm) and can catch at most 10 lbs of fish.\n\n\n==========================================\n"
);




//While loop which is keeping track of 6 increments or hours which remains open from 6(including) until 12(excluding)
while (timeOfDay >= 6 && timeOfDay < 12) {
  //Adding one(hour) to every loop increment

 //Start of loop with current catch values

  console.log(
    `\nThe time of day is ${timeOfDay}.00 am. So far you've caught: ${fishCount} fish, ${totalPounds}lbs, $${totalValue}`
  );
 

    
  //Creating a caught fish to be kept or released
    caughtFish = createFish();

  //Messaging stating you caught a fish with its details
  console.log(
    `\n\nCongragulations!!!!!\n\nYou caught a '${caughtFish.name}' weighing ${caughtFish.weight}lbs and valued at $${caughtFish.value}`
  );

  //Condition checking if totalPounds + caughFish.weight is less than or equal to 10
if((Number(totalPounds) + Number(caughtFish.weight)) >= 10) {
  console.log("\n================================");
  let autoRelease = prompt("\nThis fish exceeds your 10lb weight limit.\n\n\nYou must release this fish. Please press enter to continue")
} else {
  //Prompt to select CATCH or RELEASE.
  let catchOrRelease = prompt("\n\nPlease Catch(c) or Release(r): ");
//Condition for SELECTING C for CATCH
  if (catchOrRelease === "c") {
    fishCount++;
    totalPounds = (Number(totalPounds)+Number(caughtFish.weight)).toFixed(2)
    console.log("\n" + totalPounds)
    totalValue = (Number(totalValue) + Number(caughtFish.value)).toFixed(2)
    console.log("You choose to keep the fish");
    fishKeep.push(caughtFish);
    console.log("\n================================");

//Condition for SELECTING R for RELEASE
  } else if (catchOrRelease === "r"){
    console.log("\n\nYou choose to release the fish")
    console.log("\n================================");
  } }
  timeOfDay++;
}
    
  

console.log("\n================================");

console.log("\n\nTIME IS UP!!!!\n\nThe time of day is 12:00pm ")

console.log(`\nYou caught ${fishCount} fish:\n`)

for(let i = 0; i < fishKeep.length; i++){
  console.log(`* ${fishKeep[i].name}, ${fishKeep[i].weight}lbs, $${fishKeep[i].value}`)
}


console.log(`\nTotal weight: ${totalPounds}lbs`)
console.log(`Total value: $${totalValue}`)

/*
descriptors
2 desciptor arrays
1type array
*/
/*
fish {
    name: string,
    weight: number,
    value: number,
}

*/
//hourCtr - variable to keep track of time
//Loop to simulate the passage of time//

//variable for total value
//variable for total time

//fishkeep.length = totalLength

// for(let i = 0; i <)
