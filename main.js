// Retrieve the stringified json
let data = JSON.parse(localStorage.getItem('collisions'));
console.log(data)

// Assign an empty object to variable count
let count = {}

//Loop into the array of data
for (let i = 0; i < data.length; i++) { 
  
  // filter out borough that have no value
  // keep count of borough will accidents
  // borough isn't present in 'count' obj then start with 1
  if (data[i].borough !== undefined && count[data[i].borough]) {
    count[data[i].borough] += 1;
  } else if (data[i].borough !== undefined){
    count[data[i].borough] = 1;
  }
}

// console.log(count)

// convert the value in 'count' obj into an array
const boroughValues = Object.values(count);

// console.log(boroughValues)

// Get the Canvas tag with id 'collisionsGraph' and assign it to ctx variable
const ctx = document.getElementById('collisionsGraph');

/* 
  - The 'new Chart' creates a new graph with the following data points on the Canvas we added in the HTML file'
  - 'type' of chart: Pie, line, bar. ‘Type’ lives in the config object
  - 'labels' represents the x-axis (Array)
  - 'data' is the value for each label input. The type of value is array

  - In option, we hide the legend using the legend atr and setting it false
*/

const chart = new Chart(ctx, {
  type: 'bar',
    data: {
      labels: ['Bronx', 'Brooklyn', 'Manhattan', 'Queens', 'Staten Island'],
      datasets: [{
        label: '# of collisions (2021-22)',
        data: boroughValues,
        borderWidth: 1,
        backgroundColor: ['red', 'orange',  'yellow', 'green', '#0014a8']
      }]
    },
  options: {
    plugins: {
      legend: {
        display: true
      },
    },
      scales: {
        y: {
          beginAtZero: true
        }
    }
  }
  });