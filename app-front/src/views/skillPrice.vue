<template>
  <a-table :columns="columns" :dataSource="tableData" bordered>
    <template slot="name" slot-scope="text">
      <a href="javascript:;">{{text}}</a>
    </template>
    <template slot="title" slot-scope="currentPageData">
      <a-button @click="dojiulin('jiulin')">{{ skilljson.jiulin.name }}</a-button>
      <a-button @click="dojiulin('shenxiang')">{{ skilljson.shenxiang.name }}</a-button>
      <a-button @click="dojiulin('suwen')">{{ skilljson.suwen.name }}</a-button>
      <a-button @click="dojiulin('xuehe')">{{ skilljson.xuehe.name }}</a-button>
      <a-button @click="dojiulin('tieyi')">{{ skilljson.tieyi.name }}</a-button>
      <a-button @click="dojiulin('suimeng')">{{ skilljson.suimeng.name }}</a-button>
    </template>
    <template slot="footer" slot-scope="currentPageData">
    </template>
  </a-table>
</template>
<script>
import { Table, Button } from 'ant-design-vue';
import skilljson from '../static/json/skill.json';

const columns = [{
  // 列名
  title: 'Name',
  dataIndex: 'skillName',
  scopedSlots: { customRender: 'name' },
}, {
  title: 'Price',
  className: 'column-money',
  dataIndex: 'money',
}];

export default {
  components: {
    'a-table': Table,
    'a-button': Button,
  },
  data() {
    return {
      skilljson,
      tableData: skilljson.jiulin.dataindex,
      columns,
    };
  },
  methods: {
    dojiulin(val) {
      // console.log(skilljson);
      this.tableData = skilljson[val].dataindex;
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
