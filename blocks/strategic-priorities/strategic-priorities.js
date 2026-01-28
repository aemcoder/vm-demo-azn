export default function decorate(block) {
  const cols = [...block.firstElementChild.children];
  block.classList.add(`strategic-priorities-${cols.length}-cols`);

  // Process columns
  [...block.children].forEach((row) => {
    [...row.children].forEach((col, index) => {
      // Add column-specific classes
      if (index === 0) {
        col.classList.add('strategic-priorities-content');
      } else {
        col.classList.add('strategic-priorities-media');
      }

      // Handle images/videos
      const pic = col.querySelector('picture');
      if (pic) {
        const picWrapper = pic.closest('div');
        if (picWrapper && picWrapper.children.length === 1) {
          picWrapper.classList.add('strategic-priorities-img-col');
        }
      }
    });
  });
}
