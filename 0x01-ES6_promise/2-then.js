function handleResponseFromAPI(promise) {
    return new Promise(async(resolve, reject) => {
            promise && await resolve({ status: 200, body: 'Success' });
            await reject('The fake API is not working currently')
        })
        .then((success) => {
            console.log(success);
        })
        .catch((error) => {
            console.log("error", {});
        })
        .finally(() => {
            console.log("Got a response from the API");
        })
}

export default handleResponseFromAPI;