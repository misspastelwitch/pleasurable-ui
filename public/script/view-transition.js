document.querySelectorAll('.publication-card').forEach(link => {
    link.addEventListener('click', (e) => {
        // zet een klik functie op de publication-card
      if (!document.startViewTransition) return;
  
      e.preventDefault();
      const href = link.getAttribute('href');
  
      document.startViewTransition(() => {
        window.location.href = href;
      });
    });
  });