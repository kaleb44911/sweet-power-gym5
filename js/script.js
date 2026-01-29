const form = document.getElementById("contactForm");
        const messageBox = document.getElementById("formMessage");

        form.addEventListener("submit", function (e) {
            e.preventDefault();

            const name = document.getElementById("name").value.trim();
            const email = document.getElementById("email").value.trim();
            const message = document.getElementById("message").value.trim();

            const nameRegex = /^[A-Za-z\s]+$/;
            const gmailRegex = /^[a-zA-Z0-9._%+-]+@gmail\.com$/;

            messageBox.textContent = "";

            if (name === "" || email === "" || message === "") {
                messageBox.textContent = "❌ Please fill in all fields.";
            }
            else if (!nameRegex.test(name)) {
                messageBox.textContent = "❌ Name must contain only letters.";
            }
            else if (!gmailRegex.test(email)) {
                messageBox.textContent = "❌ Email must be a valid @gmail.com address.";
            }
            else {
                alert("✅ Message sent successfully!");
                form.reset();
            }
        });