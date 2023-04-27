const APP_TOKEN = 'YEAf7HhwEpQfNrdeSPEwxXv58';

const DATASET_IDENTIFIER = 'uvpi-gqnh';



// const url = `https://data.cityofnewyork.us/resource/${DATASET_IDENTIFIER}.json?$limit=${LIMIT}&$$app_token=${APP_TOKEN}`;



const url = `https://data.cityofnewyork.us/resource/${DATASET_IDENTIFIER}.json?$$app_token=${APP_TOKEN}&$query=SELECT%20%60tree_id%60%2C%20%60spc_latin%60%2C%20%60spc_common%60%0AWHERE%0A%20%20(%60tree_id%60%20%3D%3D%20%60tree_id%60)%0A%20%20AND%20((%60spc_latin%60%20%3D%3D%20%60spc_latin%60)%20AND%20(%60spc_common%60%20%3D%3D%20%60spc_common%60))`;

console.log(`Fetching url - ${url}`);

fetch(url)
  .then((response) => response.json())
  .then((json) => {
      console.log(json);
  });
