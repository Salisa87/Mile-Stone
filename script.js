var _a;
// Listing Element 
(_a = document.getElementById("resumeform")) === null || _a === void 0 ? void 0 : _a.addEventListener("submit", function (event) {
    event.preventDefault();
    //type assertion
    var nameElement = document.getElementById("name");
    var emailElement = document.getElementById("email");
    var phoneElement = document.getElementById("phone");
    var EducationElement = document.getElementById("Education");
    var exprienceElement = document.getElementById("Exprience");
    var skillsElement = document.getElementById("skills");
    if (nameElement && emailElement && phoneElement && EducationElement && exprienceElement && skillsElement) {
        var name_1 = nameElement.value;
        var email = emailElement.value;
        var phone = phoneElement.value;
        var Education = EducationElement.value;
        var Exprience = exprienceElement.value;
        var skills = skillsElement.value;
    }
    // Output
    var resumeoutput = "\n   <h2>Resume</h2>\n   <p><strong>Name:</strong> ".concat(nameElement, " </p>\n   <p><strong>Email:</strong> ").concat(emailElement, " </p>\n   <p><strong>phone Number:</strong> ").concat(phoneElement, " </p>\n\n  \n    <h3> Education </h3> \n   <p> ").concat(EducationElement, " </p>\n    <h3> Exprinece </h3> \n   <p> ").concat(exprienceElement, " </p>\n   <h3> skills </h3> \n   <p> ").concat(skillsElement, " </p>\n   \n   ");
    var resumeoutputElement = document.getElementById('resumeoutput');
    if (resumeoutputElement) {
        resumeoutputElement.innerHTML = resumeoutput; // Output the generated resume  
    }
    else {
        console.error('The resume output element is missing'); // Corrected error message  
    }
});
