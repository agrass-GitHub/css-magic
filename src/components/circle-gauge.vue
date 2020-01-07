<template>
  <div class="box">
    <ul>
      <li class="circle-gauge">
        <a href="#" style="--gauge-value:900;"></a>
        <span>design</span>
      </li>
      <li class="circle-gauge">
        <a href="#" style="--gauge-value:744"></a>
        <span>creativity</span>
      </li>
      <li class="circle-gauge">
        <a href="#" style="--gauge-value:666"></a>
        <span>accessbility</span>
      </li>
      <li class="circle-gauge">
        <a href="#" style="--gauge-value:800"></a>
        <span>content</span>
      </li>
    </ul>
  </div>
</template>
 
<script>
export default {
  data() {
    return {};
  }
};
</script>
 
<style lang="scss" scoped>
.box {
  display: flex;
  height: 100vh;
  justify-content: center;
  align-items: center;
  background: #222;
}

ul {
  display: flex;
  list-style-type: none;

  .circle-gauge {
    $gauge-colors: #e74c3c, #3498db, #2ecc71, #f1c40f;
    --gauge-max-value: 1000;

    display: flex;
    flex-direction: column;
    align-items: center;
    margin: 1em;

    @for $i from 1 through 4 {
      &:nth-child(#{$i}) a {
        --percentage: calc(var(--gauge-value) / var(--gauge-max-value) * 100%);
        background: conic-gradient(
          nth($gauge-colors, $i) var(--percentage),
          #111 0
        );
      }
    }

    a {
      position: relative;
      display: flex;
      justify-content: center;
      align-items: center;
      width: 5em;
      height: 5em;
      font-family: Lato, sans-serif;
      text-decoration: none;
      color: white;
      background: transparent;
      border-radius: 50%;
      counter-reset: value var(--gauge-value);

      &::before {
        position: absolute;
        content: counter(value);
        display: flex;
        justify-content: center;
        align-items: center;
        width: 90%;
        height: 90%;
        background: #222;
        border-radius: inherit;
      }
    }
  }

  span {
    padding-top: 10px;
    font-size: 12px;
    font-weight: 300;
    letter-spacing: 1px;
    text-transform: uppercase;
    color: white;
  }
}
</style>