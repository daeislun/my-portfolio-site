// Мобильное меню
const hamburger = document.getElementById('hamburger');
const navMenu = document.getElementById('navMenu');

hamburger.addEventListener('click', () => {
    hamburger.classList.toggle('active');
    navMenu.classList.toggle('active');
});

// Закрыть меню при клике на ссылку
document.querySelectorAll('.nav-link').forEach(link => {
    link.addEventListener('click', () => {
        hamburger.classList.remove('active');
        navMenu.classList.remove('active');
    });
});

// Валидация формы
const feedbackForm = document.getElementById('feedbackForm');
const emailInput = document.getElementById('email');
const emailError = document.getElementById('emailError');

function validateEmail(email) {
    const re = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    return re.test(String(email).toLowerCase());
}

emailInput.addEventListener('input', () => {
    if (!validateEmail(emailInput.value)) {
        emailError.style.display = 'block';
        emailInput.style.borderColor = '#e74c3c';
    } else {
        emailError.style.display = 'none';
        emailInput.style.borderColor = '#ddd';
    }
});

feedbackForm.addEventListener('submit', function(event) {
    event.preventDefault(); // Останавливаем реальную отправку

    // Простая проверка
    const name = document.getElementById('name').value.trim();
    const email = document.getElementById('email').value.trim();
    const message = document.getElementById('message').value.trim();

    if (!name || !email || !message) {
        alert('Пожалуйста, заполните все обязательные поля.');
        return;
    }

    if (!validateEmail(email)) {
        alert('Пожалуйста, введите корректный email адрес.');
        return;
    }

    // Здесь обычно код отправки данных на сервер (AJAX)
    alert(`Спасибо, ${name}! Ваше сообщение отправлено. Я свяжусь с вами в ближайшее время.`);
    feedbackForm.reset();
    emailError.style.display = 'none';
    emailInput.style.borderColor = '#ddd';
});

// Динамический год в футере
document.getElementById('currentYear').textContent = new Date().getFullYear();