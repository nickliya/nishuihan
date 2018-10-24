<template>
<div>
  <a-menu
    mode="horizontal"
  >
    <a-menu-item key="wyc">
      <router-link to="/" :current='wyc'><a-icon type="mail"/>舞阳城</router-link>
    </a-menu-item>
    <a-menu-item key="wl">
      <router-link to="/wl" :current='wl'><a-icon type="appstore"/>武林风云录</router-link>
    </a-menu-item>
    <!-- <a-sub-menu>
      <span slot="title"><a-icon type="setting" />Navigation Three - Submenu</span>
      <a-menu-item-group title="Item 1">
        <a-menu-item key="setting:1">Option 1</a-menu-item>
        <a-menu-item key="setting:2">Option 2</a-menu-item>
      </a-menu-item-group>
      <a-menu-item-group title="Item 2">
        <a-menu-item key="setting:3">Option 3</a-menu-item>
        <a-menu-item key="setting:4">Option 4</a-menu-item>
      </a-menu-item-group>
    </a-sub-menu> -->
    <!-- <a-menu-item key="alipay">
      <a href="https://ant.design" target="_blank" rel="noopener noreferrer">Navigation Four - Link</a>
    </a-menu-item> -->
  </a-menu>
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
    handleSelect() {
    },
  },
};
</script>
