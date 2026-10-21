// Declare a global array to keep track of the tasks 10.12.2026
let newEmails = []

// Add eventListener to submit email button just for the sake of practice 
const submitButton = document.getElementById("submit-btn")

submitButton.addEventListener("click", function(event){
    event.preventDefault();

    // Get the string from the user input 
    const inputEmail = document.getElementById("reach_out").value;

    if (inputEmail.toLowerCase() !== "none" && inputEmail !== ""){
        newEmails.push(inputEmail);

        let emailText = "";

        for (let i = 0; i < newEmails.length; i++){
            emailText += newEmails[i] + "<br>";
        };

        document.getElementById("display-emailID").innerHTML = emailText; 

        // Optional: Clear out the input field so it's fresh for the next entry
        document.getElementById("reach_out").value = "";
    }

    else {
        window.alert("Please input an email address")
    }

});

