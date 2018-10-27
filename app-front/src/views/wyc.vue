<template>
  <!-- 武林风云录 -->
  <div>
    <a-collapse defaultActiveKey="1" :bordered="false">
      <a-collapse-panel header="老三 六个职业" key="1">
        <wycThird></wycThird>
      </a-collapse-panel>
      <a-collapse-panel header="老六 薛狐悲" key="2" :disabled='false'>
        <wycSixth></wycSixth>
      </a-collapse-panel>
    </a-collapse>
  </div>
</template>

<script>
import { Collapse } from 'ant-design-vue';
import wycThird from '../components/wuyangcheng/wycThird.vue';
import wycSixth from '../components/wuyangcheng/wycSixth.vue';
import headNav from '../components/headNav.vue';

export default {
  name: 'wyc',
  data() {
    return {
    };
  },
  components: {
    headNav,
    wycThird,
    wycSixth,
    'a-collapse': Collapse,
    'a-collapse-panel': Collapse.Panel,
  },
};

</script>

<style lang="less">
@import '../static/csshake.css';
</style>
