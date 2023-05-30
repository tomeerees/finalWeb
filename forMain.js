document.addEventListener('DOMContentLoaded', function() {
  const title = document.querySelector('.text-animation');
  const words = title.innerText.split(' ');  let fontSize = 1;
  let currentIndex = 0;

  function increaseFontSize() {
    const word = words[currentIndex];
    const letters = word.split('');
    let newWord = '';

    for (let i = 0; i < letters.length; i++) {
      const letterSize = fontSize; 
      newWord += `<span style="font-size:${letterSize}em">${letters[i]}</span>`;
    }

    title.innerHTML = newWord;
    fontSize += 0.1;

    currentIndex++;
    if (currentIndex >= words.length) {
      currentIndex = 0;
      fontSize = 1;
    }
  }

  setInterval(increaseFontSize, 1000);
});
