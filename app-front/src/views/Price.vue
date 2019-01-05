<template>

  <div>
    <a-button class="editable-add-btn" @click="handleAdd">Add</a-button>
    <a-table bordered :dataSource="dataSource" :columns="columns">
      <template slot="date" slot-scope="text, record">
        <editable-cell :text="text" @change="onCellChange(record.key, 'date')"/>
      </template>
      <template slot="copperRatio" slot-scope="text, record">
        <editable-cell :text="text" @change="onCellChange(record.key, 'copperRatio')"/>
      </template>
      <template slot="yuanbaoRatio" slot-scope="text, record">
        <editable-cell :text="text" @change="onCellChange(record.key, 'yuanbaoRatio')"/>
      </template>
      <template slot="operation" slot-scope="text, record">
        <a-popconfirm
          v-if="dataSource.length"
          title="Sure to delete?"
          @confirm="() => onDelete(record.key)">
          <a href="javascript:;">Delete</a>
        </a-popconfirm>
      </template>
    </a-table>
  </div>
</template>

<script>
import EditableCell from '../components/dependent/EditableCell.vue'
import { Table , Popconfirm } from 'ant-design-vue';
/*
* EditableCell Code https://github.com/vueComponent/ant-design-vue/blob/master/components/table/demo/EditableCell.vue
*/

const axios = require('axios');

export default {
  components: {
    EditableCell,
    'a-table': Table,
    'a-popconfirm': Popconfirm
  },
  data () {
    return { 
      dataSource: [{
        key: '0',
        date: 'Edward King 0',
        copperRatio: '32',
        canbuycopper: 'London, Park Lane no. 0',
        canbuycopper2: 'London, Park Lane no. 1',
      }, {
        key: '1',
        date: 'Edward King 1',
        copperRatio: '32',
        canbuycopper: 'London, Park Lane no. 1',
        canbuycopper2: 'London, Park Lane no. 1',
      }],
      count: 2,
      columns: [{
        title: '日期',
        dataIndex: 'date',
        width: '30%',
        scopedSlots: { customRender: 'date' },
      }, {
        title: '铜价比例',
        dataIndex: 'copperRatio',
        scopedSlots: { customRender: 'copperRatio' },
      }, {
        title: '一元能买到的铜钱',
        dataIndex: 'canbuycopper',
      }, {
        title: '元宝比例',
        dataIndex: 'yuanbaoRatio',
        scopedSlots: { customRender: 'yuanbaoRatio' },
      }, {
        title: '一元能买到的铜钱',
        dataIndex: 'canbuycopper2',
      }, {
        title: 'operation',
        dataIndex: 'operation',
        scopedSlots: { customRender: 'operation' },
      }],
    }
  },
  methods: {
    onCellChange (key, dataIndex) {
      return (value) => {
        const dataSource = [...this.dataSource]
        const target = dataSource.find(item => item.key === key)
        if (target) {
          target[dataIndex] = value
          this.dataSource = dataSource
        }
      }
    },
    onDelete (key) {
      const dataSource = [...this.dataSource]
      this.dataSource = dataSource.filter(item => item.key !== key)
    },
    handleAdd () {
      const { count, dataSource } = this
      const newData = {
        key: count,
        date: `Edward King ${count}`,
        copperRatio: 32,
        canbuycopper: `London, Park Lane no. ${count}`,
      }
      this.dataSource = [...dataSource, newData]
      this.count = count + 1
    }
  },
  mounted () {
    console.log("一家贼");
    axios.get()
    .then()
    .catch(function (error) {
      // handle error
      console.log(error);
    })
  } 
}
</script>
<style>
.editable-cell {
  position: relative;
}

.editable-cell-input-wrapper,
.editable-cell-text-wrapper {
  padding-right: 24px;
}

.editable-cell-text-wrapper {
  padding: 5px 24px 5px 5px;
}

.editable-cell-icon,
.editable-cell-icon-check {
  position: absolute;
  right: 0;
  width: 20px;
  cursor: pointer;
}

.editable-cell-icon {
  line-height: 18px;
  display: none;
}

.editable-cell-icon-check {
  line-height: 28px;
}

.editable-cell:hover .editable-cell-icon {
  display: inline-block;
}

.editable-cell-icon:hover,
.editable-cell-icon-check:hover {
  color: #108ee9;
}

.editable-add-btn {
  margin-bottom: 8px;
}
</style>
