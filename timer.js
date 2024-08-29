window.onload = function() {
    // Select the complete button
    const completeBtn = document.querySelector('.complete-btn');
    
    // Initially disable the button
    completeBtn.disabled = true;
    completeBtn.style.backgroundColor = '#90ee90'; // Light green background for initial state
    completeBtn.style.color = '#ffffff'; // White text color
    completeBtn.style.fontWeight = 'bold'; // Bold text for timer
    
    let countdown = 10; // 10 seconds timer
    
    const countdownInterval = setInterval(() => {
        countdown--;
        completeBtn.textContent = `Complete (${countdown}s)`; // Update button text with countdown
        completeBtn.style.color = '#ffffff'; // Bold white text for countdown

        if (countdown <= 0) {
            clearInterval(countdownInterval);
            completeBtn.disabled = false; // Enable the button
            completeBtn.textContent = "Complete"; // Reset button text
            completeBtn.style.backgroundColor = '#4CAF50'; // Change background color to green
        }
    }, 1000); // Update every second
    
    // Add click event listener for the button
    completeBtn.addEventListener('click', () => {
        if (!completeBtn.disabled) {
            // Store a flag in localStorage to indicate completion
            localStorage.setItem('completed', 'true');
            window.location.href = 'resume.html'; // Redirect to resume.html
        }
    });
};
