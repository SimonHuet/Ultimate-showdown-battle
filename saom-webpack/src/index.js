import FirebaseService from "./js/FirebaseService.js"
import Navigo from 'navigo'
import Users from './js/Users'
 /*
console.log(FirebaseService);
let firebaseService = new FirebaseService()
console.log('ui',firebaseService);
firebaseService.addUser({
  name: 'player1'
}).then(newUser=>{
  console.log('user inserted',newUser);
})
firebaseService.getUsers().then(users=>{
  console.log('users', users);
});
*/

let root = null;
let useHash = true; // Defaults to: false
let hash = '#'; // Defaults to: '#'

let router = new Navigo(root, useHash, hash);
router.on('/', (params, query) => {
 let user = document.createElement(`user-component`)
 document.getElementById('blah').appendChild(user)
}).resolve();