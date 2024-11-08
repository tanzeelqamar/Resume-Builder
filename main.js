var form = document.getElementById('resume-form');
var generateResumeElement = document.getElementById('generate-resume');
form.addEventListener('submit', function (event) {
    event.preventDefault();
    var name = document.getElementById('name').value;
    var email = document.getElementById('email').value;
    var contact = document.getElementById('contact').value;
    var socialMediaAccounts = document.getElementById('socialMediaAccounts').value;
    var objective = document.getElementById('objective').value;
    var education = document.getElementById('education').value;
    var experience = document.getElementById('experience').value;
    var skills = document.getElementById('skills').value;
    var getResume = "\n    <h2><b>Resume</b></h2>\n    <h3>Personal Information</h3>\n     <p><strong> Name: </strong> ".concat(name, "</p>\n      <p><strong>Email </strong> ").concat(email, "</p>\n       <p><strong> Contact: </strong> ").concat(contact, "</p>\n        <p><strong>Social Media Accounts: </strong> ").concat(socialMediaAccounts, "</p>\n        <h3>Objective</h3>\n         <p>").concat(objective, "</p>\n         <h3>Education </h3>\n          <p>").concat(education, "</p>\n          <h3>Experience</h3>\n           <p>").concat(experience, "</p>\n            <h3>Skills</h3>\n            <p>").concat(skills, "</p>");
    if (generateResumeElement) {
        generateResumeElement.innerHTML = getResume;
    }
    else {
        console.error('The resume Element is missing');
    }
});
var jsPDF = document.jspdf.jsPDF;
function downloadResumeAsPDF() {
    var doc = new jsPDF();
    var resumeContent = document.getElementById('resume-form');
    doc.html(resumeContent, {
        callback: function (doc) {
            doc.save('resume.pdf');
        },
        margin: [10, 10, 10, 10],
        x: 10,
        y: 10
    });
}
