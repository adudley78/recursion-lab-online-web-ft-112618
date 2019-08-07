import { reverse } from "dns";

function printString(myString) {
    console.log(myString[0]);

    if (myString.length > 1) {
        let mySubString = myString.substring(1, myString.length);
        printString(mySubString);
    } else {
        return true;
    }
}

function reverseString(str){
    // If str is an empty string, return an empty string
    if(str === ""){
        return "";
        // If else return add the character in the first position to the first position of the substring
    } else {
        return reverseString(str.substring(1)) + str[0];
    }
}

// function isPalindrome(str) {
//     if (str.length < 2) {
//         return true;
//     }
//     if (firstCharacter(str) == lastCharacter(str)) {
//         return isPalindrome(middleCharacters(str));
//     }
//     return false;
// }

function isPalindrome(str) {
    var strLength = str.length
    if (strLength === 0 || strLength === 1) {
        return true;
    }
    if (str[0] === str[strLength - 1]) {
        return isPalindrome(str.slice(1, strLength - 1));
    }
    return false;
}