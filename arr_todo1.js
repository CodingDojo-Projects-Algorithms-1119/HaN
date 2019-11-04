/* To Do 1
Push Front
Given an array and an additional value, insert this value at the beginning of the array. Do this without using any built-in array methods.
*/
var array = [7,9,-10]
function pushFront(val, arr){
    for (var i = arr.length; i>0; i--){
        arr[i] = arr[i-1];
    }
    arr[0] = val;
    return arr;
}
console.log(pushFront(12, array));

/*Pop Front
Given an array, remove and return the value at the beginning of the array. Do this without using any built-in array methods except pop().
*/
function popFront(arr){
    var val = arr[0];
    for (var i=0; i<arr.length; i++){
        arr[i] = arr[i+1];
    }
    arr.length-=1;
    return val;
}
console.log(popFront([7,8,9,10,-9]));
/*Insert At
Given an array, index, and additional value, insert the value into array at given index. Do this without using built-in array methods. You can think of pushFront(arr,val) as equivalent to insertAt(arr,0,val).
*/

function insert(val, arr, index){
    for (var i = arr.length; i>index; i--){
        arr[i] = arr[i-1];
    }
    arr[index] = val;
    return arr;
}
console.log(insert(5,[1,2,3,6,7,8],3));
/*Remove At
Given an array and an index into array, remove and return the array value at that index. Do this without using built-in array methods except pop(). Think of popFront(arr) as equivalent to removeAt(arr,0).
*/

function removeAt(arr, index){
    for (var i=index; i<arr.length-1; i++){
        arr[i] = arr[i+1];
    }
    arr.length-=1;
    return arr;
}
console.log(removeAt([1,5,8,-9,8,3.4,7],4));

/*Swap Pairs
Swap positions of successive pairs of values of given array. If length is odd, do not change the final element. For [1,2,3,4], return [2,1,4,3]. For example, change input ["Brendan",true,42] to [true,"Brendan",42]. As with all array challenges, do this without using any built-in array methods.
*/

function swapPairs(arr){
    if ((arr.length%2)==0){
        for (var index=0; index<arr.length-1; index+=2){
            var temp = arr[index];
            arr[index] = arr[index+1];
            arr[index+1] = temp;
        }
    } else {
        for (var index=0; index<arr.length-2; index+=2){
            var temp = arr[index];
            arr[index] = arr[index+1];
            arr[index+1] = temp;
        }
    }
    return arr;
}
console.log(swapPairs([1,2,3,4]));
console.log(swapPairs([1,2,3,4,5]));
console.log(swapPairs(['Ha',true,3,4,6]));

/*Remove Duplicates
Sara is looking to hire an awesome web developer and has received applications from various sources. Her assistant alphabetized them but noticed some duplicates. Given a sorted array, remove duplicate values. Because array elements are already in order, all duplicate values will be grouped together. As with all these array challenges, do this without using any built-in array methods.
Second: Solve this without using any nested loops.*/

function removeDup(arr){
    for (var index=0; index<arr.length-1; index++){
        if (arr[index]==arr[index+1]){
            removeAt(arr,index);
            index-=1;
        }
    }
    return arr;
}

console.log(removeDup([1,2,2,2,2,2,2,3,3,4,9,10,20,20]));