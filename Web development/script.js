// Smooth scroll to feedback section when "Overview" link is clicked
document.querySelector('a[href="#feedback-section"]').addEventListener('click', function(e) {
    e.preventDefault();
    document.querySelector('#feedback-section').scrollIntoView({
      behavior: 'smooth'
    });
  });
  