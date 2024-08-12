export const changePositionRandomly = (element: HTMLElement) => {
      const pageWidth = window.innerWidth - 400;
      const pageHeight = window.innerHeight - 400;
    
      const inputWidth = element.offsetWidth;
      const inputHeight = element.offsetHeight;
    
      const randomX = Math.floor(Math.random() * (pageWidth - inputWidth));
      const randomY = Math.floor(Math.random() * (pageHeight - inputHeight));
    
      element.style.position = 'absolute';
      element.style.left = `${randomX}px`;
      element.style.top = `${randomY}px`;

      element.blur()
  };