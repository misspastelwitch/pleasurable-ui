

var select = document.getElementById("select");

function playAudio() {
  audio.play();
}


function playSelect() {
  select.play();
}

var allEmojis = document.querySelectorAll(".laugh, .cry, .angry, .surprised");

allEmojis.forEach(function(emoji) {
  emoji.addEventListener('click', function() {
    select.play();
  });
});