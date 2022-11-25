// functionality allowing the user to sign-up for a new account
const signUp = async (event) => {
  event.preventDefault();

  const username = document.querySelector('#signupName').value.trim();
  const email = document.querySelector('#signupEmail').value.trim();
  const password = document.querySelector('#signupPassword').value.trim();
  

  if (username && email && password) {
    // using the "post" method for creating a new user
    const response = await fetch('/api/users', {
      method: 'POST',
      body: JSON.stringify({ username, email, password }),
      headers: { 'Content-Type': 'application/json' },
    });

    if (response.ok) {
      document.location.replace('/dashboard');
  
    } else {
      alert('Failed to sign up.');
    }
  }
};
// event handler for the sign-up button
const signupBtn = document.getElementById('signupBtn')
signupBtn.addEventListener('click', signUp);
