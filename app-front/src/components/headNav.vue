<template>
<div>
  <a-menu
    mode="horizontal"
  >
    <a-menu-item key="ps">
      <router-link to="/ps"><a-icon type="file-text"/>跑商</router-link>
    </a-menu-item>
    <a-sub-menu>
      <span slot="title"><a-icon type="exception" />副本</span>
      <a-menu-item-group title="团队副本">
        <a-menu-item key="wyc">
          <router-link to="/">舞阳城</router-link>
        </a-menu-item>
      </a-menu-item-group>
      <a-menu-item-group title="小队副本">
        <a-menu-item key="wl">
          <router-link to="/wl">武林风云录</router-link>
        </a-menu-item>
      </a-menu-item-group>
    </a-sub-menu>
    <a-sub-menu>
      <span slot="title"><a-icon type="shop" />物价</span>
      <a-menu-item-group>
        <a-menu-item key="skill">
          <router-link to="/skill/price">技能进阶</router-link>
        </a-menu-item>
        <a-menu-item key="price">
          <router-link to="/price">铜币金价</router-link>
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
