// Show an alert when the page loads
window.onload = function() {
    alert("Welcome to AKZU's website!");
};

// Change title color when clicked
document.addEventListener("DOMContentLoaded", function() {
    let title = document.querySelector("h1");
    
    title.addEventListener("click", function() {
        title.style.color = title.style.color === "red" ? "#1DA1F2" : "red";
    });
});
