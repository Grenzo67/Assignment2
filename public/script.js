document.addEventListener('DOMContentLoaded', () => {
  const riddleElement = document.getElementById('riddle');
  const answerElement = document.getElementById('answer');
  const showAnswerButton = document.getElementById('showAnswer');
  const newRiddleButton = document.getElementById('newRiddle');

  let previousRiddles = [];
  let currentRiddle = null;

  function loadNewRiddle() {
    fetch('/api/riddle')
      .then((response) => response.json())
      .then((data) => {
        if (!previousRiddles.includes(data.question)) {
          previousRiddles.push(data.question);
          currentRiddle = data;
          riddleElement.textContent = `Riddle: ${currentRiddle.question}`;
          answerElement.textContent = `Answer: ${currentRiddle.answer}`;
          answerElement.style.display = 'none';
          showAnswerButton.style.display = 'block';
        } else {
          loadNewRiddle();
        }
      })
      .catch((error) => {
        console.error('Error fetching riddle:', error);
      });
  }

  loadNewRiddle();

  showAnswerButton.addEventListener('click', () => {
    answerElement.style.display = 'block';
    showAnswerButton.style.display = 'none';
  });

  newRiddleButton.addEventListener('click', () => {
    loadNewRiddle();
  });
});