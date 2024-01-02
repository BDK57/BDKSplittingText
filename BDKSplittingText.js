window.onload = function () {
          
    // let elements = document.querySelectorAll(".bdkSplitting");
    let elements = document.querySelectorAll('[bdkSplitting]')

  elements.forEach(function (e) {
    let text = e.textContent;
    e.textContent = "";
  e.classList.add('BDK-Splitting')
    let words = text.split(" ");

    words.forEach(function (word) {
      let wordSpan = document.createElement("span");
      wordSpan.className = "words";
      wordSpan.setAttribute("data-word", word);

      // wordSpan.innerText = word;

      let whitespaceSpan = document.createElement("span");
      whitespaceSpan.className = "whitespace";
      whitespaceSpan.innerText = " ";

      e.appendChild(wordSpan);
      e.appendChild(whitespaceSpan);

      let chars = word.split("");

      chars.forEach(function (char) {
        let charSpan = document.createElement("span");
        charSpan.className = "char";
        charSpan.innerText = char;
        charSpan.setAttribute("data-char", char);

        wordSpan.appendChild(charSpan);
      });
    });
  });
};