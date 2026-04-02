// Function to handle showing only the selected section
document.querySelectorAll('nav a').forEach(link => {
    link.addEventListener('click', function(e) {
        e.preventDefault();
        const targetId = this.getAttribute('href').substring(1);
        
        // Scroll to the specific article
        const element = document.getElementById(targetId);
        window.scrollTo({
            top: element.offsetTop - 20,
            behavior: 'smooth'
        });
        
        // Optional: Highlight effect
        element.style.ring = "2px solid #4caf50";
        setTimeout(() => { element.style.ring = "none"; }, 1000);
    });
});

console.log("Kolarovice site ready.");
