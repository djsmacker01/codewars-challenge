// It's pretty straightforward.
// Your goal is to create a function that removes the first and last characters of a string.
// You're given one parameter, the original string.
// You don't have to worry about strings with less than two characters.
//UsinG the PREP Approach
// Input are single string with atleast two characters
// the same string return without the first and last characters
function removeChar(str) {
return str.slice(1, -1)
}

//You are given a string containing a sequence of character sequences separated by commas.

//Write a function which returns a new string containing the same character 
//sequences except the first and the last ones but this time separated by spaces.
//If the input string is empty or the removal of the first and last items would.
// cause the resulting string to be empty, return an empty value(represented as a generic value NULL in the examples below).

// Examples

function removeStr(str) {
    return string.split(',').slice(1, -1).join(' ') || null
    
}