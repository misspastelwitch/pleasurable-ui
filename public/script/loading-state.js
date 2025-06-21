// alle variablen van het docuemnt opzoeken
const form = document.getElementById('comment-form');
const loadingState = document.querySelector('.loading-state-general');

// de pagina wordt niet herladen wanneer er iets wordt gestuurd
form.addEventListener('submit', async (e) => {
    e.preventDefault();

    console.log(e)

    const audio = document.querySelector('audio#loading');
    // speel het geluid af wanneer de comment wordt geplaatst
    audio.play();

    console.log(loadingState)

    // laat de loading state zien
    loadingState.style.display = 'block';

    
})




