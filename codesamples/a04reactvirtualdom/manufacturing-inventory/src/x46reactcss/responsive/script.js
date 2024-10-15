document.getElementById("loginForm").addEventListener("submit", function(event) {
    event.preventDefault(); // Prevent the default form submission

    // Simulate form submission
    const employeeId = document.getElementById("employeeId").value;
    const password = document.getElementById("password").value;

    // Here, you would typically send the data to your server
    console.log("Employee ID:", employeeId);
    console.log("Password:", password);

    // Simulate successful login
    alert("Logged in successfully!");
});
