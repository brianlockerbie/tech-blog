async function signupFormHandler (event) {
    event.preventDefault();
  
    const username = document.querySelector('#username-login').value.trim();
    const password = document.querySelector('#password-login').value.trim();
  
    if (username && password) {
      const response = await fetch('/api/users', {
        method: 'post',
        body: JSON.stringify({
          username,
          password
        }),
        headers: { 'Content-Type': 'application/json' }
      });
  
      // check the response status
      if (response.ok) {
        console.log('success');
        alert('Congradulations! Your account has been created!')
        document.location.replace('/login');
      } else {
        alert(response.statusText);
      }
    }
};


document.querySelector('.login-form').addEventListener('submit', signupFormHandler);