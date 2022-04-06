import { createUser, uploadPhoto } from './utils.js'


function handleProfileSignup() {
    var resolvedPromisesArray = [Promise.resolve(uploadPhoto()), Promise.resolve(createUser())];
    Promise.all(resolvedPromisesArray)
        .then((success) => {
            console.log(success[0].body, success[1].firstName, success[1].lastName);
        })
}

export default handleProfileSignup;