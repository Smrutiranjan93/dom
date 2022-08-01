// Write a program to sort the array in descending order using Bubble sort algorithm. After Sorting return the array.
// Note both the array and size is already given.
// Input:-
// [4,3,2,5,1]
// Output:-
// [5,4,3,2,1]
var arr=[4,3,2,5,1];
for(var j=0;j<arr.length;j++)
{
for(var i=0;i<arr.length;i++)
{
    if(arr[i]>arr[i+1])
    {
        var temp=arr[i];
        arr[i]=arr[i+1];
        arr[i+1]=temp;
      
    }
}
}
console.log(arr);