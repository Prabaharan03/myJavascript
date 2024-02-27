//Promise
//The Promise object represents the eventual completion or failure of an asynchronous operation

//example 1
const ticketBooking =()=> {
    return new Promise((resolve,reject)=>{
    let bookingSuccess = true 
    if(bookingSuccess)
    resolve(1000)
    else
    reject()
})
}

ticketBooking()
.then((amount)=> console.log(`Ticket booked success fully, Rs.${amount} debited on your account`))
.catch(()=> console.log("Failed to book ticket"))


//example 2
const tossCoin =()=>{
    return new Promise((resolve,reject)=>{
        //0-head(success)  1-tail(failure)
        const rand = Math.floor(Math.random()*2)
        if(rand==0)
        resolve()
        else
        reject()
    })
}
tossCoin()
.then(()=>console.log("Head"))
.catch(()=>console.log("Tail"))

//example 3
const reachA = new Promise((resolve,reject)=>{
    const reached = true
    if(reached)
    setTimeout(resolve,3000,"A reached successfully home")
    else
    reject("A failed to reach home")
})
const reachB = new Promise((resolve,reject)=>{
    const reached = false
    if(reached)
    setTimeout(resolve,3000,"B reached successfully home")
    else
    reject("B failed to reach home")
})

//if anyone file it will return failed value
Promise.all([reachA,reachB])
.then((msg)=>(console.log(msg)))
.catch((msg)=>(console.log(msg)))

// allSettled return full status of prommise
Promise.allSettled([reachA,reachB])
.then((msg)=>(console.log(msg)))
.catch((msg)=>(console.log(msg)))

//if anyone can success it will return that value
Promise.any([reachA,reachB])
.then((msg)=>(console.log(msg)))
.catch((msg)=>(console.log(msg)))

//first which one complete(success or failure) it will return that value
Promise.race([reachA,reachB])
.then((msg)=>(console.log(msg)))
.catch((msg)=>(console.log(msg)))
