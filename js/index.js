const quotes = [
  {
    text: "The only way to do great work is to love what you do.",
    author: "Steve Jobs",
  },
  {
    text: "Unaeza save mita udedi",
    author: "Robinson Chege",
  },
  {
    text: "Kwani ni kesho.",
    author: "Burukulyn Boys",
  },
  {
    text: "Life is 10% what happens to us and 90% how we react to it.",
    author: "Charles R. Swindoll",
  },
  {
    text: "We only live once",
    author: "Gabriel Mochire",
  },
  {
    text: "It does not matter how slowly you go as long as you do not stop.",
    author: "Confucius",
  },
  {
    text: "You miss 100% of the shots you don't take.",
    author: "Wayne Gretzky",
  },
  {
    text: "The only limit to our realization of tomorrow is our doubts of today.",
    author: "Franklin D. Roosevelt",
  },
  {
    text: "You never know how strong you are until being strong is your only choice",
    author: "Lucy Maingi",
  },
  {
    text: "Our greatest desire is not in falling but in raising up whenever we fall",
    author: "Lucy Maingi",
  },
];

function generateQuote() {
  const randomIndex = Math.floor(Math.random() * quotes.length);
  const randomQuote = quotes[randomIndex];

  document.getElementById("quote").textContent = `"${randomQuote.text}"`;
  document.getElementById("author").textContent = `- ${randomQuote.author}`;
}
