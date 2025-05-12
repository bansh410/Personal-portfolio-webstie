// Smooth scroll for navigation
document.querySelectorAll('nav a').forEach(link => {
    link.addEventListener('click', e => {
      e.preventDefault();
      const targetId = link.getAttribute('href');
      document.querySelector(targetId).scrollIntoView({
        behavior: 'smooth'
      });
    });
  });
  
  // Animate skill bars when in view
  const skillSection = document.querySelector('#skills');
  const skillBars = document.querySelectorAll('.skill .fill');
  
  const observer = new IntersectionObserver(entries => {
    entries.forEach(entry => {
      if (entry.isIntersecting) {
        skillBars.forEach(bar => {
          bar.style.transition = 'width 1.5s ease-in-out';
          const width = bar.style.width;
          bar.style.width = '0';
          setTimeout(() => {
            bar.style.width = width;
          }, 100);
        });
        observer.unobserve(skillSection); // Animate once
      }
    });
  }, { threshold: 0.5 });
  
  observer.observe(skillSection);
  
  // Simple form validation
  const form = document.querySelector('form');
  form.addEventListener('submit', e => {
    e.preventDefault();
    const name = form.querySelector('input[type="text"]').value.trim();
    const email = form.querySelector('input[type="email"]').value.trim();
    const message = form.querySelector('textarea').value.trim();
  
    if (!name || !email || !message) {
      alert('Please fill out all fields!');
    } else {
      alert('Message ready to be sent! (form is non-functional)');
    }
  });
  