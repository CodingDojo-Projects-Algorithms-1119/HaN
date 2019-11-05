/*To Do 2
Reverse
Given a numerical array, reverse the order of values, in-place. The reversed array should have the same length, with existing elements moved to other indices so that order of elements is reversed. Working ‘in-place’ means that you cannot use a second array – move values within the array that you are given. As always, do not use built-in array functions such as splice().
*/

function reverse(arr){
    for (var i = 0; i < Math.floor(arr.length/2); i++){
        temp = arr[i];
        arr[i]=arr[arr.length-i-1];
        arr[arr.length-i-1]=temp;
    }
    return arr;
}
console.log(reverse([1,2,3,4,5]));
console.log(reverse([1,2,3,4,5,6]));
/* Rotate
Implement rotateArr(arr, shiftBy) that accepts array and offset. Shift arr’s values to the right by that amount. ‘Wrap-around’ any values that shift off array’s end to the other side, so that no data is lost. Operate in-place: given ([1,2,3],1), change the array to [3,1,2]. Don’t use built-in functions.

Second: allow negative shiftBy (shift L, not R).

Third: minimize memory usage. With no new array, handle arrays/shiftBys in the millions.

Fourth: minimize the touches of each element.*/

function pushFront(val, arr){
    for (var i = arr.length; i>0; i--){
        arr[i] = arr[i-1];
    }
    arr[0] = val;
    return arr;
}

function removeAt(arr, index){
    var removeditem=arr[index];
    for (var i=index; i<arr.length-1; i++){
        arr[i] = arr[i+1];
    }
    arr.length-=1;
    return removeditem;
}

function rotate(arr, shiftBy){
    if(shiftBy < 0){
        shiftBy = arr.length + shiftBy;
    }
    var count = 0
    while( count < shiftBy){
        pushFront(removeAt(arr,arr.length-1),arr);
        count++
    }
    return arr;
}
console.log(rotate([1,2,3,4,5,6,7],2));

/*Filter Range
Alan is good at breaking secret codes. One method is to eliminate values that lie within a specific known range. Given arr and values min and max, retain only the array values between min and max. Work in-place: return the array you are given, with values in original order. No built-in array functions.
*/
function filter(arr, min, max){
    for (var i=0; i<arr.length; i++){
        if (arr[i]<min || arr[i]>max){
            removeAt(arr,i);
            i--;
        }
    }
    return arr;
}
console.log(filter([1,2,3,4,5,6],2,4));

/*Concat
Replicate JavaScript’s concat(). Create a standalone function that accepts two arrays. Return a new array containing the first array’s elements, followed by the second array’s elements. Do not alter the original arrays. Ex.: arrConcat( ['a','b'], [1,2] ) should return new array ['a','b',1,2].
*/
function arrConcat(arr1, arr2){
    var arr = [];
    for (var i = 0; i<arr1.length; i++){
        arr.push(arr1[i]);
    }
    for (var i = 0; i<arr2.length; i++){
        arr.push(arr2[i]);;
    }
    return arr;
}
console.log(arrConcat(['a','b'],[1,2]));


/*Skyline Heights
Lovely Burbank has a breathtaking view of the Los Angeles skyline. Let’s say you are given an array with heights of consecutive buildings, starting closest to you and extending away. Array [-1,7,3] would represent three buildings: first is actually out of view below street level, behind it is second at 7 stories high, third is 3 stories high (hidden behind the 7-story). You are situated at street level. Return array containing heights of buildings you can see, in order. Given [-1,1,1,7,3] return [1,7]. Given [0,4] return [4]. As always with challenges, do not use built-in array functions such as unshift().
*/
function removeDup(arr){
    for (var index=0; index<arr.length-1; index++){
        if (arr[index]==arr[index+1]){
            removeAt(arr,index);
            index-=1;
        }
    }
    return arr;
}
function findMax(arr){
    var max = arr[0];
    for(var i = 0; i<arr.length;i++){
        if(max<arr[i]){
            max=arr[i];
        }
    }
    return max;
}
function skylineHeights(arr){
    if(arr[0]<1){
        removeAt(arr,0);
    }
    removeDup(arr)
    filter(arr,arr[0]-1,findMax(arr)+1)
    return arr;
}
console.log(skylineHeights([-1,1,1,7,3]));
console.log(skylineHeights([0,4]));