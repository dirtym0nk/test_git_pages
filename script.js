document.getElementById('loginForm').addEventListener('submit', function(event) {
    event.preventDefault();  // Останавливает отправку формы

    // Получаем значения логина и пароля
    const username = document.getElementById('username').value;
    const password = document.getElementById('password').value;

    // Проверка логина и пароля
    if (username === 'admin' && password === 'password') {
        alert('Login successful!');
    } else {
        document.getElementById('errorMessage').textContent = 'Invalid username or password!';
        document.getElementById('errorMessage').style.display = 'block';
    }
});
