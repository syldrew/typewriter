const sentence = "hello there from lighthouse labs";

const typeSentence = function(sentence) {
  let delay = 0;
  for (let i = 0; i < sentence.length; i++) {
    setTimeout(() => process.stdout.write(sentence[i]), delay);
    delay += 50;
  }
  setTimeout(() => process.stdout.write("\n"), delay);
};

typeSentence(sentence);
