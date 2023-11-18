
getCustomer(1, (customer) => {
  console.log('Customer: ', customer);
  if (customer.isGold) {
    getTopMovies((movies) => {
      console.log('Top movies: ', movies);
      sendEmail(customer.email, movies, () => {
        console.log('Email sent...')
      });
    });
  }
});

function getCustomer(id, callback) {
  setTimeout(() => {
    callback({ 
      id: 1, 
      name: 'Mosh Hamedani', 
      isGold: f, 
      email: 'email' 
    });
  }, 4000);  
}

function getTopMovies(callback) {
  setTimeout(() => {
    callback(['movie1', 'movie2']);
  }, 4000);
}

function sendEmail(email, movies, callback) {
  setTimeout(() => {
    callback();
  }, 4000);
}

// Converting above to async and await 


function getCustomer(id) {
  return new Promise((resolve,reject)=>{
    setTimeout(() => {
      resolve({ 
        id: 1, 
        name: 'Mosh Hamedani', 
        isGold: true, 
        email: 'email' 
      });
    }, 4000);
  }) 
}

function getTopMovies() {
  return new Promise((resolve,reject)=>{
  setTimeout(() => {
    resolve(['movie1', 'movie2']);
  }, 4000);
  })
}

function sendEmail(email, movies) {
  return new Promise((resolve,reject)=>{
  setTimeout(() => {
    resolve();
  }, 4000);
})
}


// Async and await
async function displayDetails()
{
  const user = await getCustomer(1);
  console.log('Customer: ', user);
  if(user.isGold)
  {
    const movies = await getTopMovies();
    console.log('Top movies: ', movies);
    await sendEmail(user.email, movies);
    console.log('Email sent...')
  }
}

displayDetails();