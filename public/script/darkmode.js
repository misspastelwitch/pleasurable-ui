const darkmodeButton = document.querySelector('.darkmode-button');

    darkmodeButton.addEventListener('click', (event) => {
        document.body.classList.add('darkmode');
    });

    const lightmodeButton = document.querySelector('.lightmode-button');

    lightmodeButton.addEventListener('click', (event) => {
        document.body.classList.remove('darkmode');
    });