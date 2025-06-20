// alle variablen van het docuemnt opzoeken
const form = document.getElementById('comment-form');
const loadingState = document.querySelector('.loading-state');

// de pagina wordt niet herladen wanneer er iets wordt gestuurd
form.addEventListener('submit', async (e) => {
    e.preventDefault();

    console.log(e)

    const audio = document.querySelector('audio#loading');
    // speel het geluid af wanneer de comment wordt geplaatst
    audio.play();

    // laat de loading state zien
    loadingState.style.display = 'block';
})


