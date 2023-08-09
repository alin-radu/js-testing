const axios = require('axios');

const URL = 'https://jsonplaceholder.typicode.com';

const fetchData = async (id) => {
  const results = await axios.get(URL + '/todos/' + id);

  return results.data;
};

module.exports = fetchData;
