const axios = require('axios');

const URL = 'https://jsonplaceholder.typicode.com';

const fetchData = async (id) => {
  const results = await axios.get(URL + '/todos/' + id);

  console.log(
    '%c-> developmentConsole: results.data ===> ',
    'color:#77dcfd',
    results.data
  );

  return results.data;
};

module.exports = fetchData;
