// Define a function to handle form submission
function submitForm() {
    // Get the form data
    const name = document.getElementById("name").value;
    const email = document.getElementById("email").value;
    const password = document.getElementById("password").value;

    // Create a JavaScript object to represent the user data
    const userData = {
        name: name,
        email: email,
        password: password
    };

    // Read existing data from the JSON file (if any)
    let existingData = [];
    if (localStorage.getItem("userData")) {
        existingData = JSON.parse(localStorage.getItem("userData"));
    }

    // Add the new user data to the existing data
    existingData.push(userData);

    // Store the updated data back in local storage as JSON
    localStorage.setItem("userData", JSON.stringify(existingData));

    // Reset the form
    document.getElementById("registrationForm").reset();

    alert("User registration successful!");
}
function check()
{
    const email = document.getElementById("email").value;
    const password = document.getElementById("password").value;
    // Retrieve the user data from local storage
const userData = JSON.parse(localStorage.getItem("userData"));

if (userData && userData.length > 0) {
   
    // Search for the user with the matching email
    const user = userData.find(user => user.email === email);

    if (user) {
         if(password==user.password)
         {
            alert("Login Successful")
         }
         else{
            alert("Invalid Credentials")
         }
        
    } 
    else {
        console.log("User with email " + targetEmail + " not found.");
    }
} else {
    alert("No user data found");
}

}