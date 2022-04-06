function handleResponseFromAPI(data) {
  return new Promise((resolve, reject) => {
    data && resolve({ status: 200, body: 'Success' });
    reject(new Error('The fake API is not working currently'));
  })
    .then((success) => {
      console.log('success', success);
    })
    .catch((_error) => {
      console.log('error', _error);
    })
    .finally(() => {
      console.log('Got a response from the API');
    });
}

export default handleResponseFromAPI;
