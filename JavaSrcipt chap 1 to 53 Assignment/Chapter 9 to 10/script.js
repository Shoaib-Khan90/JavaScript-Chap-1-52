//QUESTION NO 1

// let user = prompt("Enter the city name ");
// let city = "Karachi"

// if(user==city){
//     document.write("Welcome To City Of Lights")
// }
// else{
//     document.write("Not Found")
// }

//QUESTION NO 2

// let gender = prompt("Enter the gender")
// let user = "Male"
// let user1 = "Female"

// if(user==gender){
//     document.write("Good Morning Sir")
// }
// else if (user1==gender){
//     document.write("Good Morning mam")
// }
// else{
//     document.write("Not Found")
// }

//QUESTION NO 3

// let color = prompt("Enter the color")
// let signal1 = "Red"
// let signal2 = "Yellow"
// let signal3 = "Green"

// if (signal1 == color){
//     document.write("Must Stop")
// }
// else if(signal2 == color){
//     document.write("Ready To Move")
// }
// else if (signal3 == color){
//     document.write("Move Now")
// }
// else{
//     document.write("Not Found")
// }

//QUESTION NO 4

// let fuel =  prompt("Enter the Fuel amount")
// let Currentfuel = 0.25

// if(Currentfuel>fuel){
//     document.write("Plz Refill the Fuel In your Car")
// }
// else{
//     document.write("Fuel Is Greater Than 0.25 Liters")
// }

//QUESTION NO 5

//display

// var a = 4; 
// if (++a === 5)
//     { 
//         alert("given condition for variable a is true");
//      }

//not 

// var b = 82; 
// if (b++ === 83)
// { 
//  alert("given condition for variable b is true"); 
//  }

//not display
// var c = 12; if (c++ === 13){ alert("condition 1 is true"); }

// display
// if (c === 13){ alert("condition 2 is true"); }

// not display
// if (++c < 14){ alert("condition 3 is true"); }

//not display
// if(c === 14){ alert("condition 4 is true"); }

//display
// var materialCost = 20000; var laborCost = 2000; var totalCost = materialCost + laborCost; if (totalCost === laborCost + materialCost){ alert("The cost equals"); }

//display
// if (true){ alert("True"); } if (false){ alert("False"); }

//display
// if("car" < "cat"){ alert("car is smaller than cat"); }

//QUESTION NO 6 same ha chap 6 to 9 ma jo ta

//QUESTION NO 7

// let guess = +prompt("Enter the num")
// let num = 6

// if (num==guess){
//     document.write("Bingo! Correct Answer")
// }
// else if(num == guess+1) {
//     document.write ("Close Enough To The Correct Answer")
// }
// else if(num == guess-1){
//      document.write ("Close Enough To The Correct Answer")
// }
// else{
//     document.write("Not Found")
// }

//QUESTION NO 8

// let num = prompt("Enter the num")

// if(num % 3 == 0){
//     document.write("The num is divisble by 3")
// }
// else{
//     document.write("Not Found")
// }

//QUESTION NO 9

// let num = prompt("Enter the num")

// if(num % 2 == 0){
//     document.write("The num is Even")
// }
// else{
//     document.write("The num is odd")
// }

//QUESTION NO 10 simple condition laga kr hu jyga 

//QUESTION NO 11

let firstnum = +prompt("Enter the first num:")
let secondnum = +prompt("Enter the second num")
let operator = prompt("Enter the operation (+, -, *, /, %):");
let result;

if (operator == "+"){
    result=firstnum+secondnum
    document.write("The addition of the value is " ,result)
}
else if(operator == "-"){
      result=firstnum-secondnum
    document.write("The Subtraction of the value is " ,result)
}
else if(operator == "*"){
      result=firstnum*secondnum
    document.write("The Multiplication of the value is " ,result)
}
else if (operator == "/"){
      result=firstnum/secondnum
    document.write("The Division of the value is " ,result)
}
else if (operator == "%"){
      result=firstnum%secondnum
    document.write("The Moduls of the value is " ,result)
}
else{
    document.write("Not Found")
}