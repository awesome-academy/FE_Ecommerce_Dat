import { storage } from './firebase';
export function uploadImage(image) {
  var storageRef = storage.ref('images/' + image.name);
  var task = storageRef.put(image);
  return new Promise((resolve, reject) => {
    task.on('state_changed', function (snaphost) {

    }, function (error) {
      return reject(error);
    }, function () {
      task.snapshot.ref.getDownloadURL().then(function (downloadURL) {
        resolve(downloadURL);
      });
    }
    )
  })
}
