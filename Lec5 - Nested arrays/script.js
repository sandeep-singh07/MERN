//Last Class

const value = 4 + ("34" * " ") / 17;
console.log({ value });

const space = " ";
console.log(space * 1);

//Given a N*N grid, find the primary diagonal sum
const arr = [
  [1, 2, 3],
  [4, 5, 6],
  [7, 8, 9],
]; // 3*3 grid

[
  [(0, 0), (0, 1), (0, 2)], // (0, 2)
  [(1, 0), (1, 1), (1, 2)], // (1, 1)
  [(2, 0), (2, 1), (2, 2)], // (2, 0)
];

//for primary diagonal -> i == j
let n = arr[0].length;
let sum = 0;
for (let i = 0; i < n; i++) {
  sum += arr[i][i];
}

//TC = O(n)
//SC = O(1)

console.log("Primary Diagonal Sum: ", sum);

//secondary diagonal -> i + j == n - 1
/* 
PSEUDO CODE 

itialize a variable with value zero, to store the sum of diagonal elements 

it is observed that, all secondary diagonal elements lie on the indices 
whose sum of row & col is equal to n-1 where n is number of rows i+j = n-1 (define i = , j = )
we can loop from first to last index and find the sum of diagonal by adding arr[i][n-i-1] to sum as 
this is simplified from above formula of ... and so on...

*/
sum = 0;
for (let i = 0; i < n; i++) {
  sum += arr[i][n - i - 1];
}

/*
let j = n - 1;
for (let i = 0; i < n; i++) {
  sum += arr[i][j];
  j--;
} */

//TC = O(n)
//SC = O(1)

console.log("Secondary Diagonal Sum: ", sum);

//Write a function to print the odd-numbered column elements of a matrix
const arr2 = [
  [1, 2, 3, 4, 5, 6],
  [2, 6, 12, 43, 3, 5],
  [8, 10, 34, 23, 12, 8],
];
//output: 2 6 10 4 43 23 6 5 8

function printOddColElements(arr) {
  let rows = arr.length;
  let cols = arr[0].length; // since arr2 is a matrix

  // jo constant hai vo bahar wale loop m aaega
  for (let j = 0; j < cols; j++) {
    let ans = "";
    if (j % 2 == 0) continue;
    // change ho raha hai vo andar wale loop me aaega
    for (let i = 0; i < rows; i++) {
      ans += arr[i][j] + " ";
    }
    console.log(ans);
  }
}

printOddColElements(arr2);

/* H.W.
Ques: Given a 2d matrix reverse each odd columns and print it
Input =====>
[
  [1, 2, 3, 4, 5, 6],
  [2, 6, 12, 43, 3, 5],
  [8, 10, 34, 23, 12, 8],
];

Output =====>
[
  [1, 10, 3, 23, 5, 8],
  [2, 6, 12, 43, 3, 5],
  [8, 2, 34,  4, 12, 6],
];
*/

/* =========== SUBARRAYS =========== */
//def: continous segment of an array

const arr3 = [1, 2, 3, 4];
//print all subarrays
let size = arr3.length;

for (let i = 0; i < size; i++) {
  let subarray = "";
  for (let j = i; j < size; j++) {
    subarray += arr3[j] + " ";
    console.log(subarray);
  }
}

/* H.W
Question: Write a function to find the sum of all subarrays

function sumOfAllSubarrays(arr) {
  let n = arr.length;
  let totalSum = 0;
  for (let i = 0; i < n; i++) {
    totalSum += arr[i] * (i+1) * (n-i);
  }return totalSum;
}
//example:
let arr = [1,2,3];
console.log(sumOfAllSubarrays(arr));

*/