let instructors = [
    { id: 1, name: "John Smith", fullTime: true },
    { id: 2, name: "Jane Doe", fullTime: false }
];

// Function to display instructor options
function displayInstructors() {
    let selectInstructor = document.getElementById('instructor');
    instructors.forEach(instructor => {
        let option = document.createElement('option');
        option.value = instructor.id;
        option.textContent = instructor.name;
        selectInstructor.appendChild(option);
    });
}

// Function to display instructor details
function displayInstructorDetails(instructorId) {
    let selectedInstructor = instructors.find(instructor => instructor.id == instructorId);
    let instructorDetailsDiv = document.getElementById('instructorDetails');
    if (selectedInstructor) {
        let instructorDetails = `
            <p><strong>Name:</strong> ${selectedInstructor.name}</p>
            <p><strong>Type:</strong> ${selectedInstructor.fullTime ? 'Full-time' : 'Part-time'}</p>
        `;
        instructorDetailsDiv.innerHTML = instructorDetails;
    } else {
        instructorDetailsDiv.innerHTML = "<p>No instructor details available.</p>";
    }
}

// Event listener to trigger displayInstructors function
document.addEventListener('DOMContentLoaded', displayInstructors);

// Event listener for form submission
document.getElementById('lessonForm').addEventListener('submit', function(event) {
    event.preventDefault();
    let studentName = document.getElementById('studentName').value;
    let lessonType = document.getElementById('lessonType').value;
    let instructorId = document.getElementById('instructor').value;
    // Further processing or submission logic can be added here
    console.log("Lesson booked:", studentName, lessonType, "with instructor ID:", instructorId);
    // Display instructor details after booking
    displayInstructorDetails(instructorId);
document.getElementById('registrationForm').addEventListener('submit', function(event) {
    event.preventDefault();

    // Get form values
    var fullName = document.getElementById('fullName').value;
    var email = document.getElementById('email').value;
    var password = document.getElementById('password').value;
    var confirmPassword = document.getElementById('confirmPassword').value;

    // Your registration logic goes here
    // For demo purposes, assume registration is successful
    var registrationMessage = document.getElementById('registrationMessage');
    registrationMessage.textContent = "Registration successful! Welcome, " + fullName + ".";
    registrationMessage.classList.remove('error');
    registrationMessage.classList.add('success');
});

});