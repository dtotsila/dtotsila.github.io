document.addEventListener('DOMContentLoaded', () => {
    const modal = document.getElementById('video-modal');
    const body = document.getElementById('video-modal-body');
    const closeBtn = document.getElementById('video-modal-close');
    let lastFocused = null;

    function onKeydown(e) {
        if (e.key === 'Escape') closeModal();
    }

    function openModal(id, title) {
        lastFocused = document.activeElement;
        body.innerHTML = `<iframe src="https://www.youtube.com/embed/${id}?autoplay=1"
            title="${title}"
            allow="accelerometer; autoplay; encrypted-media; picture-in-picture"
            allowfullscreen></iframe>`;
        modal.classList.add('is-open');
        modal.setAttribute('aria-hidden', 'false');
        document.body.style.overflow = 'hidden';
        closeBtn.focus();
        document.addEventListener('keydown', onKeydown);
    }

    function closeModal() {
        modal.classList.remove('is-open');
        modal.setAttribute('aria-hidden', 'true');
        body.innerHTML = '';
        document.body.style.overflow = '';
        document.removeEventListener('keydown', onKeydown);
        if (lastFocused) lastFocused.focus();
    }

    document.querySelectorAll('.story-card').forEach((card) => {
        card.addEventListener('click', () => {
            openModal(card.dataset.videoId, card.dataset.title);
        });
    });

    closeBtn.addEventListener('click', closeModal);
    modal.querySelector('.modal__backdrop').addEventListener('click', closeModal);

    const track = document.getElementById('story-track');
    const prevBtn = document.getElementById('carousel-prev');
    const nextBtn = document.getElementById('carousel-next');

    function scrollByCard(direction) {
        const card = track.querySelector('.story-card');
        if (!card) return;
        const cardWidth = card.getBoundingClientRect().width;
        const gap = parseFloat(getComputedStyle(track).gap) || 0;
        track.scrollBy({ left: direction * (cardWidth + gap), behavior: 'smooth' });
    }

    if (prevBtn && nextBtn && track) {
        prevBtn.addEventListener('click', () => scrollByCard(-1));
        nextBtn.addEventListener('click', () => scrollByCard(1));
    }
});
