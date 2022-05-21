const url = "https://api.wheretheiss.at/v1/satellites/25544";
//declaring the endpoint of the api call

async function getData(){
    const response = await fetch(url);
    const data = await response.json();

    console.log(data);      //returns the entire json object

    console.log(data.longitude);     //can access specific values
    console.log(data.latitude);
}

getData();
