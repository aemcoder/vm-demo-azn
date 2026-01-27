export default function decorate(block) {
  const cols = [...block.firstElementChild.children];
  block.classList.add(`strategic-priorities-${cols.length}-cols`);

  // Process columns
  [...block.children].forEach((row) => {
    [...row.children].forEach((col, index) => {
      // Add class based on content type
      const pic = col.querySelector('picture');
      const video = col.querySelector('a[href*="youtube"], a[href*="vimeo"]');

      if (pic || video) {
        col.classList.add('strategic-priorities-media-col');
      } else {
        col.classList.add('strategic-priorities-text-col');
      }

      // Handle video links - add play overlay
      if (video && pic) {
        const wrapper = document.createElement('div');
        wrapper.className = 'strategic-priorities-video-wrapper';
        pic.parentElement.insertBefore(wrapper, pic);
        wrapper.appendChild(pic);

        const playOverlay = document.createElement('span');
        playOverlay.className = 'strategic-priorities-play-overlay';
        wrapper.appendChild(playOverlay);

        video.className = 'strategic-priorities-video-link';
        wrapper.appendChild(video);
      }
    });
  });
}
