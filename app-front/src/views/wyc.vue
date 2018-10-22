<template>
  <div>
     <wycThird></wycThird>
     <wycSixth></wycSixth>
  </div>
</template>

<script>
import wycThird from './wycThird.vue';
import wycSixth from './wycSixth.vue';

export default {
  name: 'wyc',
  data() {
    return {
    };
  },
  components: {
    wycThird,
    wycSixth,
  },
};

</script>

<style lang="less">
@import '../static/csshake.css';
</style>
