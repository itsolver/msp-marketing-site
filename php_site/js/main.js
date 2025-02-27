document.addEventListener('DOMContentLoaded', function() {
  // Mobile menu toggle
  const mobileMenuToggle = document.querySelector('.mobile-menu-toggle');
  if (mobileMenuToggle) {
    mobileMenuToggle.addEventListener('click', function() {
      document.body.classList.toggle('mobile-menu-open');
      
      // Show the active segment navigation
      const activeSegment = document.querySelector('.segment-link.active');
      if (activeSegment) {
        const segmentType = activeSegment.textContent.toLowerCase().trim();
        const segmentNav = document.querySelector(`.${segmentType}-nav`);
        if (segmentNav) {
          segmentNav.style.display = document.body.classList.contains('mobile-menu-open') ? 'flex' : 'none';
        }
      }
    });
  }
  
  // Segment switcher
  const segmentLinks = document.querySelectorAll('.segment-link');
  segmentLinks.forEach(link => {
    link.addEventListener('click', function(e) {
      // We'll let the link navigate naturally to change the segment
      // The PHP will handle setting the active segment
    });
  });

  // Form validation
  const forms = document.querySelectorAll('form');
  forms.forEach(form => {
    form.addEventListener('submit', function(event) {
      const requiredFields = form.querySelectorAll('[required]');
      let isValid = true;

      requiredFields.forEach(field => {
        if (!field.value.trim()) {
          isValid = false;
          field.classList.add('error');
          
          // Create or update error message
          let errorMessage = field.nextElementSibling;
          if (!errorMessage || !errorMessage.classList.contains('error-message')) {
            errorMessage = document.createElement('div');
            errorMessage.classList.add('error-message');
            field.parentNode.insertBefore(errorMessage, field.nextSibling);
          }
          errorMessage.textContent = 'This field is required';
        } else {
          field.classList.remove('error');
          const errorMessage = field.nextElementSibling;
          if (errorMessage && errorMessage.classList.contains('error-message')) {
            errorMessage.remove();
          }
        }
      });

      if (!isValid) {
        event.preventDefault();
      }
    });
  });
}); 