// functionality allowing the user to log out of their account
const logout = async () => {
    const response = await fetch('/api/users/logout', {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
    });
    
    if (response.ok) {
      $(document).ready(function () {
        window.setTimeout(function () {
            location.href = "/";
        }, 1000);
    });
  }
};
// event listener for the logout button
const logoutBtn = document.getElementById('logout');
logoutBtn.addEventListener('click', logout);
