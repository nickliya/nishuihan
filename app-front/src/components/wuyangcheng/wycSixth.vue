<template>
  <div id="wycSixth">
    <a-row>
      <a-col :span="8">
        <h3>6次普攻吸人一次</h3>
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
  name: 'wycSixth',
  data() {
    return {
      sixDonecount: 25,
      yscount: 5,
      timer: null,
      isEnd: true,
    };
  },
};
</script>

<style lang="less">
</style>
