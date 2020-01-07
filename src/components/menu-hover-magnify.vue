<template>
  <div class="menu-hover-magnify">
    <ul>
      <li>
        <a href="#">home</a>
      </li>
      <li>
        <a href="#">archives</a>
      </li>
      <li>
        <a href="#">tags</a>
      </li>
      <li>
        <a href="#">categories</a>
      </li>
      <li>
        <a href="#">about</a>
      </li>
    </ul>
  </div>
</template>
 
<script>
export default {};
</script>
 
<style lang="scss" >
.menu-hover-magnify {
  display: flex;
  height: 100%;
  justify-content: center;
  align-items: center;
  text-align: center;
  background: #303f9f;

  ul {
    display: flex;
    color: white;
    list-style-type: none;

    &:hover {
      li a {
        transform: scale(1.2);
        opacity: 0.5;
        filter: blur(2px);
      }
    }

    li {
      margin: 1em;

      a {
        position: relative;
        display: block;
        padding: 5px;
        font-family: Lato, sans-serif;
        color: white;
        text-decoration: none;
        text-transform: uppercase;
        transition: 0.5s;

        &:hover {
          transform: scale(2);
          opacity: 1;
          filter: blur(0);
        }

        &::before {
          position: absolute;
          content: '';
          top: 0;
          left: 0;
          z-index: -1;
          width: 100%;
          height: 100%;
          background: #ff5252;
          transform: scaleX(0);
          transform-origin: right;
          transition: transform 0.5s;
        }

        &:hover::before {
          transform: scaleX(1);
          transform-origin: left;
        }
      }
    }
  }
}
</style>