// json stuff=   "content_security_policy":"script-src 'self' https://cdn.firebase.com https://apis.google.com https://www.gstatic.com; object-src 'self'"

//og background in manifest
/*"background": {
  "scripts": ["background.js"]

},
*/

/*MV 3 version
"background":{
  //"service_worker": "form.js"
},
*/

//try{
//service workers
//self.importScripts('firebase-app.js', 'firebase-auth.js');

//   "content_security_policy":"script-src 'self' https://cdn.firebase.com https://apis.google.com https://www.gstatic.com; object-src 'self'"  

//import firebase from 'firebase';
const firebaseConfig = {
    apiKey: "",
    authDomain: "extension-62778.firebaseapp.com",
    databaseURL: "https://extension-62778-default-rtdb.firebaseio.com",
    projectId: "extension-62778",
    storageBucket: "extension-62778.appspot.com",
    messagingSenderId: "",
    appId: ""
  };
// Initialize Firebase

firebase.initializeApp(firebaseConfig);
 
//const auth = await firebase.auth();
const auth = firebase.auth();


  //signup function
  function signUp(){
    var email = document.getElementById("email");
    var password = document.getElementById("password");

    const promise = auth.createUserWithEmailAndPassword(email.value,password.value);
    //
    promise.catch(e=>alert(e.message));
    alert("SignUp Successfully");


  }


  //signIN function
  function  signIn(){
    var email = document.getElementById("email");
    var password  = document.getElementById("password");
    const promise = auth.signInWithEmailAndPassword(email.value,password.value);
    promise.catch(e=>alert(e.message));
    
  }


  //signOut

  function signOut(){
    auth.signOut();
    alert("SignOut Successfully from System");
  }

  //active user to homepage
  firebase.auth().onAuthStateChanged((user)=>{
    if(user){
      var email = user.email;
      alert("Active user "+email);

    }else{
      alert("No Active user Found")
    }
  })

/*
}catch(e){
  //error
  console.log(e);
}
*/
