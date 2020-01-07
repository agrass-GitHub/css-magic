<template>
  <div class="staggered-rise-text">
    <header>
      <h1 class="title">I'm alphardex.</h1>
      <p class="subtitle">A CSS Wizard</p>
    </header>
  </div>
</template>
 
<script>
export default {
  mounted() {
    let headerTexts = document.querySelectorAll('header > *');
    headerTexts.forEach(headerText => {
      let letters = headerText.textContent.split('');
      headerText.textContent = '';
      letters.forEach((letter, i) => {
        let span = document.createElement('span');
        span.textContent = letter;
        span.style.animationDelay = `${i / 20}s`;
        headerText.append(span);
      });
    });
  }
};
</script>
 
<style lang="scss" >
.staggered-rise-text {
  display: flex;
  justify-content: center;
  align-items: center;
  height: 100vh;
  background: #222;

  header {
    .title,
    .subtitle {
      position: relative;
      display: flex;
      width: 250px;
      height: 30px;
      color: white;
      white-space: pre;
      overflow: hidden;

      span {
        transform: translateY(100%);
        animation: rise-in 1s forwards;
      }
    }

    .title {
      font-family: Lora, serif;
      font-size: 32px;
      line-height: 30px;
    }

    .subtitle {
      margin-top: 10px;
      font-family: Lato, sans-serif;
      font-size: 12px;
      line-height: 30px;
      letter-spacing: 5px;
      text-transform: uppercase;
    }
  }

  @keyframes rise-in {
    to {
      transform: translateY(0);
    }
  }
}
</style>