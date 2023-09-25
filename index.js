const express = require('express');
const app = express();
const PORT = process.env.PORT || 3000;

app.use(express.static('public'));

app.get('/', (req, res) => {
  res.sendFile(__dirname + '/public/index.html');
});

app.get('/api/riddle', (req, res) => {
    const riddles = [
      { question: "What has to be broken before you can use it?", answer: "An egg" },
      { question: "I’m tall when I’m young, and I’m short when I’m old. What am I?", answer: "A candle" },
      { question: "What month of the year has 28 days?", answer: "All of them" },
      { question: "What is full of holes but still holds water?", answer:"A sponge"},
      { question: "What can’t talk but will reply when spoken to?", answer:"An echo"},
      { question: "What goes up, but never comes down?", answer:"Age"},
      { question: "What can you catch but not throw?", answer:"A cold"},
      { question: "What has thirteen hearts, but no other organs?", answer:"A deck of cards"},
      { question: "What has many keys but can’t open a single lock?", answer:"A piano"},
      { question: "What has legs but cannot walk?", answer:"A chair "}
    ];
  
    const randomIndex = Math.floor(Math.random() * riddles.length);
    const randomRiddle = riddles[randomIndex];
  
    res.send(randomRiddle);
});
  
app.listen(PORT, () => {
    console.log(`Express server listening on port ${PORT}`);
});     