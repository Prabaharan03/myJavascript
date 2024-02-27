//Array
//We can use an array to store multiple values.

let cities = ["chennai","Madurai","kovai","Trichy"]
let numbers = [23,33,45,64,74,86,99]

//Length - total element in the arry
console.log(numbers.length)

//getting All values in array
console.log(cities) 

//Obtaining a specific value.
console.log(cities[2])

//Attempting to access an empty slot
console.log(cities[4])

//last element
console.log(cities[cities.length-1])

//mix of int and string
let arr = [5,7,6,"praba","joji",[3,4]]
console.log(arr)
console.log(arr[5][1])

//2d array
let matrix = [[3,2],[5,6],[7,8]]
console.log(matrix)
console.log(matrix[2][1])

//array methods
let array = ['a','b','c','d','e']

//push - add elements to the end
array.push('f')
console.log(array)

//pop - remove element from the end and 
//returns removed value
console.log(array.pop(array))
console.log(array)

//shift - removes element from start of the array
//returns removed value 
console.log(array.shift(array))
console.log(array)

//unshift - adds element to start of the array
//returns new length
console.log(array.unshift("a"))
console.log(array)

// //delete
// delete array[4]
// console.log(array)
// console.log(array[4])

//splice
//1st parameter - starting index
//2nd parameter - no. of elements to be deleted from starting index
//3rd(or more) parameter - value inserted from starting index

//deletes 2 elements starting at index 2
console.log(array.splice(3,2))
console.log(array)

//replace - deletes element at index 1 and inserts "p"
console.log(array.splice(1,1,"p"))
console.log(array)

//delete elements at position 1 and 2 and insert 'x','y'
console.log(array.splice(1,2,"x",'y'))
console.log(array)

//adding new element without delete any element
console.log(array.splice(1,0,"b"))
console.log(array)

//slice(starting index, ending index)
//ending index not included.
console.log(array.slice(1,3))
console.log(array.slice(1))
console.log(array.slice(-1))

//reverse
console.log(array.reverse())

//join - converts array to string
let str = array.join()
console.log(str)

//split - converts string to array
let str3 = "e,f,g,h"
let arr4 = str3.split(",")
console.log(arr4)

//concat and spred operator
let firstArr = [1,2,3]
let secondArr = [4,5,6]
let joinArr = [firstArr,secondArr]
console.log(joinArr)

let concatArray = firstArr.concat(secondArr)
console.log(concatArray)

let joined = [...firstArr,...secondArr]
console.log(joined)

































