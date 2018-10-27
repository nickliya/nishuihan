<template>
  <!-- 舞阳城 -->
  <div>
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
import { Collapse, Layout } from 'ant-design-vue';
import bossFirst from '../components/wulin/bossFirst.vue';
import bossSecond from '../components/wulin/bossSecond.vue';
import headNav from '../components/headNav.vue';
import myfooter from '../components/myfooter.vue';

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
@import '../static/csshake.css';
</style>
