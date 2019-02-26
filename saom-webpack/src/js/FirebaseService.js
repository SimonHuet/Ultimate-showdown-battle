import * as firebase from 'firebase';
class FirebaseService {
  constructor() {
    console.log('firebase',firebase);
    // Initialize Firebase
    var config = {
      apiKey: "AIzaSyCJXZNjVfF-rFROU-Bam7wSfwCzOTfeC6A",
      authDomain: "ultimate-showdown-battle.firebaseapp.com",
      databaseURL: "https://ultimate-showdown-battle.firebaseio.com",
      projectId: "ultimate-showdown-battle",
      storageBucket: "ultimate-showdown-battle.appspot.com",
      messagingSenderId: "657628037191"
    };
    firebase.initializeApp(config);
    this.db = firebase.firestore();
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
            // // doc.data() is never undefined for query doc snapshots
            // console.log(doc.id, " => ", doc.data());
        });
        resolve(out);
      });
    })
  }
}

export default FirebaseService;
