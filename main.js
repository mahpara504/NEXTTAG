document.getElementById('contactForm').addEventListener('submit', function(event) {
    event.preventDefault();
    let name = document.getElementById('name').value;
    let email = document.getElementById('email').value;
    let phone = document.getElementById('phone').value;
    let message = document.getElementById('message').value;

    if (name === '' || email === '' || phone === '' || message === '') {
        alert('Please fill out all fields.');
    } else if (!validateEmail(email)) {
        alert('Please enter a valid email address.');
    }  else {
        alert('Form submitted successfully!');
        
    }
});

function validateEmail(email) {
    const re = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    return re.test(String(email).toLowerCase());
}

function validatePhone(phone) {
    const re = /^[0-9]{10,12}$/;
    return re.test(String(phone));
}

document.getElementById("toggleIcon").addEventListener("click", function () {
    this.classList.toggle("bi-heart");
    this.classList.toggle("bi-heart-fill");
});

document.getElementById("menuBtn").addEventListener("click", function () {
    document.getElementById("sideNavbar").classList.add("active");
});

document.getElementById("closeBtn").addEventListener("click", function () {
    document.getElementById("sideNavbar").classList.remove("active");
});