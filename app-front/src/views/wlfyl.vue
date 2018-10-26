<template>
  <!-- 舞阳城 -->
  <div>
    <headNav></headNav>
    <a-collapse defaultActiveKey="1" :bordered="false">
      <a-collapse-panel header="老一 陈斩槐" key="1">
        <bossFirst></bossFirst>
      </a-collapse-panel>
      <a-collapse-panel header="老二 醉仙" key="2" :disabled='false'>
        <bossSecond></bossSecond>
      </a-collapse-panel>
    </a-collapse>
  </div>
</template>

<script>
import { Collapse } from 'ant-design-vue';
import bossFirst from '../components/wulin/bossFirst.vue';
import bossSecond from '../components/wulin/bossSecond.vue';
import headNav from '../components/headNav.vue';

export default {
  name: 'wyc',
  data() {
    return {
    };
  },
  components: {
    headNav,
    bossFirst,
    bossSecond,
    'a-collapse': Collapse,
    'a-collapse-panel': Collapse.Panel,
  },
};

</script>

<style lang="less">
@import '../static/csshake.css';
</style>
