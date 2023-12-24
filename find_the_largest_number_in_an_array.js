// Problem: Given an array of numbers, write a function to find and return the largest number in the array.
const my_array = [1, 100, 501, 13, 45, 1500, 700];
const findLargestNumber = (array) => {
    var largest = array[0];
    for (let i = 1; i < array.length; i++) {
        if (array[i] > largest) {
            largest = array[i];
        }
    }
    return largest;
};
console.log(findLargestNumber(my_array));
/* Explanation: We can use a for loop to iterate through the array and compare each number to the largest number we have seen so far.
If the current number is larger than the largest number we have seen so far, we update the largest number.
After we have iterated through the entire array, we return the largest number.*/
