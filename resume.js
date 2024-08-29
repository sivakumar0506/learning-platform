let timerId = null;
const totalDuration = 2 * 60 * 60 * 1000; // 2 hours in milliseconds
let endTime = null;

document.addEventListener('DOMContentLoaded', () => {
    // Check if the course is completed
    const completed = localStorage.getItem('completed');
    if (completed === 'true') {
        // Show the certificate image
        document.querySelector('.certificate').style.display = 'block';
        // Clear the completed flag in localStorage
        localStorage.removeItem('completed');
    }

    // Initialize form event listener
    document.getElementById('resume-form').addEventListener('change', function() {
        updateResume();
        startTimer();
    });
});

function updateResume() {
    // Get the input values
    const name = document.getElementById('name').value;
    const email = document.getElementById('email').value;
    const skills = document.getElementById('skills').value;
    const experience = document.getElementById('experience').value;
    const courseName = document.getElementById('course-name').value;
    const completionDate = document.getElementById('completion-date').value;
    const certificateInput = document.getElementById('certificate');

    // Get file details
    const file = certificateInput.files[0];
    let certificateHtml = '';

    if (file) {
        const reader = new FileReader();
        
        reader.onload = function(e) {
            const fileType = file.type;
            if (fileType.includes('image')) {
                certificateHtml = `<img src="${e.target.result}" alt="Certificate">`;
            } else if (fileType.includes('pdf')) {
                certificateHtml = `<iframe src="${e.target.result}" type="application/pdf" width="600" height="800"></iframe>`;
            }
            displayResume(name, email, skills, experience, courseName, completionDate, certificateHtml);
        };

        reader.readAsDataURL(file);
    } else {
        displayResume(name, email, skills, experience, courseName, completionDate, certificateHtml);
    }
}

function displayResume(name, email, skills, experience, courseName, completionDate, certificateHtml) {
    // Create resume HTML
    const courseCompletionHtml = courseName && completionDate 
        ? `<div class="course-completion">
            <h4>Course Completed:</h4>
            <p><strong>Course Name:</strong> ${courseName}</p>
            <p><strong>Completion Date:</strong> ${new Date(completionDate).toLocaleDateString()}</p>
        </div>`
        : '';

    const resumeHtml = `
        <h3>${name}</h3>
        <p><strong>Email:</strong> ${email}</p>
        <h4>Skills:</h4>
        <p>${skills}</p>
        <h4>Experience:</h4>
        <p>${experience}</p>
        ${courseCompletionHtml}
        <div id="certificate-container">
            ${certificateHtml}
        </div>
    `;

    // Display resume
    document.getElementById('resume').innerHTML = resumeHtml;
}

function startTimer() {
    // Clear any existing timer
    if (timerId) {
        clearTimeout(timerId);
    }

    endTime = Date.now() + totalDuration;

    // Update countdown display every second
    updateCountdown();
}

function updateCountdown() {
    const now = Date.now();
    const timeRemaining = endTime - now;

    if (timeRemaining <= 0) {
        showPopup();
        return;
    }

    const hours = Math.floor(timeRemaining / (1000 * 60 * 60));
    const minutes = Math.floor((timeRemaining % (1000 * 60 * 60)) / (1000 * 60));
    const seconds = Math.floor((timeRemaining % (1000 * 60)) / 1000);

    document.getElementById('countdown').textContent = 
        `${String(hours).padStart(2, '0')}:${String(minutes).padStart(2, '0')}:${String(seconds).padStart(2, '0')}`;

    setTimeout(updateCountdown, 1000); // Update every second
}

function showPopup() {
    const popup = document.getElementById('congratulations-popup');
    popup.classList.add('show');
}

function closePopup() {
    const popup = document.getElementById('congratulations-popup');
    popup.classList.remove('show');
}
