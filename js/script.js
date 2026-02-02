const form = document.getElementById("contactForm");
const messageBox = document.getElementById("formMessage");

// 1. IMPROVEMENT: Pre-fill the name if it exists in LocalStorage
window.addEventListener("DOMContentLoaded", () => {
    const savedName = localStorage.getItem("lastSubmitterName");
    if (savedName) {
        document.getElementById("name").value = savedName;
        console.log("Welcome back, " + savedName);
    }
});

form.addEventListener("submit", function (e) {
    e.preventDefault();

    const email = document.getElementById("email").value.trim();
    const message = document.getElementById("message").value.trim();

    const nameRegex = /^[A-Za-z\s]+$/;
    const gmailRegex = /^[a-zA-Z0-9._%+-]+@gmail.com$/;

    messageBox.textContent = "";
    
     if (!gmailRegex.test(email)) {
        messageBox.textContent = "❌ Email must be a valid @gmail.com address.";
    }
    else {
        // --- LOCAL STORAGE LOGIC START ---
        
        const newMessage = {
            sender: name,
            email: email,
            text: message,
            date: new Date().toLocaleString()
        };

        const existingMessages = JSON.parse(localStorage.getItem("contactMessages")) || [];
        
        existingMessages.push(newMessage);
        
        localStorage.setItem("contactMessages", JSON.stringify(existingMessages));
    
        localStorage.setItem("lastSubmitterName", name);

        alert("✅ Message sent successfully and saved to LocalStorage!");
        form.reset();
    }
});
