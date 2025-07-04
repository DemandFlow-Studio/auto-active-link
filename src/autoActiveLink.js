export default function initAutoActiveLink() {
    // Get the main wrapper that contains everything
    const wrapper = document.querySelector('[data-index-component]');
    if (!wrapper) return;
  
    // Get internal elements inside that wrapper only
    const sidebar = wrapper.querySelector('[data-sidebar]');
    const sections = wrapper.querySelectorAll('[data-index-section]');
    const navLinks = wrapper.querySelectorAll('[data-index-link]');
    const offsetAttr = wrapper.getAttribute('data-offset');
    const offset = offsetAttr ? parseInt(offsetAttr, 10) : 0;
  
    if (!sidebar || !sections.length || !navLinks.length) return;
  
    let scrollSpyLocked = false;
    let ticking = false;
  
    // Highlight nav link based on scroll position
    function updateActiveLink() {
      const sidebarRect = sidebar.getBoundingClientRect();
      const anchorPoint = sidebarRect.top + sidebarRect.height / 2;
  
      sections.forEach(section => {
        const rect = section.getBoundingClientRect();
        if (rect.top <= anchorPoint && rect.bottom > anchorPoint) {
          const heading = section.querySelector('[data-target]');
          if (heading) {
            activateNavLink(heading.dataset.target);
          }
        }
      });
    }
  
    // Add "is-active" class to the correct nav link
    function activateNavLink(targetName) {
      navLinks.forEach(link => link.classList.remove('is-active'));
  
      const matchingLink = Array.from(navLinks).find(link => {
        return link.innerText.trim().toLowerCase() === targetName.trim().toLowerCase();
      });
  
      if (matchingLink) {
        matchingLink.classList.add('is-active');
      }
    }
  
    // Scroll-based detection
    window.addEventListener('scroll', () => {
      if (!ticking && !scrollSpyLocked) {
        window.requestAnimationFrame(() => {
          updateActiveLink();
          ticking = false;
        });
        ticking = true;
      }
    });
  
    // Click-to-scroll functionality
    navLinks.forEach(link => {
      link.addEventListener('click', function (e) {
        e.preventDefault();
  
        navLinks.forEach(l => l.classList.remove('is-active'));
        this.classList.add('is-active');
  
        const label = this.innerText.trim().toLowerCase();
        const targetHeading = Array.from(
          wrapper.querySelectorAll('[data-target]')
        ).find(el => el.dataset.target.trim().toLowerCase() === label);
  
        if (targetHeading) {
          const elementPosition = targetHeading.getBoundingClientRect().top;
          const offsetPosition = elementPosition + window.pageYOffset - offset;
  
          window.scrollTo({
            top: offsetPosition,
            behavior: 'smooth',
          });
  
          scrollSpyLocked = true;
          setTimeout(() => {
            scrollSpyLocked = false;
          }, 1500);
        }
      });
    });
  }
  