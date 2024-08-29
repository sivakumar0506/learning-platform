// Toggle password visibility
document.addEventListener('DOMContentLoaded', function() {
    const passwordInput = document.getElementById('password');
    const confirmPasswordInput = document.getElementById('confirmPassword');

    document.getElementById('togglePassword').addEventListener('click', function() {
        const type = passwordInput.type === 'password' ? 'text' : 'password';
        passwordInput.type = type;
        this.querySelector('i').classList.toggle('fa-eye');
        this.querySelector('i').classList.toggle('fa-eye-slash');
    });

    document.getElementById('toggleConfirmPassword').addEventListener('click', function() {
        const type = confirmPasswordInput.type === 'password' ? 'text' : 'password';
        confirmPasswordInput.type = type;
        this.querySelector('i').classList.toggle('fa-eye');
        this.querySelector('i').classList.toggle('fa-eye-slash');
    });
});


// Sign up form handling
document.querySelector('.signup-form form').addEventListener('submit', async function(event) {
    event.preventDefault(); // Prevent form from submitting

    const username = document.getElementById('username').value;
    const email = document.getElementById('email').value;
    const password = document.getElementById('password').value;
    const confirmPassword = document.getElementById('confirmPassword').value;

    if (username === '' || email === '' || password === '' || confirmPassword === '') {
        alert('Please fill in all fields.');
    } else if (password !== confirmPassword) {
        alert('Passwords do not match.');
    } else {
        try {
            const response = await fetch('http://localhost:3000/signup', {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json'
                },
                body: JSON.stringify({ username, email, password })
            });
            const data = await response.json();
            if (response.ok) {
                alert('Signup successful.');
                window.location.href = 'login.html'; // Redirect to login page
            } else {
                alert(data.error || 'Signup failed.');
            }
        } catch (error) {
            alert('An error occurred.');
        }
    }
});


// Login form handling
document.querySelector('.login-form form').addEventListener('submit', async function(event) {
    event.preventDefault(); // Prevent form from submitting

    const username = document.querySelector('.login-form input[type="text"]').value;
    const password = document.querySelector('.login-form input[type="password"]').value;

    if (username === '' || password === '') {
        alert('Please fill in all fields.');
    } else {
        try {
            const response = await fetch('http://localhost:3000/login', {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json'
                },
                body: JSON.stringify({ username, password })
            });
            const data = await response.json();
            if (response.ok) {
                window.location.href = 'dashboard.html'; // Redirect to anas.html
            } else {
                alert(data.error || 'Login failed.');
            }
        } catch (error) {
            alert('An error occurred.');
        }
    }
});


