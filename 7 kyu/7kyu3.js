function reverseWords(sentence) {
    var words = sentence.split(" ");  // Split the sentence into an array of words
    var reversedWords = words.map(function(word) {
        return word.split("").reverse().join("");  // Reverse each word
    });
    var reversedSentence = reversedWords.join(" ");  // Join the reversed words back into a sentence
    return reversedSentence;
}

// Test cases
console.log(reverseWords("This is an example!"));  // Output: "sihT si na !elpmaxe"
console.log(reverseWords("double  spaces"));         // Output: "elbuod  secaps"