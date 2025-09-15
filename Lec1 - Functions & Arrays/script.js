console.log("Hello World");

/*

- reuse some line of code - for loop?
- kuch values pass krke kuch operations kr skte h -- customize any function through parameter
- if we want to use some code repeatedly - for loop?
- whenever we need, we can have a function of that action, and call it
- block of code that performs specific tasks - true
- function is set of code that allows reusability to perform same task

- when we want to use some specific lines of code to be executed multi and we dont want when to use this code snippet

follow DRY Principle - Do not Repeat Yourself


function greetUser(){
    console.log("Hello World");
};

//------
// Function creation or Definition
function hello(){
    console.log("Hello World!");
}

function bye(){
    console.log("Bye World!");
}

// calling/invoking a funtion
hello()
hello()
bye()
bye()
hello()
bye()
bye()
hello()
hello()


*/

/*
Function properties

- Naming rules are same as variable naming rules
- calling/invoking a function
- Function creation or Definition
- Parameters?
*/

/* Parameterized Functions */
function greetUser(userName){
    console.log("Hello "+ userName);
}

greetUser("Rahul");
greetUser("Rani");

//Multiple parameter
function greetUser(firstName, lastName){
    console.log("Hello "+ firstName, lastName);
}

greetUser("Rahul", "Wanjare");
greetUser("Rani", "Kumari");

//TASK
function welcome(name, place="App"){ //parameter
    console.log("Hello "+name+ " Welcome to our "+place)
    
}
welcome("Rahul", "Website") //arugumet
welcome("Rani", "App")
welcome("Prateek", "Office")
welcome("Sargar"); // not passing the second argument


function sum(a, b){
    console.log(a+b);
}
sum(3,7);
sum(3);
sum();

function sum(a=0, b=0){
    console.log(a+b);
}
sum(3,7);
sum(3);
sum();

function sum(a=0, b=0){
    console.log(a+b);
    return a+b; 
    //console.log("Hello"); <-- unreachable code
}
let sum34= sum(3,7);
console.log(sum34);

//Nested Function
function personalDetails(name, birthYear){
    console.log("Name: "+ name);
    console.log("Age: ", calculatedAge(birthYear));
}

function calculatedAge(birthYear){
    return 2025 - birthYear;
}

personalDetails("Jayesh", 2004);

//function to calculate square of numbers (TASK)
function sqr(number){
    return number*number
}
console.log(sqr(20));
console.log(sqr(21));
console.log(sqr(5));

//parenthesis - ()
console.log("Hello", 2+2);
console.log("Hello"+ 2+2);


//--------- ARRAY --------------

const students=["Rahul","Puneet","Prateek","Rani","Riya"];
//print 2nd student
console.log(students[1]);
//print roll number and name of 4th student
console.log(4,students[3])
console.log("Roll no ",students.indexOf("Rani"))

//print all students
console.log(students)

//print all students using loops
for(let i=0;i<5;i++){
    console.log(students[i]);
}

//print all students using loops, roll number wise
for(let i=0;i<5;i++){
    console.log(i+1,students[i]);
}

for(let i=0;i<students.length;i++){
    console.log(i+1,students[i]);
}

//for .. in loop
console.log("for .. in loop");
for(let i in students){
    console.log(students[i]);
}

//print all students using for.. in loop, roll number wise
for(let i in students){ 
    // i -> datatype -> string
    console.log(Number(i)+1, students[i]);
    //console.log(i*1+1, students[i]);

}
console.log(students["2"])


//TASK - print all students with even roll number
for(let i in students){ 
    if(Number(i)%2!=0){
    console.log(Number(i)+1, students[i])};
}

//another approach
for(let i in students){
    (Number(i)+1)%2==0 ? console.log(students[i]) : null;
}

//for .. of loop --> only gives values and not indices
for(let student of students){
    console.log(student);
}


// declaration -> creating a new variable
// definition -> defining the variable or function

// other types of array declarations
const arr1=[1,2,3,4,5,6];
const arr2 =new Array(1,2,3,4,5);
arr1[2]=10;
console.log(arr1);

const emptyArr1 = [];
const emptyArr2 =new Array();
console.log(emptyArr1, emptyArr2);

// homogeneous property in array
const arr3 = [1,2,3,4,5,6]

//heterogeneous property of array
 const arr4= ["hello", 45, "world", 5.6, welcome ];
 console.log(arr4)

// some functions of Arrays
const iplTeams=["CSK", "MI", "RCB", "SRH"];

//add some elememts
//1
iplTeams.push("GT"); //insert at end

//2
iplTeams.unshift("KKR") //insert at first

//Remove some elements
//1
iplTeams.pop(); // deletes from end

//2
iplTeams.shift(); //deletes from beginning


//length
console.log("No. of IPL teams", iplTeams.length)
//print ipl teams
console.log("IPL teams:", iplTeams);

//slice
console.log("Sliced: ",iplTeams.slice(2)); //keeps all elements after first 2 elements

console.log("Negative Sliced: ", iplTeams.slice(-2));  // keeps 2 elements from end

console.log("Real teams:",iplTeams);
