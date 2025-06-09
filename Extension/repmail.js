const firebaseConfig = {
  apiKey: "",
  authDomain: "be-project-20b1e.firebaseapp.com",
  databaseURL: "https://be-project-20b1e-default-rtdb.firebaseio.com",
  projectId: "be-project-20b1e",
  storageBucket: "be-project-20b1e.appspot.com",
  messagingSenderId: "",
  appId: "",
  measurementId: ""
};



// initialize firebase
firebase.initializeApp(firebaseConfig);

// reference your database
var reportSiteDB = firebase.database().ref("reportSite");

document.getElementById("ReportSite").addEventListener("submit", submitForm);

function submitForm(e) {
  e.preventDefault();

  var website = getElementVal("website");
  var emailid = getElementVal("emailid");
  var msgContent = getElementVal("msgContent");

  saveMessages(website, emailid, msgContent);

  //   enable alert
  document.querySelector(".alert").style.display = "block";

  //   remove the alert
  setTimeout(() => {
    document.querySelector(".alert").style.display = "none";
    window.close();
  }, 2000);

  //   reset the form
  document.getElementById("ReportSite").reset();
}

const saveMessages = (website, emailid, msgContent) => {
  var newreportSite = reportSiteDB.push();

  newreportSite.set({
    website: website,
    emailid: emailid,
    msgContent: msgContent,
  });
};

const getElementVal = (id) => {
  return document.getElementById(id).value;
};
