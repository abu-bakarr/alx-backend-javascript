function getFullResponseFromAPI(success) {
    return new Promise(async(resolve, reject) => {
            success === true && await resolve({ status: 200, body: 'Success' });
            success === false && await reject('The fake API is not working currently')
        })
        .then((success) => {
            console.log(success);
        })
        .catch((error) => {
            throw new Error(error);
        })
}

export default getFullResponseFromAPI;