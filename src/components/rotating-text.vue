<template>
  <div class="rotating-text-box">
    <div class="rotating-text">
      <p>CSS Animation is</p>
      <p>
        <span class="word alizarin">awesome.</span>
        <span class="word wisteria">beautiful.</span>
        <span class="word peter-river">creative.</span>
        <span class="word emerald">fabulous.</span>
        <span class="word sun-flower">interesting.</span>
      </p>
    </div>
  </div>
</template>
 
<script>
export default {
  data() {
    return {
      timer: null
    };
  },
  mounted() {
    let words = document.querySelectorAll('.word');
    words.forEach(word => {
      let letters = word.textContent.split('');
      word.textContent = '';
      letters.forEach(letter => {
        let span = document.createElement('span');
        span.textContent = letter;
        span.className = 'letter';
        word.append(span);
      });
    });

    let currentWordIndex = 0;
    let maxWordIndex = words.length - 1;
    words[currentWordIndex].style.opacity = '1';

    let rotateText = () => {
      let currentWord = words[currentWordIndex];
      let nextWord =
        currentWordIndex === maxWordIndex
          ? words[0]
          : words[currentWordIndex + 1];
      // rotate out letters of current word
      Array.from(currentWord.children).forEach((letter, i) => {
        setTimeout(() => {
          letter.className = 'letter out';
        }, i * 80);
      });
      // reveal and rotate in letters of next word
      nextWord.style.opacity = '1';
      Array.from(nextWord.children).forEach((letter, i) => {
        letter.className = 'letter behind';
        setTimeout(() => {
          letter.className = 'letter in';
        }, 340 + i * 80);
      });
      currentWordIndex =
        currentWordIndex === maxWordIndex ? 0 : currentWordIndex + 1;
    };

    rotateText();
    this.timer = setInterval(rotateText, 4000);
  },
  beforeDestroy() {
    clearInterval(this.timer);
  }
};
</script>
 
<style lang="scss" >
.rotating-text-box {
  display: flex;
  justify-content: center;
  align-items: center;
  height: 100%;
  background: #222;

  .wisteria {
    color: #8e44ad;
  }

  .peter-river {
    color: #3498db;
  }

  .emerald {
    color: #2ecc71;
  }

  .sun-flower {
    color: #f1c40f;
  }

  .alizarin {
    color: #e74c3c;
  }

  .rotating-text {
    font-family: Lato, sans-serif;
    font-weight: 600;
    font-size: 36px;
    color: white;
    transform: translateX(-80px);

    p {
      display: inline-flex;
      margin: 0;
      vertical-align: top;
      margin-right: 10px;

      .word {
        position: absolute;
        display: flex;
        opacity: 0;

        .letter {
          transform-origin: center center 25px;

          &.out {
            transform: rotateX(90deg);
            transition: 0.32s cubic-bezier(0.6, 0, 0.7, 0.2);
          }
          &.in {
            transition: 0.38s ease;
          }
          &.behind {
            transform: rotateX(-90deg);
          }
        }
      }
    }
  }
}
</style>