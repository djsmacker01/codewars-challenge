// Write a function to split a string and convert it into an array of words.

// Examples (Input ==> Output):
// "Robin Singh" ==> ["Robin", "Singh"]

// "I love arrays they are my favorite" ==> ["I", "love", "arrays", "they", "are", "my", "favorite"]
function covertToArray(value) {
    let covertString = " I love Liverpool Football Club"
    let res = covertString.split(",")
    console.log(res)
}
 
covertToArray()