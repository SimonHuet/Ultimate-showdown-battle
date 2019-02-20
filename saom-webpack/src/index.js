import FirebaseService from "./js/FirebaseService.js"

console.log(FirebaseService);
let firebaseService = new FirebaseService()
console.log(firebaseService);
firebaseService.addUser({
  name: 'player1'
}).then(newUser=>{
  console.log('user inserted',newUser);
})
firebaseService.getUsers().then(users=>{
  console.log('users', users);
});
