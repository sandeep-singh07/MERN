/*
Yesterdays Topic
-Functions
    - When and why to use a function
    - definnitions and invokes (calling a function)
    - functions without parameters
    - default parameters
    - nested functions

- Arrays
    - What are arrays, indices
    - two ways of declaring and defining an array
    - functions of arrays - push/pop unshift/shift
*/

/*
Wierd behaviours
If JS, arrays can be initialized with given size if only
one argument(of type Number) is passed, and 
it creates "empty" spaces for all the elements
and they're not undefined, but EMPTY

*/



const teams = ["CSK","RCB","SRH","KKR","GT"]

console.log(teams.indexOf("SRH")); //2
console.log(teams.indexOf("ABC")); //-1, as "ABC is not present in teams"

//TASK -> replace GT with LSG
let change=teams.indexOf("GT")
teams[change]="LSG"
console.log(teams);


//TASK -> replace KKR with LSG
let change2=teams.indexOf("KKR")
teams[change2]="LSG";
console.log(teams)

//another solution
const kkrIndex=teams.indexOf("KKR");
if (kkrIndex != -1){
    teams[kkrIndex]=="LSG"
}
console.log(teams);

//includes() function in arrays -> tells if a value exists in an array or not
// returns booloen only -> true/false
console.log("Finding SRH: ",teams.includes("SRH"));
console.log("Finding SRK: ",teams.includes("SRK"));

//TASK -> replace KKR with LSG using indexOf() & includes() method
/* STEPS:
    - find the index of KKR in teams array
    - if KKR exists in teams array,
        - then update the value at this index with LSG
*/


const oldTeam = "KKR";
const newTeam = "LSG";

if (teams.includes(oldTeam)) {
  const kkrIndex = teams.indexOf(oldTeam);
  teams[kkrIndex] = newTeam;
}
console.log(teams);

//another approach
// let indexOfKkr = indexOf("KKR");
// if(iplTeams.includes("KKR")){
//   iplTeams[indexOfKkr] = "LSG"; 
// }else{
//   console.log("KKR Does not exist");
// }


//concat() function
const otherTeam=["LSG","RR","MI"];
const otherTeam2=["LSG2","RR2","MI2"];
const fullTeam = teams.concat(otherTeam, otherTeam2)
console.log(fullTeam);

//Questions on Functions and Arrays
/*
Q1: Find factorial

*/
let inputNumber=5;
let fact=1;
for(let i=1;i<=inputNumber;i++){
    fact*=i
}
console.log(fact);

//another
function findFactorial(num) {
  if (num === 0) {
    return 1;
  }
  let result = 1;
  for (let i = 1; i <= num; i++) {
    result = result * i;
  }
  return result;
}

/*
Q2: Given an array → [4, 10, 6, 8) and r = 4;
Find nCr of each element of this array.

nCr = n!/[(n-r)!*r!]
nCr for this array:
nCr(4) = 1
nCr(10) = 210
nCr(6) = 15
nCr(8) = 70

output : [1, 210, 15,70]
*/

let arr=[4,10,6,8];
let r=4

function factorial(num){
    let fact=1
    for(let i=1;i<=num;i++){
        fact*=i
    }
    return fact;
}

function nCr(n,r){
    return factorial(n)/factorial(r)*(factorial(n-r))
}

let result=[];
for (let i=0; i<arr.length;i++){
    result.push(nCr(arr[i],r));
}
console.log(result)


function nCrOfAnArray(arr) {
    const r = 4;
    const ans = 0;
    for (let number of arr) {
        const ncr = nCr(number, r);
        ans - push(ncr);
    }
    return ans;
    function printArr(arr) {
        console.log(arr);
    }
}

    const numbers = new Array(4, 10, 6, 8);
    printArr(nCrOfAnArray(numbers)); // equivalent

