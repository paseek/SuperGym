function initVideo() {
  let videos = document.querySelectorAll('[data-video]');

  for (let i = 0; i < videos.length; i++) {
    setupVideo(videos[i]);
  }
}

function setupVideo(video) {
  let link = video.querySelector('[data-video-link]');
  let media = video.querySelector('[data-video-media]');
  let button = video.querySelector('[data-video-button]');
  let id = parseMediaURL(media);

  video.addEventListener('click', () => {
    let iframe = createIframe(id);

    link.remove();
    button.remove();
    video.appendChild(iframe);
  });

  link.removeAttribute('href');
  // video.classList.add('video--enabled');
}

function parseMediaURL(media) {
  let regexp = /https:\/\/www\.youtube\.com\/watch\?v=([\w-]+)/i;
  let url = media.getAttribute('href');
  let match = url.match(regexp);

  if (match) {
    return match[1];
  } else {
    return null;
  }
}

function createIframe(id) {
  let iframe = document.createElement('iframe');

  iframe.setAttribute('allowfullscreen', '');
  iframe.setAttribute('allow', 'autoplay');
  iframe.setAttribute('src', generateURL(id));
  iframe.classList.add('about__video-frame');

  return iframe;
}

function generateURL(id) {
  let query = '?rel=0&showinfo=0&autoplay=1';

  return 'https://www.youtube.com/embed/' + id + query;
}

initVideo();
