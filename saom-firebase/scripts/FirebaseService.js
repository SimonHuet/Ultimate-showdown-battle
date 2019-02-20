export default class Firebase {
  constructor(firebase) {
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
  }

  async addData(data) {
    let newData;
    try{
      newData = await this.db.collection("users").add(data);
      console.log("Document written with ID: ", newData.id);
    }catch{
      console.error("Error adding document: ", error);
    }
  }

}
