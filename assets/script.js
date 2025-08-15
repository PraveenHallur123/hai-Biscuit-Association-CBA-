// script.js - Chai Biscuit Association

// Smooth scroll for anchor links
document.addEventListener('DOMContentLoaded', function() {
  // Hamburger menu for mobile
  const hamburger = document.querySelector('.hamburger');
  const navLinks = document.querySelector('.nav-links');
  if (hamburger && navLinks) {
    hamburger.addEventListener('click', function() {
      navLinks.classList.toggle('open');
      hamburger.classList.toggle('open');
    });
    // Close menu when link is clicked (mobile)
    navLinks.querySelectorAll('a').forEach(link => {
      link.addEventListener('click', function() {
        navLinks.classList.remove('open');
        hamburger.classList.remove('open');
      });
    });
  }
  // Smooth scroll for anchor links (if any)
  document.querySelectorAll('a[href^="#"]').forEach(link => {
    link.addEventListener('click', function(e) {
      const target = document.querySelector(this.getAttribute('href'));
      if (target) {
        e.preventDefault();
        target.scrollIntoView({ behavior: 'smooth' });
      }
    });
  });
});

// Scroll reveal animation
function revealOnScroll() {
  document.querySelectorAll('.reveal').forEach(el => {
    const rect = el.getBoundingClientRect();
    if (rect.top < window.innerHeight - 60) {
      el.classList.add('visible');
    }
  });
}
window.addEventListener('scroll', revealOnScroll);
window.addEventListener('DOMContentLoaded', revealOnScroll);

// Navigation active highlighting
document.addEventListener('DOMContentLoaded', function() {
  const currentPage = location.pathname.split('/').pop();
  document.querySelectorAll('.nav-links a').forEach(link => {
    if (link.getAttribute('href') === currentPage) {
      link.classList.add('active');
    } else {
      link.classList.remove('active');
    }
  });
});

// Vote counter (for elections.html)
document.addEventListener('DOMContentLoaded', function() {
  const voteBtn = document.getElementById('voteBtn');
  const voteCount = document.getElementById('voteCount');
  if (voteBtn && voteCount) {
    let count = 0;
    voteBtn.addEventListener('click', () => {
      count++;
      voteCount.textContent = count;
      voteBtn.classList.add('voted');
      setTimeout(() => voteBtn.classList.remove('voted'), 300);
    });
  }
});

// Contact form validation (for contact.html)
document.addEventListener('DOMContentLoaded', function() {
  const form = document.getElementById('contactForm');
  if (!form) return;
  form.addEventListener('submit', function(e) {
    let valid = true;
    const name = form.elements['name'];
    const email = form.elements['email'];
    const flavor = form.elements['flavor'];
    const message = form.elements['message'];
    // Simple validation
    if (!name.value.trim()) {
      valid = false;
      name.classList.add('error');
    } else {
      name.classList.remove('error');
    }
    if (!email.value.match(/^\S+@\S+\.\S+$/)) {
      valid = false;
      email.classList.add('error');
    } else {
      email.classList.remove('error');
    }
    if (!flavor.value.trim()) {
      valid = false;
      flavor.classList.add('error');
    } else {
      flavor.classList.remove('error');
    }
    if (!message.value.trim()) {
      valid = false;
      message.classList.add('error');
    } else {
      message.classList.remove('error');
    }
    if (!valid) {
      e.preventDefault();
      alert('Please fill out all fields correctly!');
    }
  });
});

// Members page: show fun fact on hover (for accessibility on mobile)
document.addEventListener('DOMContentLoaded', function() {
  document.querySelectorAll('.profile-card').forEach(card => {
    card.addEventListener('click', function() {
      this.querySelector('.fun-fact').classList.toggle('visible');
    });
  });
});
