<template>
  <a-calendar>
    <ul class="events" slot="dateCellRender" slot-scope="value">
      <li v-for="item in getListData(value)" :key="item.content">
        <a-badge :status="item.type" :text="item.content" />
      </li>
    </ul>
    <template slot="monthCellRender" slot-scope="value">
      <div v-if="getMonthData(value)" class="notes-month">
        <section>{{getMonthData(value)}}</section>
        <span>Backlog number</span>
      </div>
    </template>
  </a-calendar>
</template>
<script>
import { Badge , Calendar } from 'ant-design-vue';

export default {
  data(){
    return {
      count:1
    }
  },
  components: {
    'a-calendar': Calendar,
    'a-badge': Badge,
  },  
  methods: {
    getListData(value) {
      let listData;
      console.log(value)
      // console.log(this.count)
      // this.count += 1
      switch (value.date()) {
        case 8:
          listData = [
            { type: 'warning', content: 'This is warning event.' },
            { type: 'success', content: 'This is usual event.' },
          ]; break;
        case 10:
          listData = [
            { type: 'warning', content: 'This is warning event.' },
            { type: 'success', content: 'This is usual event.' },
            { type: 'error', content: 'This is error event.' },
          ]; break;
        case 15:
          listData = [
            { type: 'warning', content: 'This is warning event' },
            { type: 'success', content: 'This is very long usual event。。....' },
            { type: 'error', content: 'This is error event 1.' },
            { type: 'error', content: 'This is error event 2.' },
            { type: 'error', content: 'This is error event 3.' },
            { type: 'error', content: 'This is error event 4.' },
          ]; break;
        default:
      }
      return listData || [];
    },

    getMonthData(value) {
      if (value.month() === 8) {
        return 1394;
      }
    },
  }
}
</script>
<style scoped>
.events {
  list-style: none;
  margin: 0;
  padding: 0;
}
.events .ant-badge-status {
  overflow: hidden;
  white-space: nowrap;
  width: 100%;
  text-overflow: ellipsis;
  font-size: 12px;
}
.notes-month {
  text-align: center;
  font-size: 28px;
}
.notes-month section {
  font-size: 28px;
}
</style>
