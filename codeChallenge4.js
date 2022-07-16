"Use Stricts";

// const dogs = [
//   { weight: 22, curFood: 250, owners: ["Alice", "Bob"] },
//   { weight: 8, curFood: 200, owners: ["Matilda"] },
//   { weight: 13, curFood: 275, owners: ["Sarah", "John"] },
//   { weight: 32, curFood: 340, owners: ["Michael"] },
// ];

// const recommendedFood = (dog) => Math.trunc(dog.weight ** 0.75 * 28);

// // #1
// dogs.map((dog) => (dog.recFood = recommendedFood(dog)));

// // console.log(dogs);

// // #2
// const dogSara = dogs.find((dog) => dog.owners.includes("Sarah"));
// console.log(dogSara);
// console.log(
//   `Sarah's dog is eating too ${
//     dogSara.curFood > dogSara.recFood ? "Much" : "little"
//   }.`
// );

// // #3
// const ownerEatTooMuch = dogs
//   .filter((dog) => dog.curFood > dog.recFood)
//   .flatMap((ow) => ow.owners);

// console.log(ownerEatTooMuch);

// const ownerEatTooLittle = dogs
//   .filter((dog) => dog.curFood < dog.recFood)
//   .flatMap((ow) => ow.owners);

// console.log(ownerEatTooLittle);

// // #4
// console.log(`${ownerEatTooMuch.join(" and ")} dogs eat too much`);
// console.log(`${ownerEatTooLittle.join(" and ")} dogs eat too little`);

// // #5
// console.log(dogs.some((dog) => dog.curFood === dog.recFood));

// // #6
// const checkEatingOkay = (dog) =>
//   dog.curFood > dog.recFood * 0.9 && dog.curFood < dog.recFood * 1.1;

// console.log(dogs.some(checkEatingOkay));

// // #7
// console.log(dogs.filter(checkEatingOkay));

// // #8
// // creating a shallow copy

// const dogsSorted = dogs.slice().sort((a, b) => a.recFood - b.recFood);
// console.log(dogsSorted);

/////
// My Solutins
// const sarahDog = dogs
//   .map((dog) => dog.owners)
//   .flatMap((own) => own.includes("Sarah"))
//   .findIndex((res) => res === true);

// const dogCondition = (dog) =>
//   dog.curFood > recommendedFood(dog)
//     ? console.log("This Dog Eat Too Much")
//     : dog.curFood < recommendedFood(dog)
//     ? console.log("This Dog Eat Too Little")
//     : console.log("The Dog Food is Okay");

// dogCondition(dogs[sarahDog]);

// const ownersEatTooMuch = dogs
//   .filter((dog) => dog.curFood > recommendedFood(dog) * 0.9)
//   .flatMap((own) => own.owners);

// const ownersEatTooLittle = dogs
//   .filter((dog) => dog.curFood < recommendedFood(dog) * 1.1)
//   .flatMap((own) => own.owners);

// console.log(`${ownersEatTooMuch.join(" and ")} Dogs Eat Too Much`);
// console.log(`${ownersEatTooLittle.join(" and ")} Dogs Eat Too Little`);

// const dogsEatExacly = dogs.filter(
//   (dog) =>
//     dog.curFood >= recommendedFood(dog) * 0.9 &&
//     dog.curFood <= recommendedFood(dog) * 1.1
// );

// console.log(dogsEatExacly.map((ow) => ow.owners.join()));
