function findLargestNumber(array) {
    let largestNumber = array[0];
    for (let i = 1; i < array.length; i++) {
        if (array[i] > largestNumber) {
            largestNumber = array[i];
        }
    }
    return largestNumber;
}

function main() {
    let numbers = parseInt(prompt("Enter how many numbers you want to input"));
    let numberArray = [];

    for (let i = 0; i < numbers; i++) {
        numberArray.push(parseInt(prompt("Enter number " + (i + 1))));
    }

    let largestNumber = findLargestNumber(numberArray);
    alert("The largest number in the array is: " + largestNumber);
}

main();