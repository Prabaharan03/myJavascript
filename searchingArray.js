const arr1 = [1,2,3,4,5,6,7]

//if given value includes in array it will return boolean value true or false 
console.log(arr1.includes(3))
console.log(arr1.includes(8))

//index of return index of particular value index
console.log(arr1.indexOf(5))
//if given value not in array it will return -1
console.log(arr1.indexOf(8))

const index = arr1.indexOf(2)
if(index > -1){
    alert("Number found and index is" + index)
}

const arr2 = [
{name:"one",value:1},
{name:"two",value:2},
{name:"three",value:3},
{name:"four",value:4},
{name:"five",value:5}
]

//Finding all values in array
arr2.find((element,index)=>{
   console.log(element) 
})

//Finding index of all elaments
arr2.find((element,index)=>{
   console.log(index)
})

//This one return first element value in array
const foundValue = arr2.find(()=>{
    return true
})
console.log(foundValue)

//This one return undefined value
const foundValue2 = arr2.find(()=>{
    return false
})
console.log(foundValue2)

//This method find particular value in array
const foundValue3 = arr2.find((element,index)=>{
    if(element.name === "two"){
        return true
    }
})
console.log(foundValue3)

//This method find particular index of array
const foundValue4 = arr2.findIndex((element,index)=>{
    if(element.name === "three"){
        return true
    }
})
console.log(foundValue4)
