export const closeMenu = () => {
  const nav = document.querySelector('#main-nav');
  nav?.classList.remove('navOpen');
};

export const openMenu = () => {
  const nav = document.querySelector('#main-nav');
  nav?.classList.add('navOpen');
};

export const toggleMenu = () => {
  const nav = document.querySelector('#main-nav');
  const isOpen = nav?.classList.contains('navOpen');

  if (isOpen) {
    nav?.classList.remove('navOpen');
  } else {
    nav?.classList.add('navOpen');
  }
};
