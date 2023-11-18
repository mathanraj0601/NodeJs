// Promise
const p = new Promise((resolve,reject)=>{
    resolve("mathan");
});

p
 .then(name=>console.log(name))
 .catch(err=> console.log(err))

// Promise

 function getGender(name)
{
    return new Promise((resolve,reject)=>{
        console.log(`Getting gender for ${name}`);
        setTimeout(()=>{
            resolve({ name:"mathan", gender:"male"})
        },2000)
    }) 
}


function getAge(name)
{
    return new Promise((resolve,reject)=>{
        console.log(`Getting Age for ${name}`);
        setTimeout(()=>{
            resolve({ name:"mathan", age:10})
        },2000)
    })
}

function getSkills(name)
{
    return new Promise((resolve,reject)=>{
        console.log(`Getting skills for ${name}`);
        setTimeout(()=>{
            resolve(["HTML","CSS","JS"]);
        },2000)
    })
}

getGender("mathan")
 .then(user=> getAge(user.name))
 .then(user=> getSkills(user.name))
 .then(skills=> console.log(skills))
 .catch(err=> console.log(err,"Error occured"))

 // Paralled promise

 const p1 = new Promise((resolve,reject)=>{
    resolve(1);
 })

 
 const p2 = new Promise((resolve,reject)=>{
    resolve(2);
 })

// All promise must resolve
Promise.all([p1,p2])
    .then(result=>console.log(result))
    .catch(err=>console.log(err))


// First promise which fail or pass
Promise.race([p1,p2])
    .then(result=>console.log(result))
    .catch(err=>console.log(err))

