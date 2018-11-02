<template>
<div>
  <a-menu
    mode="horizontal"
  >
    <a-menu-item key="wyc">
      <router-link to="/ps"><a-icon type="mail"/>跑商</router-link>
    </a-menu-item>
    <a-sub-menu>
      <span slot="title"><a-icon type="appstore" />副本</span>
      <a-menu-item-group title="团队副本">
        <a-menu-item key="setting:1">
          <router-link to="/">舞阳城</router-link>
        </a-menu-item>
      </a-menu-item-group>
      <a-menu-item-group title="小队副本">
        <a-menu-item key="setting:3">
          <router-link to="/wl">武林风云录</router-link>
        </a-menu-item>
      </a-menu-item-group>
    </a-sub-menu>
    <a-sub-menu>
      <span slot="title"><a-icon type="appstore" />物价</span>
      <a-menu-item-group>
        <a-menu-item key="setting:1">
          <router-link to="/skill/price">技能进阶</router-link>
        </a-menu-item>
      </a-menu-item-group>
    </a-sub-menu>
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
