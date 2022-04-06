export default function loadBalancer(chinaDownload, USDownload) {
    new Promise(async(resolve, reject) => {
            await resolve(chinaDownload);
            await resolve(USDownload);
        })
        .then((success) => {
            console.log(success);
        })
        .catch((error) => {
            console.log(error);
        })
}