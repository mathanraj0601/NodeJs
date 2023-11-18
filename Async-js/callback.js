// Async function. In node by default every function is async as it is single threaded.
function print()
{
    console.log("Hello")
    setTimeout(()=>{
        console.log("Welcome !!")
    },2000)
}
print(); // calling async function.


// Callback function 
// getGender("mathan",(user)=>{
//     getAge(user.name,(user)=>{
//         getSkills(user.name,(skills)=>{
//             console.log(skills)   // Callback Hello 
//         })
//     })
// })

function getGender(name,callback)
{
    console.log(`Getting gender for ${name}`);
    setTimeout(()=>{
        callback({ name:"mathan", gender:"male"})
    },2000)
}


function getAge(name,callback)
{
    console.log(`Getting Age for ${name}`);
    setTimeout(()=>{
        callback({ name:"mathan", age:10})
    },2000)
}

function getSkills(name,callback)
{
    console.log(`Getting skills for ${name}`);
    setTimeout(()=>{
        callback(["HTML","CSS","JS"]);
    },2000)
}
// Above result in callback hell.  We replace named function in place of anonyms function

//getGender("mathan",getAgeForUser)

function getAgeForUser(user){
    getAge(user.name,getSkillsForUser)
}

function getSkillsForUser(user){
    getSkills(user.name,displaySkills) 
}

function displaySkills(skills){
    console.log(skills);
}


