// Assign the Motor Vehicle Collisions - Crashes to a variable
const url = 'https://data.cityofnewyork.us/resource/h9gi-nx95.json'

// Do a fetch request to get collison data from api
// Assign the result to a variable
// Save the results in the local storage as string
let collisionResp= async function () { 
  await axios.get(url).then(res => { 
    // console.log(res.data);
    const accidents = res.data;
    console.log(accidents)

    localStorage.setItem('collisions', JSON.stringify(accidents));
  }).catch(err => { 
    console.log(err);
  })
}

// Call the async function to fetch the data and save it in the local storage

// collisionResp();