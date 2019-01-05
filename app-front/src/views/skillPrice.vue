<template>
  <!-- 技能进阶价格 -->
  <a-table :columns="columns" :dataSource="tableData" bordered>
    <template slot="name" slot-scope="text">
      <a href="javascript:;">{{text}}</a>
    </template>
    <template slot="title" slot-scope="text, record, index">
      Head
      <a-button @click="dojiulin('jiulin')">{{ skilljson.jiulin.name }}</a-button>
      <a-button @click="dojiulin('shenxiang')">{{ skilljson.shenxiang.name }}</a-button>
      <a-button @click="dojiulin('suwen')">{{ skilljson.suwen.name }}</a-button>
      <a-button @click="dojiulin('xuehe')">{{ skilljson.xuehe.name }}</a-button>
      <a-button @click="dojiulin('tieyi')">{{ skilljson.tieyi.name }}</a-button>
      <a-button @click="dojiulin('suimeng')">{{ skilljson.suimeng.name }}</a-button>
    </template>
    <template slot="footer" slot-scope="text, record, index">
      Footer
    </template>
    <!-- <template slot="operation" slot-scope="text, record">
        <a-popconfirm
          v-if="tableData.length"
          title="Sure to delete?"
          @confirm="() => onDelete(record.key)">
          <a>Delete</a>
        </a-popconfirm>
    </template> -->
    <template slot="operation" slot-scope="text, record, index">
      <div class='editable-row-operations'>
        <span v-if="record.editable">
          <a @click="() => save(record.key)">Save</a>
          <a-popconfirm title='Sure to cancel?' @confirm="() => cancel(record.key)">
            <a>Cancel</a>
          </a-popconfirm>
        </span>
        <span v-else>
          <a @click="() => edit(record.key)">Edit</a>
        </span>
      </div>
    </template>
  </a-table>
</template>
<script>
import { Table, Button, Popconfirm} from 'ant-design-vue';
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
},
{
  title: 'operation',
  dataIndex: 'operation',
  scopedSlots: { customRender: 'operation' },
}];

const tableData=[]
export default {
  components: {
    'a-table': Table,
    'a-button': Button,
    'a-popconfirm': Popconfirm,
  },
  data() {
    this.cacheData = tableData.map(item => ({ ...item }))
    return {
      skilljson,
      tableData: skilljson.jiulin.dataindex,
      columns,
      count: 2,
    };
  },
  methods: {
    dojiulin(val) {
      // console.log(skilljson);
      this.tableData = skilljson[val].dataindex;
    },
    onDelete (key) {
      const dataSource = [...this.tableData]
      this.tableData = dataSource.filter(item => item.key !== key)
    },
    handleChange (value, key, column) {
      const newData = [...this.tableData]
      const target = newData.filter(item => key === item.key)[0]
      if (target) {
        target[column] = value
        this.tableData = newData
      }
    },
    edit (key) {
      const newData = [...this.tableData]
      const target = newData.filter(item => key === item.key)[0]
      if (target) {
        target.editable = true
        this.tableData = newData
      }
    },
    save (key) {
      const newData = [...this.tableData]
      const target = newData.filter(item => key === item.key)[0]
      if (target) {
        delete target.editable
        this.tableData = newData
        this.cacheData = newData.map(item => ({ ...item }))
      }
    },
    cancel (key) {
      const newData = [...this.tableData]
      const target = newData.filter(item => key === item.key)[0]
      if (target) {
        Object.assign(target, this.cacheData.filter(item => key === item.key)[0])
        delete target.editable
        this.data = newData
      }
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

<style scoped>
.editable-row-operations a {
  margin-right: 8px;
}
</style>
