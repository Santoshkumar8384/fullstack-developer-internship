const form = document.getElementById("contactForm");
const message = document.getElementById("message");

form.addEventListener("submit", function (event) {
    event.preventDefault();

    const name = document.getElementById("name").value.trim();
    const email = document.getElementById("email").value.trim();

    if (name === "" || email === "") {
        message.textContent = "Please fill in all fields.";
        return;
    }

    message.textContent = `Welcome, ${name}! Your form was submitted successfully.`;
});