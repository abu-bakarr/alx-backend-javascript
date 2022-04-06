export default function loadBalancer(chinaDownload, USDownload) {
  new Promise((resolve, _reject) => {
    resolve(chinaDownload);
    resolve(USDownload);
    _reject();
  })
    .then(() => {
    })
    .catch(() => {
    });
}
