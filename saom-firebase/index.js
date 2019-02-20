import MyClass2 from "./MyClass2.js"
import FirebaseService from "./FirebaseService.js"

let myClass2 = new MyClass2('hello world');
myClass2.speek('hello world');

let firebaseService = new FirebaseService(firebase)
firebaseService.addData({name:'player1'})
