export default function getFullResponseFromAPI(success) {
  return new Promise((resolve, reject) => {
    try {
      if (success === true) {
        return resolve({ status: 200, body: 'Success' });
      }
   	  return reject('The fake API is not working currently');
    } catch (error) {
      // eslint-disable-next-line no-console
      console.error(error);
    }
  });
}
