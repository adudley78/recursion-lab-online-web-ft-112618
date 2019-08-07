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
    if(str === ""){
        return "";
    } else {
        return reverseString(str.substring(1)) + str[0];
    }
}