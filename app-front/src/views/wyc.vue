<template>
  <div>
     <wycThird></wycThird>
     <wycFifth></wycFifth>
  </div>
</template>

<script>
import wycThird from './wycThird.vue';
import wycFifth from './wycFifth.vue';

export default {
  name: 'wyc',
  data() {
    return {
    };
  },
  components: {
    wycThird,
    wycFifth,
  },
};

</script>

<style lang="less">
@import '../static/csshake.css';
#app {
  font-family: 'Avenir', Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
}
#nav {
  padding: 30px;
  a {
    font-weight: bold;
    color: #2c3e50;
    &.router-link-exact-active {
      color: #42b983;
    }
  }
}
</style>
