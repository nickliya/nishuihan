<template>
<div>
  <a-row type="flex" justify="space-between" align="bottom">
    <a-col :span="7">
      <h3>支持</h3>
      <p class="height-100">如果在使用的过程中遇到了问题，可以在这里创建反馈</p>
    </a-col>
    <a-col :span="7">
      <h3>支持</h3>
      <p class="height-100">如果在使用的过程中遇到了问题，可以在这里创建反馈</p>
    </a-col>
    <a-col :span="7">
      <h3>支持</h3>
      <p class="height-100">如果在使用的过程中遇到了问题，可以在这里创建反馈</p>
    </a-col>
  </a-row>
</div>
</template>

<script>
import { Menu, Icon } from 'ant-design-vue';

export default {
  props: ['name'],
  data() {
    return {
    };
  },
  components: {
    'a-menu': Menu,
    'a-sub-menu': Menu.SubMenu,
    'a-menu-item': Menu.Item,
    'a-icon': Icon,
    'a-menu-item-group': Menu.ItemGroup,
  },
  methods: {
  },
};
</script>

<style>

</style>

