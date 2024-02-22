//set Object - Collection of values 
//           - Values are unique
let arr = [1,2,3,3,3,4,5,5,6,7,7,7,8,9]
let mySet1 = new Set(arr)
console.log(arr)
console.log(mySet1)

let mySet2 = new Set()
mySet2.add(3)
mySet2.add("prabhu")
mySet2.add({'Joji':1})
mySet2.add(3)
console.log(mySet2)

//here am add same object it was accepting reson is object is referance type
//premitive(number) type are always unique 
let obj = {'Joji':1}
mySet2.add(obj)
console.log(mySet2)
console.log(mySet2.size) 
console.log(mySet2.has(3))
console.log(mySet2.has(4))
console.log(mySet2.delete(3))
console.log(mySet2.delete(4))
console.log(mySet2)

let arr1 = Array.from(mySet2)
console.log(arr1)

//Map
//Map objects are collections of key-value pairs.
//A key in the Map may only occure once
//key or value can be object

let map1 = new Map()
map1.set('a',1)
map1.set('b',2)

// here am again set a value it will replace the old value of a 
// it will accept uniqe key only
map1.set('a',3)
console.log(map1)
console.log(map1.size)
console.log(map1.has('a'))
console.log(map1.has('c'))
console.log(map1.delete('a'))
console.log(map1)

map1.set('c',3)
map1.set('d',4)
console.log(map1)

for(let i of map1){
    console.log(i)
}

for(let [k,v] of map1){
    console.log(k)
    console.log(v)
}

for(let k of map1.keys()){
    console.log(k)
}

for(let v of map1.values()){
    console.log(v)
}

map1.forEach((v,k)=>{
    console.log('key',k,'value',v)
})

//2d array to map
let kvArray = [['a',1],['b',2]]
let map2 = new Map(kvArray)
console.log(map2)
console.log(...map2)
