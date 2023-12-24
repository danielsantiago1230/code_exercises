// Problem: Write a function that checks whether a given string is a palindrome or not.
// A palindrome is a word, phrase, number,
// or other sequence of characters that reads the same forward and backward (ignoring spaces, punctuation, and capitalization).

const isPalindrome = (string) => {
    // check if argument is a string
    if (typeof string !== "string") {
        return "Please enter a string.";
    }
    // remove spaces and punctuation from string
    string = string.replace(/[^a-zA-Z0-9]/g, "");
    // convert string to lowercase
    string = string.toLowerCase();
    // reverse string
    let reversedString = "";
    for (let i = string.length - 1; i >= 0; i--) {
        reversedString += string[i];
    }
    // compare reversed string to original string
    if (string === reversedString) {
        return "This is a palindrome.";
    } else {
        return "This is not a palindrome.";
    }
}

console.log(isPalindrome("Ana voli Milovana."));

/* Explanation: We first check if the argument is a string. If it is not, we return a message.
Next, we remove spaces and punctuation from the string and convert it to lowercase.
Then, we reverse the string and compare it to the original string.
If they are the same, we return a message saying that the string is a palindrome.
If they are not the same, we return a message saying that the string is not a palindrome. */