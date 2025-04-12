document.addEventListener('DOMContentLoaded', function() {
    const contactForm = document.getElementById('contact-form');
    
    if (contactForm) {
      contactForm.addEventListener('submit', function(event) {
        event.preventDefault();
        

        const name = document.getElementById('name').value;
        const email = document.getElementById('email').value;
        const subject = document.getElementById('subject').value;
        const message = document.getElementById('message').value;
        
        if (!name || !email || !subject || !message) {
          alert('Please fill in all fields');
          return;
        }
        
        alert('Message sent! We\'ll get back to you as soon as possible.');
        
        contactForm.reset();
      });
    }
    
    // Add current year to footer
    const currentYear = new Date().getFullYear();
    const footerYearElements = document.querySelectorAll('footer p');
    
    footerYearElements.forEach(element => {
      if (element.textContent.includes('©')) {
        element.textContent = `© ${currentYear} Agrio. All rights reserved.`;
      }
    });
  
    // Toggle active class for navigation
    const currentPage = window.location.pathname.split('/').pop();
    const navLinks = document.querySelectorAll('.nav-links a');
    
    navLinks.forEach(link => {
      const linkPage = link.getAttribute('href');
      if (currentPage === linkPage || (currentPage === '' && linkPage === 'index.html')) {
        link.classList.add('active');
      }
    });
  });