<template>
  <div>
    <a-button class="editable-add-btn" @click="handleAdd">Add</a-button>
    <a-table bordered :dataSource="dataSource" :columns="columns" size="small" :pagination="pagination">
      <!-- <template slot="date" slot-scope="text, record">
        <editable-cell :text="text" @change="onCellChange(record.key, 'date')" @valueChange="getChangeValue"/>
      </template> -->
      <template slot="copperRatio" slot-scope="text, record">
        <editable-cell :inputtext="text" @change="onCellChange(record.key, 'copperRatio')" @valueChange="getChangeValue"/>
      </template>
      <template slot="yuanbaoRatio" slot-scope="text, record">
        <editable-cell :inputtext="text" @change="onCellChange(record.key, 'yuanbaoRatio')" @valueChange="getChangeValue"/>
      </template>
      <template slot="operation" slot-scope="text, record">
        <div class='editable-row-operations'>
          <a-popconfirm
            v-if="dataSource.length"
            title="Sure to delete?"
            @confirm="() => onDelete(record.key)">
            <a href="javascript:;">Delete</a>
          </a-popconfirm>
          <a-popconfirm
            v-if="dataSource.length"
            title="Sure to delete?"
            @confirm="() => onSave(record.key)">
            <a href="javascript:;">Save</a>
          </a-popconfirm>
        </div>
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

axios.interceptors.request.use((config) => {
  config.headers['X-Requested-With'] = 'XMLHttpRequest';
  let regex = /.*csrftoken=([^;.]*).*$/; // 用于从cookie中匹配 csrftoken值
  config.headers['X-CSRFToken'] = document.cookie.match(regex) === null ? null : document.cookie.match(regex)[1];
  return config
})

export default {
  components: {
    EditableCell,
    'a-table': Table,
    'a-popconfirm': Popconfirm
  },
  data () {
    return { 
      dataSource: [],
      count: 1, //用于存储获取到的行数
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
      tableValue: '', //用于存储表格变化的值
      pagination: false
    }
  },
  methods: {
    getPrice () {
      var vue = this
      axios.get('http://localhost:8010/getPrice')
      .then (function (response) {
          let data = response.data.message
          let keycount = 1
          let newDataSource = [] //从数据库拉所有的列表，所以要本地初始化列表
          data.forEach(element => {
            let datadic = {}
            datadic["key"] = keycount.toString()
            datadic["date"] = element["date"]
            datadic["copperRatio"] = element["copperRatio"].toString()
            datadic["yuanbaoRatio"] = element["yuanbaoRatio"].toString()
            datadic["canbuycopper"] = (element["copperRatio"]*10).toString()
            datadic["canbuycopper2"] = (10000/element["yuanbaoRatio"]).toString()
            
            newDataSource.splice(keycount-1, 1, datadic)
            keycount += 1
            this.count = keycount
          })
          this.dataSource = newDataSource
          console.log(this.dataSource)
        }.bind(this)
      )
      .catch (function (error) {
        // handle error
        console.log(error)
      })
    },
    getChangeValue (data) {
      this.tableValue = data
    },
    onCellChange (key, dataIndex) {
      // console.log(dataIndex)
      this.dataSource[key-1][dataIndex] =this.tableValue
      if (dataIndex=='copperRatio') {
        this.dataSource[(key-1)]['canbuycopper'] = this.tableValue * 10
      }
      else if (dataIndex == 'yuanbaoRatio') {
        this.dataSource[(key-1)]['canbuycopper2'] = (10000/this.tableValue)
      }
      // console.log(this.dataSource)
    },
    onDelete (key) {
      const dataSource = [...this.dataSource]
      axios.post('http://localhost:8010/deletePrice', dataSource[key-1])
        .then(function (response) {
          console.log(response);
          this.getPrice()
        }.bind(this))
        .catch(function (error) {
          console.log(error);
        });
    },
    onSave (key) {
      const dataSource = [...this.dataSource]
      // console.log(dataSource[key-1])
      // console.log(key)
      axios.post('http://localhost:8010/savePrice', dataSource[key-1])
        .then(function (response) {
          console.log(response);
          this.getPrice()
        }.bind(this))
        .catch(function (error) {
          console.log(error);
        });
    },
    handleAdd () {
      const { count, dataSource } = this
      let timestamp = new Date()
      let date = timestamp.getFullYear()+"-"+(timestamp.getMonth()+1)+"-"+timestamp.getDate()
      let time = timestamp.getHours()+':'+timestamp.getMinutes()+':'+timestamp.getSeconds()

      const newData = {
        key: count,
        date: date + " " + time,
        copperRatio: '550',
        yuanbaoRatio: '1.6',
        canbuycopper: (550*10).toString(),
        canbuycopper2: (10000/1.6).toString()
      }
      this.dataSource = [...dataSource, newData]
      this.count = count + 1
      // console.log(this.dataSource)
    }
  },
  mounted () {
    this.getPrice()
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

.editable-row-operations a {
  margin-right: 8px;
}
</style>
