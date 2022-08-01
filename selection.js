// Write a program to sort the array in descending order using selection sort algorithm. After Sorting return the array.
// Note both the array and size is already given.
// Input:-
// [4,3,2,5,1]
// Output:-
// [5,4,3,2,1]
var arr=[4,3,8,2,5,1,9];
for(var i=0;i<arr.length;i++)
{
    for(var j=0;j<arr.length;j++)
    {
       var min=arr[i];
       if(arr[j]<arr[i])
       {
        arr[i]=arr[j];
        arr[j]=min;
       }
    //    var min=arr[i];
    //    if(arr[i]>arr[j])
    //    {
    //     arr[j]=arr[i];
    //     arr[i]=min;
    //    }
    }
}
console.log(arr);