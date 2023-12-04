(function() {
  "use strict";

  /**
   * Animation on scroll
   */
  window.addEventListener('load', () => {
    AOS.init({
      duration: 1000,
      easing: 'ease-in-out',
      once: true,
      mirror: false
    });
  });

  /**
   * Vowel Counter
   */
  function countVowels() {
    var inputText = document.getElementById('enterText').value;
    var resultElement = document.getElementById('result');
    
    if (inputText.trim() === "") {
        resultElement.textContent = "Please enter text.";
        return;
    }

    var vowels = ['a', 'e', 'i', 'o', 'u', 'A', 'E', 'I', 'O', 'U'];
    var count = 0;

    for (var i = 0; i < inputText.length; i++) {
        if (vowels.includes(inputText[i])) {
            count++;
        }
    }

    resultElement.textContent = "The number of vowels in '" + inputText + "' is " + count + ".";
  }

  window.countVowels = countVowels;

})();
