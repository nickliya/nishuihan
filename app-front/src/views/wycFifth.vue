<template>
  <div id="skillobm">
    <a-row>
      <a-col :span="8">
        <h3>6次普攻喷射一次</h3>
        <h3>90% 大毒三点一 30秒一次</h3>
        <h3>80% 柱子 120秒一次</h3>
        <h3>70% 小怪 60秒一次</h3>
        <h3>50% 大招 50秒一次</h3>
      </a-col>
    </a-row>
  </div>
</template>

<script>
import Vue from 'vue';
import { Button, Tag, Row, Col } from 'ant-design-vue';

Vue.component(Button.name, Button);
Vue.component(Tag.name, Tag);
Vue.component(Row.name, Row);
Vue.component(Col.name, Col);

export default {
  name: 'wycThird',
  data() {
    return {
      sixDonecount: 25,
      yscount: 5,
      timer: null,
      isEnd: true,
    };
  },
  methods: {
    dojishi() {
      this.yscount -= 1;
      this.sixDonecount -= 1;
      if (this.yscount === 0) {
        this.yscount = 30;
      }
      if (this.sixDonecount === 0) {
        this.sixDonecount = 45;
      }
    },
    dostart() {
      this.timer = setInterval(this.dojishi, 1000);
      this.isEnd = false;
    },
    doend() {
      clearInterval(this.timer);
      this.isEnd = true;
      this.yscount = 5;
      this.sixDonecount = 25;
    },
  },
};
</script>

<style lang="less">
#app {
  font-family: 'Avenir', Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  color: #2c3e50;
}
</style>
