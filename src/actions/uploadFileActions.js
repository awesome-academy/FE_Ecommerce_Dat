import { storage } from '../firebase';

export const uploadImage = (image, callback) => dispatch =>
  storage.uploadImage(image).then(res => {
    callback(res);
  });
