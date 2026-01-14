// Function to show selected section
function showSection(sectionId) {
    // Get all content sections and cards
    const sections = document.querySelectorAll('.content-section');
    const cards = document.querySelectorAll('.quick-link-card');
    
    // Remove active class from all sections
    sections.forEach(section => {
        section.classList.remove('active');
    });
    
    // Remove active class from all cards
    cards.forEach(card => {
        card.classList.remove('active');
    });
    
    // Add active class to selected section and card
    document.getElementById(sectionId).classList.add('active');
    document.getElementById('card-' + sectionId).classList.add('active');
    
    // Smooth scroll to content
    document.querySelector('.main-content').scrollIntoView({ 
        behavior: 'smooth',
        block: 'start'
    });
}

// Function to scroll to content from hero button
function scrollToContent() {
    document.querySelector('.quick-links').scrollIntoView({ 
        behavior: 'smooth',
        block: 'start'
    });
}

// Add smooth scroll for navigation links
document.addEventListener('DOMContentLoaded', function() {
    console.log('Autoimmune Diseases Portal Loaded Successfully!');
    
    // Add animation on scroll
    const observerOptions = {
        threshold: 0.1,
        rootMargin: '0px 0px -50px 0px'
    };
    
    const observer = new IntersectionObserver(function(entries) {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                entry.target.style.opacity = '1';
                entry.target.style.transform = 'translateY(0)';
            }
        });
    }, observerOptions);
    
    // Observe all disease cards and info cards
    document.querySelectorAll('.disease-card, .info-card, .intro-box').forEach(el => {
        el.style.opacity = '0';
        el.style.transform = 'translateY(20px)';
        el.style.transition = 'opacity 0.6s ease, transform 0.6s ease';
        observer.observe(el);
    });
    
    // Add active state to home icon on page load
    const homeLink = document.querySelector('.nav-list li a');
    if (homeLink) {
        homeLink.classList.add('active');
    }
});

// Handle keyboard navigation
document.addEventListener('keydown', function(event) {
    const activeCard = document.querySelector('.quick-link-card.active');
    const cards = Array.from(document.querySelectorAll('.quick-link-card'));
    const currentIndex = cards.indexOf(activeCard);
    
    // Left arrow key
    if (event.key === 'ArrowLeft' && currentIndex > 0) {
        cards[currentIndex - 1].click();
    }
    
    // Right arrow key
    if (event.key === 'ArrowRight' && currentIndex < cards.length - 1) {
        cards[currentIndex + 1].click();
    }
});

// Add hover effect enhancement
document.querySelectorAll('.quick-link-card').forEach(card => {
    card.addEventListener('mouseenter', function() {
        this.style.transform = 'translateY(-8px)';
    });
    
    card.addEventListener('mouseleave', function() {
        if (!this.classList.contains('active')) {
            this.style.transform = 'translateY(0)';
        } else {
            this.style.transform = 'translateY(-4px)';
        }
    });
});
