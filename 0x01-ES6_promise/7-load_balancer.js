export default function loadBalancer(chinaDownload, USDownload) {
  new Promise((resolve, _reject) => {
    resolve(chinaDownload);
    resolve(USDownload);
  })
    .then((success) => {
      console.log(success);
    })
    .catch((error) => {
      console.log(error);
    });
}
