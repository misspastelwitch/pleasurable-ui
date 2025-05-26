document.querySelectorAll('.emoji-radio').forEach(radio => {
    radio.addEventListener('change', function () {
      const selectedEmoji = this.getAttribute('data-emoji');
      document.getElementById('emoji-display').textContent = selectedEmoji;
    });
  });

const clickArea = document.querySelector('.emoji-showcase-comment')

clickArea.addEventListener('click', function() {
    clickArea.classList.toggle('on')
})