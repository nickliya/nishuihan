<template>
<div class='editable-cell'>
  <div v-if="editable" class='editable-cell-input-wrapper'>
    <a-input
      :value="value"
      @change="handleChange"
      @pressEnter="check"
    /><a-icon
      type='check'
      class='editable-cell-icon-check'
      @click="check"
    />
  </div>
  <div v-else class='editable-cell-text-wrapper'>
    {{inputtext || ''}}
    <a-icon type='edit' class='editable-cell-icon' @click="edit" />
  </div>
</div>
</template>
<script>
import { Icon, Input } from 'ant-design-vue';
export default {
  props: ['inputtext'],
  components:{
    'a-icon': Icon,
    'a-input': Input
  },
  data () {
    return {
      value: this.inputtext,
      editable: false,
    }
  },
  methods: {
    handleChange (e) {
      const value = e.target.value
      this.value = value
      // console.log("handle")
    },
    check () {
      this.editable = false
      this.$emit('valueChange', this.value)
      this.$emit('change', this.value)
      // console.log("check")
    },
    edit () {
      this.editable = true
      // console.log("edit")
    },
  },
}
</script>