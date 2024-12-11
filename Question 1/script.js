// *************CHAPTER 49 TO 52 ******************
// ----------EVENTS-------------

// 1. Create a signup form and display form data in your web
// page on submission.

// Answer:


document.getElementById("signupForm").addEventListener("submit", function(event) {
    event.preventDefault();  
    
    var name = document.getElementById("name").value;
    var email = document.getElementById("email").value;
    var password = document.getElementById("password").value;

    var formDataDiv = document.getElementById("formData");
    formDataDiv.innerHTML = `
        <p><strong>Name:</strong> ${name}</p>
        <p><strong>Email:</strong> ${email}</p>
        <p><strong>Password:</strong> ${password}</p>
    `;
    
    document.getElementById("signupForm").reset();
});


//---------------------------------------------------------------------------------------------------------------
