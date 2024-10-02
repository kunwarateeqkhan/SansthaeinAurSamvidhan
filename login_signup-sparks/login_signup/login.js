const signUpButton = document.getElementById('signUp');
const signInButton = document.getElementById('signIn');
const container = document.getElementById('container');

signUpButton.addEventListener('click', () => {
	container.classList.add("right-panel-active");
});

signInButton.addEventListener('click', () => {
	container.classList.remove("right-panel-active");
});

const loginForm = document.getElementById('loginForm');
const signupForm = document.getElementById('signupForm');

// Handle sign in form submission
loginForm.addEventListener('submit', (e) => {
    e.preventDefault();
    
    const email = document.getElementById('loginEmail').value;
    const password = document.getElementById('loginPassword').value;
    
    // Simulate user authentication (replace this with actual authentication logic)
    const users = JSON.parse(localStorage.getItem('users')) || [];
    const user = users.find(u => u.email === email && u.password === password);
    
    if (user) {
        alert('Login successful!');
        // Redirect to index.html
        window.location.href = '/Samvidhan-Sparks-main/index.html';
    } else {
        alert('Invalid email or password');
    }
});

// Handle sign up form submission
signupForm.addEventListener('submit', (e) => {
    e.preventDefault();
    
    const name = document.getElementById('signupName').value;
    const email = document.getElementById('signupEmail').value;
    const password = document.getElementById('signupPassword').value;

    // Simulate user sign-up logic (replace with server request if needed)
    const users = JSON.parse(localStorage.getItem('users')) || [];
    if (users.find(u => u.email === email)) {
        alert('User with this email already exists');
        return;
    }
    
    users.push({ name, email, password });
    localStorage.setItem('users', JSON.stringify(users));
    
    alert('Sign up successful! You can now log in.');
    // Automatically log in the user and redirect to index.html
    window.location.href = '/Samvidhan-Sparks-main/index.html';
});

// For toggling between sign up and sign in panels
document.getElementById('signUp').addEventListener('click', () => {
    document.getElementById('container').classList.add('right-panel-active');
});

document.getElementById('signIn').addEventListener('click', () => {
    document.getElementById('container').classList.remove('right-panel-active');
});
