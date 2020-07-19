function submitForm(){
    const form = document.forms['contactForm']
    
    var name     = form["name"].value
    var company  = form["company"].value
    var email    = form["email"].value
    var phone    = form["phone"].value
    var message  = form["message"].value

    console.log(name)

    saveMessage(name, company, email, phone, message)
    
    return false;
}

function saveMessage(name, company, email, phone, message){
    // DatabaseReference
    var newDatabaseReference = databaseReference.push();

    newDatabaseReference.set(
	{
	    name: name,
	    company: company,
	    email: email,
	    phone: phone,
	    message: message
	}
    )
}


// 
var firebaseConfig = {
    apiKey: "AIzaSyC17foFQT1KuF7HvNAvuvJx4ZLfaijo_FY",
    authDomain: "curriculo-378e3.firebaseapp.com",
    databaseURL: "https://curriculo-378e3.firebaseio.com",
    projectId: "curriculo-378e3",
    storageBucket: "curriculo-378e3.appspot.com",
    messagingSenderId: "500520186649",
    appId: "1:500520186649:web:718501c78d7dd8a60f4b88"
  };
  // Initialize Firebase
  firebase.initializeApp(firebaseConfig);

var databaseReference = firebase.database().ref("TT905_2020")
