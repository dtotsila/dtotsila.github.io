document.addEventListener('DOMContentLoaded', () => {
    // Swap the thumbnail for the player in place, on click.
    // data-video-id -> YouTube embed; data-video-src -> self-hosted file.
    document.querySelectorAll('.video-row__media').forEach((media) => {
        media.addEventListener('click', () => {
            const frame = document.createElement('div');
            frame.className = 'video-row__frame';

            if (media.dataset.videoSrc) {
                const video = document.createElement('video');
                video.src = media.dataset.videoSrc;
                video.controls = true;
                video.autoplay = true;
                video.playsInline = true;
                video.poster = media.querySelector('img').src;
                frame.appendChild(video);
            } else {
                frame.innerHTML = `<iframe src="https://www.youtube-nocookie.com/embed/${media.dataset.videoId}?autoplay=1&rel=0"
                    title="${media.dataset.title}"
                    allow="accelerometer; autoplay; encrypted-media; picture-in-picture"
                    allowfullscreen></iframe>`;
            }

            media.replaceWith(frame);
        });
    });
});
