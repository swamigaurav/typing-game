const quoteEle = document.getElementById("quote-ele");
const inputEle = document.getElementById("input-ele");
let btn = document.getElementById("start-btn");
const massage = document.getElementById("massage");

let quotes = [
  "It's not that I'm so smart, it's just that I stay with problems longer.",
  "Eighty percent of success is showing up.",
  "I respect faith, but doubt is what gets you an education.",
  "The greatest obstacle to discovery is not ignorance; it is the illusion of knowledge.",
  "The pessimist complains about the wind; the optimist expects it to change; the realist adjusts the sails.",
  "If you don't make mistakes, you're not working on hard enough problems. And that's a big mistake.",
  "You can never get enough of what you don't really need.",
  "Insanity: doing the same thing over and over again and expecting different results.",
  "Do not confuse motion and progress. A rocking horse keeps moving but does not make any progress.",
  "I don't know the key to success, but the key to failure is trying to please everybody.",
  "Tomorrow is often the busiest day of the week.",
  "Be yourself; everyone else is already taken.",
  "There is a great difference between worry and concern. A worried person sees a problem, and a concerned person solves a problem.",
  "It is easier to fight for one's principles than to live up to them.",
  "I hear: I forget / I see: I remember / I do: I understand",
  "Discipline is just choosing between what you want now and what you want most.",
  "The very best thing you can do for the whole world is to make the most of yourself.",
  "Good judgment comes from experience, and experience comes from bad judgment.",
  "When I do good, I feel good; when I do bad, I feel bad, and that is my religion.",
  "Success consists of going from failure to failure without loss of enthusiasm.",
];
let words = [];
let starttime = Date.now();
let wordindex = 0;

btn.addEventListener("click", () => {
  let randomnomber = Math.floor(Math.random() * quotes.length);
  let thought = quotes[randomnomber];

  words = thought.split(" ");
  wordindex = 0;

  let spanQuote = words.map((ele) => {
    return `<span>${ele} </span>`;
  });
  quoteEle.innerHTML = spanQuote.join("");
  massage.textContent = "";
  inputEle.value = "";
  inputEle.focus();
  quoteEle.childNodes[wordindex].className = "highlight";
  starttime = new Date().getTime();
});
inputEle.addEventListener("input", () => {
  let typedWord = inputEle.value;
  let currntWord = words[wordindex];

  if (typedWord === currntWord && wordindex === words.length - 1) {
    let endtime = (new Date().getTime() - starttime) / 1000;
    massage.textContent = `Congartulation You complect this task in ${endtime} Second`;
  } else if (typedWord.endsWith(" ") && currntWord === typedWord.trim()) {
    inputEle.value = "";
    quoteEle.childNodes[wordindex].className = "";
    wordindex++;
    quoteEle.childNodes[wordindex].className = "highlight";
  }
});
