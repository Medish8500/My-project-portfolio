// Download CV functionality
<button oneclick="downloadCV">Download My CV</button>
function downloadCV() {
  const link = document.createElement('a');
  link.href = '../files/cv.pdf'; // Adjust the path to your CV file
  link.target = '_blank'
  link.download = 'html/project cv.pdf';
  document.body.appendChild(link);
  link.click();
  document.body.removeChild(link);
}

// Simple form validation
document.getElementById("contactForm").addEventListener("submit", function (e) {
  e.preventDefault();

  const name = document.getElementById("name").value.trim();
  const email = document.getElementById("email").value.trim();
  const message = document.getElementById("message").value.trim();

  if (!name || !email || !message) {
    alert("Please fill in all fields.");
    return;
  }

  alert("Message sent! Thank you for reaching out.");
  this.reset();
});