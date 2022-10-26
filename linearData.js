
function findSum(arr, n)
{
    
    arr.sort();
 
    let sum = 0;
    for (let i=0; i<n; i++)
    {
        if (arr[i] != arr[i+1])
            sum = sum + arr[i];
    }
 
    return sum;
}
 

 
    let arr = [1, 2, 3, 1, 1, 4, 5, 6];
    let n = arr.length;
    document.write(findSum(arr, n));
 
