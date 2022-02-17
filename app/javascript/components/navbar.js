const initUpdateNavbarOnScroll = () => {
  const navbar = document.querySelector('.navbar-watchlist');
  if (navbar) {
    window.addEventListener('scroll', () => {
      if (window.scrollY >= window.innerHeight) {
        navbar.classList.add('navbar-watchlist');
      } else {
        navbar.classList.remove('navbar-watchlist');
      }
    });
  }
}

export { initUpdateNavbarOnScroll };
