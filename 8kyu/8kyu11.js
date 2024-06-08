// Description

// Everybody has probably heard of the animal heads and legs problem from the earlier years at school. It goes:

// “A farm contains chickens and cows. There are x heads and y legs. How many chickens and cows are there?”

// Where x <= 1000 and y <=1000

// #Task

// Assuming there are no other types of animals, work out how many of each animal are there.

// Return a tuple in Python - (chickens, cows) and an array list - [chickens, cows]/{chickens, cows} in all other languages

// If either the heads & legs is negative, the result of your calculation is negative or the calculation is a float return "No solutions" (no valid cases), or [-1, -1] in COBOL.

// In the form:

// [Heads, Legs] = [72, 200]

// VALID - [72, 200] =>             [44 , 28]
//                              [Chickens, Cows]

// INVALID - [72, 201] => "No solutions"
// However, if 0 heads and 0 legs are given always return [0, 0] since zero heads must give zero animals.

// There are many different ways to solve this, but they all give the same answer.

// You will only be given integers types - however negative values (edge cases) will be given.


// function animals(heads, legs) {
//     // Check for invalid cases
//     if (heads < 0 || legs < 0 || legs % 2 !== 0 || heads > legs / 2) {
//         return "No solutions";
//     }
 

//     // Calculate the number of cows (chickens can be calculated from heads - cows)
//     const cows = (legs - 2 * heads) / 2;
//     const chickens = heads - cows;

//     // Check for non-negative integer solutions
//     if (Number.isInteger(chickens) && Number.isInteger(cows) && chickens >= 0 && cows >= 0) {
//         return [chickens, cows];
//     } else {
//         return "No solutions";
//     }
// }

// // Test cases
// console.log(animals(72, 200));  // Output: [44, 28]
// console.log(animals(72, 201));  // Output: "No solutions"
// console.log(animals(0, 0));      // Output: [0, 0]


function animals(heads, legs) {
    let cow = legs / 2 - heads
    let chickens = heads - cow

    if (heads == 0 && legs == 0)
        return [0, 0];

    if (heads < 0 || legs < 0)
        return 'No Solutions'

    if (chickens < 0 || cow < 0 || chickens % 1 > 0 || cow % 1 > 0)
        return 'No Solutions'    

    return [chickens, cow]

}
animals(700, 400)
animals(600,200)