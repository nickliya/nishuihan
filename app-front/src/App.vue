<template>
  <div id="app">
    <!-- <div id="nav">
      <router-link to="/">Home</router-link> |
      <router-link to="/about">About</router-link>
    </div> -->
    <!-- <a-layout id="components-layout-demo-top" class="layout"> -->
      <headNav></headNav>
      <router-view/>
      <!-- <a-layout-footer style="text-align: center"> -->
        <!-- <myfooter></myfooter> -->
      <!-- </a-layout-footer> -->
    <!-- </a-layout> -->
  </div>
</template>

<script>
import { Collapse, Layout } from 'ant-design-vue';
import headNav from './components/headNav.vue';
import myfooter from './components/myfooter.vue';

export default {
  name: 'wyc',
  data() {
    return {
    };
  },
  components: {
    headNav,
    myfooter,
    'a-collapse': Collapse,
    'a-collapse-panel': Collapse.Panel,
    'a-layout': Layout,
    'a-layout-header': Layout.Header,
    'a-layout-content': Layout.Content,
    'a-layout-footer': Layout.Footer,
  },
};

</script>

<style lang="less">
#app {
  font-family: 'Avenir', Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  // text-align: center;
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
#components-layout-demo-top .logo {
  width: 120px;
  height: 31px;
  background: rgba(255,255,255,.2);
  margin: 16px 24px 16px 0;
  float: left;
}
</style>
