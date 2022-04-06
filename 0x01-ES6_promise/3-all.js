import { createUser, uploadPhoto } from './utils';

function handleProfileSignup() {
  const resolvedPromisesArray = [uploadPhoto(), createUser()];
  Promise.all(resolvedPromisesArray)
    .then((success) => {
      console.log(success[0].body, success[1].firstName, success[1].lastName);
    });
}

export default handleProfileSignup;
