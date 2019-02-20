export default class Firebase{
    constructor(){
        var config = {
            apiKey: "AIzaSyCJXZNjVfF-rFROU-Bam7wSfwCzOTfeC6A",
            authDomain: "ultimate-showdown-battle.firebaseapp.com",
            databaseURL: "https://ultimate-showdown-battle.firebaseio.com",
            projectId: "ultimate-showdown-battle",
            storageBucket: "ultimate-showdown-battle.appspot.com",
            messagingSenderId: "657628037191"
        };

        firebase.initializeApp(config);
        this.db = firebase.firestore()
    }

    addUser(data) {

        return new Promise((resolve, reject)=>{
            this.db.collection("users").add(data).then(newData =>{

                data.id=newData.id
                resolve(data)
            })
        })
    }

}