<template>
  <a-table :columns="columns" :dataSource="tableData" bordered>
    <template slot="name" slot-scope="text">
      <a href="javascript:;">{{text}}</a>
    </template>
    <template slot="title" slot-scope="currentPageData">
      <a-button @click="dojiulin('jiulin')" style="background-color:#b37feb" index="1">{{ dataskill.jiulin.name }}</a-button>
      <a-button @click="dojiulin('shenxinag')" style="background-color:#597ef7">神相</a-button>
      <a-button @click="dojiulin('xuehe')" style="background-color:#f5222d">血河</a-button>
      <a-button @click="dojiulin('tieyi')" style="background-color:#fff566">铁衣</a-button>
      <a-button @click="dojiulin('suimeng')" style="background-color:#91d5ff">碎梦</a-button>
    </template>
    <template slot="footer" slot-scope="currentPageData">
    </template>
  </a-table>
</template>
<script>
import { Table, Button } from 'ant-design-vue';

const columns = [{
  // 列名
  title: 'Name',
  dataIndex: 'skillName',
  scopedSlots: { customRender: 'name' },
}, {
  title: 'Cash Assets',
  className: 'column-money',
  dataIndex: 'money',
}];

const dataskill = {
  // 技能名称和价格
  jiulin: {
    name: '九零',
    dataindex: [
      {
        key: '1',
        skillName: 'John Brown',
        money: '￥300,000.00',
      }, {
        key: '2',
        skillName: 'Jim Green',
        money: '￥1,256,000.00',
      }],
  },
  xuehe: {
    name: '血河',
    dataindex: [
      {
        key: '1',
        skillName: '霸者横栏',
        money: '￥300,000.00',
      }, {
        key: '2',
        skillName: 'Jim Green',
        money: '￥1,256,000.00',
      }],
  },
};

export default {
  components: {
    'a-table': Table,
    'a-button': Button,
  },
  data() {
    return {
      dataskill,
      tableData: dataskill.xuehe.dataindex,
      columns,
    };
  },
  methods: {
    dojiulin(val) {
      console.log(val);
      this.tableData = dataskill[val].dataindex;
    },
  },
};
</script>
<style>
/* th.column-money,
td.column-money {
  text-align: right !important;
}; */
</style>
