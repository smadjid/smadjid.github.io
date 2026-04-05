function toggleVisibility(id) {
  var el = document.getElementById(id);
  if (el) {
    if (el.style.display === 'none' || el.style.display === '') {
      el.style.display = 'block';
    } else {
      el.style.display = 'none';
    }
  }
}

// Alias snake_case for compatibility
function toggle_visibility(block_id) {
  toggleVisibility(block_id);
}

/* Scroll-triggered fade-in animations */
document.addEventListener('DOMContentLoaded', function() {
  var observer = new IntersectionObserver(function(entries) {
    entries.forEach(function(entry) {
      if (entry.isIntersecting) {
        entry.target.style.opacity = '1';
        entry.target.style.transform = 'translateY(0)';
      }
    });
  }, {
    threshold: 0.1,
    rootMargin: '0px 0px -50px 0px'
  });

  document.querySelectorAll('.project-card, .talk-card, .thesis-card, .teaching-entry, .activity-entry').forEach(function(el) {
    el.style.opacity = '0';
    el.style.transform = 'translateY(16px)';
    el.style.transition = 'opacity 0.6s ease, transform 0.6s ease';
    observer.observe(el);
  });
});
