document.getElementById("contactForm").addEventListener("submit", function(event) {
    event.preventDefault(); // Stop page reload

    // Get form values
    const name = document.getElementById("name").value;
    
    // Show a thank you message
    const responseDiv = document.getElementById("formResponse");
    responseDiv.textContent = `Thanks, ${name}! Your message has been received.`;
    responseDiv.classList.remove("hidden");

    // Reset form
    this.reset();
});
