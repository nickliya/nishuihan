<template>
  <div id="wycThird">
    <a-row  type="flex" justify="start">
      <a-col :span="8"><h3>开局五秒会有羽碎</h3></a-col>
    </a-row>
    <a-row  type="flex" justify="start">
      <a-col :span="8">
      <audio :src="mp3url" controls="controls" id="audio" hidden></audio>
      <a-button v-if="isEnd" v-on:click="dostart">开始计时</a-button>
      <a-button v-else v-on:click="doend">结束计时</a-button></a-col>
    </a-row>
    <a-row>
      <a-col :span="8">
        <a-tag v-if="yscount>3" color="#2db7f5" type="success">羽碎 {{yscount}}s</a-tag>
        <a-tag v-else type="danger" color="#f50" class="shake shake-constant shake-constant--hover">
         羽碎 {{yscount}}s</a-tag>
      </a-col>
    </a-row>
    <a-row>
      <a-col :span="8">
        <a-tag v-if="sixDonecount>3" color="#2db7f5" type="success">六点一 {{sixDonecount}}s</a-tag>
        <a-tag v-else type="danger" color="#f50" class="shake shake-constant shake-constant--hover">
         六点一 {{sixDonecount}}s</a-tag>
      </a-col>
    </a-row>
  </div>
</template>

<script>
import Vue from 'vue';
import { Button, Tag, Row, Col } from 'ant-design-vue';


Vue.component(Button.name, Button);
Vue.component(Tag.name, Tag);
Vue.component(Row.name, Row);
Vue.component(Col.name, Col);

export default {
  name: 'wycThird',
  data() {
    return {
      baseUrl: process.env.BASE_URL,
      sixDonecount: 25,
      yscount: 5,
      timer: null,
      isEnd: true,
      audio: null,
      mp3url: require("../../assets/countdown.mp3")
    };
  },
  methods: {
    dojishi() {
      this.yscount -= 1;
      this.sixDonecount -= 1;
      if (this.yscount === 0) {
        this.yscount = 30;
      }
      if (this.sixDonecount === 0) {
        this.sixDonecount = 45;
      }
      if (this.yscount===3 || this.sixDonecount===3){
        this.audio.play();
      }
    },
    dostart() {
      this.timer = setInterval(this.dojishi, 1000);
      this.isEnd = false;
      this.audio = document.getElementById('audio')
   },
    doend() {
      clearInterval(this.timer);
      this.isEnd = true;
      this.yscount = 5;
      this.sixDonecount = 25;
      this.audio.pause();
      this.audio.currentTime = 0;
    }
  },
};
</script>

<style lang="less">
</style>
