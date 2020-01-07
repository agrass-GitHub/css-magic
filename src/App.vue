<template>
  <div id="app">
    <div class="left">
      <div class="item" v-for="(item) in componentNameList" :key="item" @click="is=item">{{item}}</div>
    </div>
    <div class="ui">
      <component :is="is"></component>
    </div>
  </div>
</template>

<script>
const components = {};
const componentNameList = [
  'staggered-wave-loading',
  'nav-tab',
  'rotating-text',
  'staggered-glow-text',
  'staggered-rise-text',
  'circle-gauge',
  'staggered-shrinking-loading',
  'menu-hover-magnify'
];
componentNameList.forEach(
  name => (components[name] = () => import(`./components/${name}.vue`))
);

export default {
  name: 'App',
  components,
  data() {
    return {
      componentNameList,
      is: componentNameList[0]
    };
  }
};
</script>

<style lang="scss">
* {
  margin: 0;
  padding: 0;
}
#app {
  width: 100vw;
  height: 100vh;
  display: flex;
}

.left {
  $menu-width: 250px;

  width: $menu-width;
  height: 100%;
  .item {
    background: #cccc;
    padding: 10px;
    border-bottom: 1px solid #999;
    cursor: pointer;
    text-align: left;
    padding-left: 10px;
    transition: all 0.3s;
    white-space: nowrap;
    text-overflow: ellipsis;

    &:hover {
      font-weight: 700;
      padding-left: 50px;
    }
  }
}
.ui {
  flex-grow: 1;
  height: 100%;
  & > div {
    width: 100%;
    height: 100%;
  }
}
</style>
