// Problem: Write a function that takes a string and returns the characters that appear more than once in the string, along with the number of times they appear. For example, given the string "hello world", the function should return something like { 'l': 3, 'o': 2 } since 'l' appears 3 times and 'o' appears 2 times.

const findDuplicateCharacters = (str) => {
    // Check if input is a string
    if (typeof str !== 'string') {
        return 'Please enter a string';
    }

    let charCount = {};
    let result = {};

    // Count occurrences of each character
    for (let i = 0; i < str.length; i++) {
        const char = str[i];
        charCount[char] = (charCount[char] || 0) + 1;
    }

    // Filter characters that appear more than once
    for (const char in charCount) {
        if (charCount[char] > 1) {
            result[char] = charCount[char];
        }
    }

    return result;
};

console.log(findDuplicateCharacters('hello world'));

