import signUpUser from './4-user-promise';
import uploadPhoto from './5-photo-reject';

export default function handleProfileSignup(firstName, lastName, fileName) {
  const newSignUpUser = Promise.resolve(signUpUser(firstName, lastName));
  const newUploadPhoto = Promise.reject(uploadPhoto(fileName));

  const p = Promise.all([newSignUpUser, newUploadPhoto])
    .then((data) => {
      console.log('data', data);
    })
    .catch(() => {});
  console.log('promise', p);
}
