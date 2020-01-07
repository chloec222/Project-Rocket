


  // Your web app's Firebase configuration
var firebaseConfig = {
    apiKey: "AIzaSyAr6V8c4x00JMu4pIuiVa9l-wL7-VCapmE",
    authDomain: "projectrocket-262520.firebaseapp.com",
    databaseURL: "https://projectrocket-262520.firebaseio.com",
    projectId: "projectrocket-262520",
    storageBucket: "projectrocket-262520.appspot.com",
    messagingSenderId: "358447934378",
    appId: "1:358447934378:web:6ed00fdb0a7739c35599d3",
    measurementId: "G-JXEK2W0WTC"
};
  // Initialize Firebase
firebase.initializeApp(firebaseConfig);
var database = firebase.database();




$('#new-user').on("click", function(event) {
      // prevent page from refreshing when form tries to submit itself
    event.preventDefault();

      // Capture user inputs and store them into variables
    var name = $("#name-input").val().trim();
    var email = $("#email-input").val().trim();
    var password = $("#password-input").val().trim();
    var password2 = $("#password2-input").val().trim();

      // Console log each of the user inputs to confirm we are receiving them
    console.log(name);
    console.log(email);
    console.log(password);
    console.log(password2);
    
    database.ref().push({
        name:name,
        email:email,
        password:password,
        password2:password2
    })

      // Replaces the content in the "recent-member" div with the new info
    $("#name-display").text(name);
    $("#email-display").text(email);
    $("#password-display").text(password);
    $("#password2-display").text(password2);

      // Clear localStorage
    localStorage.clear();

      // Store all content into localStorage
    localStorage.setItem("name", name);
    localStorage.setItem("email", email);
    localStorage.setItem("password", password);
    localStorage.setItem("password2", password2);
    });

    // // By default display the content from localStorage
    // $("#name-display").text(localStorage.getItem("name"));
    // $("#email-display").text(localStorage.getItem("email"));
    // $("#password-display").text(localStorage.getItem("password"));
    // $("#password2-display").text(localStorage.getItem("password2"));




