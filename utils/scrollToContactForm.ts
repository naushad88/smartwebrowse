export const scrollToContactForm = () => {
  const element = document.getElementById('contact-form');
  if (element) {
    element.scrollIntoView({ 
      behavior: 'smooth',
      block: 'start'
    });
  }
};
