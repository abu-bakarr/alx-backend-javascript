function getResponseFromAPI() {
    return new Promise((resolve, reject) => {
        resolve('Success!');
        reject('fail')
    })
}


export default getResponseFromAPI;