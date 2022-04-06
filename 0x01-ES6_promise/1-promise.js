function getFullResponseFromAPI(success) {
    return new Promise(async(resolve, reject) => {
        try {
            if (success === true) {
                return resolve({ status: 200, body: 'Success' });
            }
            if (success === false) {
                return reject('The fake API is not working currently')
            }

        } catch {
            console.error(error)
        }
    });
}
export default getFullResponseFromAPI;