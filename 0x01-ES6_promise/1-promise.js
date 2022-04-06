function getFullResponseFromAPI(success) {
    return new Promise(async(resolve, reject) => {

            if (success === true) {
                return resolve({ status: 200, body: 'Success' });
            }
            if (success === false) {
                return reject('The fake API is not working currently')
            }

        })
        .then((success) => {

            console.log("success", success)
        })
        .catch((error) => {
            console.log(error);
        })
}

export default getFullResponseFromAPI;