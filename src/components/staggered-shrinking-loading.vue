<template>
  <div class="staggered-shrinking-loading">
    <div class="loading">Loading</div>
  </div>
</template>
 
<script>
export default {
  mounted() {
    let loading = document.querySelector('.loading');
    let letters = loading.textContent.split('');
    loading.textContent = '';
    letters.forEach((letter, i) => {
      let span = document.createElement('span');
      span.textContent = letter;
      span.style.animationDelay = `${i / 10}s`;
      loading.append(span);
    });
  }
};
</script>
 
<style lang="scss" >
.staggered-shrinking-loading {
  display: flex;
  justify-content: center;
  align-items: center;
  height: 100%;
  background: black;

  .loading {
    display: flex;
    color: white;
    font-size: 2rem;
    font-family: Lato, sans-serif;
    letter-spacing: 0.5rem;
    text-transform: uppercase;

    span {
      animation: shrink 2s infinite;
    }
  }

  @keyframes shrink {
    50% {
      transform: scale(0);
    }
  }
}
</style>