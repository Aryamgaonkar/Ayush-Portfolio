const navLinks = document.querySelectorAll('.nav-link');

navLinks.forEach(link => {
  link.addEventListener('click', (event) => {
    event.preventDefault(); 

    const targetId = link.getAttribute('href'); 
    const targetSection = document.querySelector(targetId); 

    targetSection.scrollIntoView({
      behavior: 'smooth',
      block: 'start',
    });
  });
});
