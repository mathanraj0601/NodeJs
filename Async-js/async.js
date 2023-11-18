// Async and await is syntax sugar over promises
// We can await a promise

async function userName() {
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      console.log("mathan");
      resolve("mathan");
    }, 2000);
  });
}

async function displayName() {
  const name = await userName();
  console.log(name);
}

displayName();

function getGender(name) {
  return new Promise((resolve, reject) => {
    console.log(`Getting gender for ${name}`);
    setTimeout(() => {
      resolve({ name: "mathan", gender: "male" });
    }, 2000);
  });
}

function getAge(name) {
  return new Promise((resolve, reject) => {
    console.log(`Getting Age for ${name}`);
    setTimeout(() => {
      resolve({ name: "mathan", age: 10 });
    }, 2000);
  });
}

function getSkills(name) {
  return new Promise((resolve, reject) => {
    console.log(`Getting skills for ${name}`);
    setTimeout(() => {
      resolve(["HTML", "CSS", "JS"]);
    }, 2000);
  });
}

async function displaySkills() {
  const user = await getGender("mathan");
  const userAge = await getAge(user.name);
  const userSkills = await getSkills(userAge.name);
  console.log(userSkills);
}

displaySkills();