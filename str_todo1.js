/*To Do 1
Remove Blanks
Create a function that, given a string, returns all of that string’s contents, but without blanks. 

If given the string " Pl ayTha tF u nkyM usi c ", return "PlayThatFunkyMusic".*/

function removeBlank(str){
    str=str.split(" ").join("");
    return str;
}
console.log(removeBlank("Pl ayTha tF u nkyM usi c"));

/*Get Digits
Create a JavaScript function that given a string, returns the integer made from the string’s digits. Given "0s1a3y5w7h9a2t4?6!8?0", the function should return the number 1357924680.
*/
function strNumbers(str){
    str=str.split("");
    for (var i=0; i<str.length; i++){
        if(!Number(str[i])){
            str[i]="";
        }
    }
    str=Number(str.join(""));
    return str;  
}
console.log(strNumbers("0s1a3y5w7h9a2t4?6!8?0"));
/*Acronyms
Create a function that, given a string, returns the string’s acronym (first letters only, capitalized). 

Given " there's no free lunch - gotta pay yer way. ", return "TNFL-GPYW". 

Given "Live from New York, it's Saturday Night!", return "LFNYISN".*/

function acronymStr(str){
    str=str.split(" ");
    for (var i=0; i<str.length; i++){
        str[i]=str[i][0];
    }
    str=str.join("");
    return str.toUpperCase();
}
console.log(acronymStr("there's no free lunch - gotta pay yer way."));
console.log(acronymStr("Live from New York, it's Saturday Night!"));

/*Count Non-Spaces
Accept a string and return the number of non-space characters found in the string. 

For example, given "Honey pie, you are driving me crazy", return 29 (not 35).*/

function nonSpaceCount(str){
    str=str.split(" ").join("");
    return str.length;
}
console.log(nonSpaceCount("Honey pie, you are driving me crazy"));

/*Remove Shorter Strings
Given a string array and value (length), remove any strings shorter than the length from the array.*/

function removeShorterStrings(arr, len){
    var idxarr=[];
    for (var i=0; i<arr.length; i++){
        if (arr[i].length<len){
            arr.splice(i,1);
            i--;
        }
    }
    return arr;
}
console.log(removeShorterStrings(["I","am","going","to","work"], 3));