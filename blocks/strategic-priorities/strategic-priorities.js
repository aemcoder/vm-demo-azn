export default function decorate(block) {
  const cols = [...block.firstElementChild.children];
  block.classList.add(`strategic-priorities-${cols.length}-cols`);

  // Process columns
  [...block.children].forEach((row) => {
    [...row.children].forEach((col) => {
      const pic = col.querySelector('picture');
      if (pic) {
        const picWrapper = pic.closest('div');
        if (picWrapper && picWrapper.children.length === 1) {
          picWrapper.classList.add('strategic-priorities-img-col');
        }
      }

      // Add class for text content columns
      const hasHeading = col.querySelector('h1, h2, h3, h4, h5, h6');
      const hasList = col.querySelector('ul, ol');
      if (hasHeading || hasList) {
        col.classList.add('strategic-priorities-text-col');
      }
    });
  });
}
