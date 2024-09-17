var form = document.getElementById("Rasume-form");
var resumeDisplayElement = document.getElementById("Rasume-display");
form.addEventListener("submit", function (event) {
    event.preventDefault();
    var name = document.getElementById("name").value;
    var email = document.getElementById("email").value;
    var phone = document.getElementById("phone").value;
    var Education = document.getElementById("Education").value;
    var Experince = document.getElementById("Experince").value;
    var skills = document.getElementById("skills").value;
    var resumeHTML = "\n            <h2><b>Resume</h2>\n            <h3>Personal Information</h3>\n            <p><b>Name:</b>".concat(name, "</p>\n            <p><b>email:</b>").concat(email, "</p>\n            <p><b>phone:</b>").concat(phone, "</p>\n\n            <h3>Education</h3>\n            <p>").concat(Education, "</p>\n\n            <h3>Experince</h3>\n            <p>").concat(Experince, "</p>\n\n            <h3>Skills</h3>\n            <p>").concat(skills, "</p>\n        ");
    if (resumeDisplayElement) {
        resumeDisplayElement.innerHTML = resumeHTML;
    }
    else {
        console.error("The resume display element is missing.");
    }
});
