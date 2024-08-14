const axios = require('axios');

axios.get('http://localhost:3000', {
  responseType: 'stream',
})
.then(response => {
  response.data.on('data', chunk => {
    console.log('Received chunk:', chunk.toString());
  });

  response.data.on('end', () => {
    console.log('Response ended.');
  });
})
.catch(error => {
  console.error('Error:', error);
});
