import * as firebase from 'firebase';
import postalController from '../Controller/PostalController'
class FirebaseService {
  constructor() {
    console.log('firebase',firebase);
    var config = {
      apiKey: "AIzaSyAuSmBgBzEYvWPG4npGxE-vmbeDTcn3eD8",
      authDomain: "saom-96430.firebaseapp.com",
      databaseURL: "https://saom-96430.firebaseio.com",
      projectId: "saom-96430",
      storageBucket: "saom-96430.appspot.com",
      messagingSenderId: "83621382337"
    };
    firebase.initializeApp(config);
    this.db = firebase.firestore();
    postalController.mainChannel.subscribe('players-load',data=>{
      this.getUsers().then(users=>{
        // console.log(users);
        postalController.mainChannel.publish('players-loaded',users);
      });
    });

  }

  addUser(data, callback) {
    return new Promise((resolve,reject)=>{
      this.db.collection("users").add(data).then(newData=>{
        // console.log("Document written with ID: ", newData.id,newData.get());
        data.id=newData.id;
        resolve(data);
      });
    })
  }

  getUsers() {
    return new Promise((resolve,reject)=>{
      let out=[];
      this.db.collection("users").get().then(querySnapshot=>{
        querySnapshot.forEach(function(doc) {
          let current= doc.data();
          current.id=doc.id;
          out.push(current);
        });
        resolve(out);
      });
    })
  }
}

export default new FirebaseService();
