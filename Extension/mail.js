const firebaseConfig = {
  /*apiKey: "AIzaSyDh_fjHv3neHqQtlKhypdDIJcUH06e57Xs",
  authDomain: "clickfraud-9afea.firebaseapp.com",
  databaseURL: "https://clickfraud-9afea-default-rtdb.firebaseio.com",
  projectId: "clickfraud-9afea",
  storageBucket: "clickfraud-9afea.appspot.com",
  messagingSenderId: "801732071996",
  appId: "1:801732071996:web:5dbe4a5a97ed9448e3e939"*/


  apiKey: "AIzaSyBUtVDGejpbT2vyKkGXd0yMojDGfGxPfwc",
  authDomain: "extension-62778.firebaseapp.com",
  databaseURL: "https://extension-62778-default-rtdb.firebaseio.com",
  projectId: "extension-62778",
  storageBucket: "extension-62778.appspot.com",
  messagingSenderId: "401405281830",
  appId: "1:401405281830:web:55835ff789c9d3970648e7"
};

// initialize firebase
firebase.initializeApp(firebaseConfig);

// reference your database
var ExtensionDB = firebase.database().ref("Extension");

document.getElementById("Extension").addEventListener("submit", submitForm);

function submitForm(e) {
  e.preventDefault();

  var name = getElementVal("name");
  var emailid = getElementVal("emailid");
  var msgContent = getElementVal("msgContent");

  saveMessages(name, emailid, msgContent);

  //   enable alert
  document.querySelector(".alert").style.display = "block";

  //   remove the alert
  setTimeout(() => {
   document.querySelector(".alert").style.display = "none";
   window.close();
  }, 2000);

  //   reset the form
  document.getElementById("Extension").reset();
  //window.close(2000);
 
}


const saveMessages = (name, emailid, msgContent) => {
  var newExtension = ExtensionDB.push();

  newExtension.set({
    name: name,
    emailid: emailid,
    msgContent: msgContent,
  });
};

const getElementVal = (id) => {
  return document.getElementById(id).value;
};
