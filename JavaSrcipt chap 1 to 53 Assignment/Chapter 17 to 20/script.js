//QUESTION NO 1

//ya 2D array hota ha 

// let Arr = [
//     [0,1,2,3],
//     [1,0,1,2],
//     [2,1,0,1],
// ]

// document.write(Arr[0] + "<br>")
// document.write(Arr[1] + "<br>")
// document.write(Arr[2])

//QUESTION NO 2

// let Arr = [1,2,3,4,5,6,7,8,9,10]

// for(let i=0; i<Arr.length; i++){
//     document.write(Arr[i] + "<br>")
// }

//QUESTION NO 3

let num1 = prompt("Enter the first num")
let num2 = prompt("Enter the second num")

for (let i=1; i<=num2; i++){
document.write(num1 + "x" + i + "=" + (num1 * i) + "<br>")
}