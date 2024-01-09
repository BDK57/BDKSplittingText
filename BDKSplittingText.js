   window.onload = function () {
        // let totalWords = 0;
        // let totalChars = 0;
        // let elements = document.querySelectorAll(".bdkSplitting");
        let elements = document.querySelectorAll("[bdkSplitting]");

     elements.forEach(function (e) {
          let text = e.textContent;
          e.textContent = "";
          e.classList.add("BDK-Splitting");
          let words = text.split(" ");
          // let totalChars = 0;
          // console.log(totalChars)
          // totalChars = 0
          let charsT =0;
          words.forEach(function (word, index) {
            if (word !== "") {
              let wordSpan = document.createElement("span");
            wordSpan.className = "words";
            wordSpan.setAttribute("data-word", word);
            // totalWords = totalWords + index;

            // wordSpan.innerText = word;
       
            let whitespaceSpan = document.createElement("span");
            whitespaceSpan.className = "whitespace";
            whitespaceSpan.innerText = " ";

            e.appendChild(wordSpan);
            e.appendChild(whitespaceSpan);

            let chars = word.split("");
        
            charsT += chars.length

       

            chars.forEach(function (char, index) {
              let charSpan = document.createElement("span");
              charSpan.className = "char";
              charSpan.innerText = char;
              charSpan.setAttribute("data-char", char);
              // totalChars =totalChars+ chars.length;
              wordSpan.appendChild(charSpan);
            });

            }
           
            // totalWords = 0;
            
            
          });
          e.style = `--word-total: ${words.length}; --char-total:  ${charsT}; font-size: 46px; color: cyan`;
      
        });
      };
