<template>
  <!-- 跑商 -->
  <div>
    <a-row type='flex' justify="center" align="top">
      <a-col :span="23 ">
        <p>人气商品可购入价：人参4000内 雪莲6500 菊花酒 4000 汴绣6500</p>
        <br>
        <p>购买原则遵循236和347原则，在2/3/6左右可以购买，价格最高不超过3/4/7</p>
        <p>2/3/6 是 2000，3000，6000</p>
        <p>3/4/7 是 3000，4000，7000</p>
        <br>
        <p>红色低于1万/个，可买入！</p>
        <p>如果价格全部都超过这个了，蓝色可在6500左右的价格买入，汴京的汴绣7000以下均可买入</p>
        <a-divider orientation="left"><h2><strong>一些跑商情报解析</strong></h2></a-divider>
        <p>蚕丝格外受商队欢迎，但货源都在有地位的人手里。<span style='color:red'>杭州丝绸→宋辽边境</span></p>
        <p>朝廷建造寿山垦岳,正需要大批宋辽边境的良木。</p>
        <p>磁州漕运码头广造商船,正需要大批宋辽边境的良木。</p>
        <p>杭州城中女子喜好养颜,正四处求购来自仙居原的野生蜂蜜。</p>
        <p>毁诺城的人参可延年益寿,是仙居原商人们颇为喜好的商品。</p>
        <p>桃花坞中正盛行鉴赏陶瓷之风,公卿名流四处收集产自磁州的瓷器。</p>
        <p>岁末将近,宋辽边境的百姓开始采买汴京的木板年画,消灾祈福。</p>
        <p>据闻辽人贵族仰慕大宋文化,正大量求购来自磁州的书画。</p>
        <p>前往高丽的商队不日即将起航,然而你无暇前往。</p>
        <p>前往大食的商队不日即将启程,然而你无暇前往。<span style='color:red'>宋辽边境物价上涨，可以卖一些诸如瓷器，书画，丝绸的货物到宋辽边境</span></p>
        <p>官府又增设了几处关扑场,周遭人声鼎沸络绎不绝。然而热闹的是他们，冷淡的是你的生意。
          <span style='color:red'>宋辽炮打灯，汴京菊花酒→杭州</span></p>
        <p>造作局正四处搜寻奇花异草,很多人拿了自己的珍藏去卖都被拒绝了。<span style='color:red'>毁诺城雪莲→杭州</span></p>
        <p>珍珠被一抢而空,商人正在高价求购。但这种稀罕东西根本没货源，不然也不会这么贵。</p>
        <p>阴雨绵绵，桃花受到影响。<span style='color:red'>帮会面粉→桃花坞</span></p>
        <p>黄河泛滥，皇帝下令疏浚五丈河。<span style='color:red'>帮派石料→汴京</span></p>
        <p>五国使者汇聚京城，汴京物价上涨</p>
        <p>皇帝准备祭祀，朝廷在准备物资。<span style='color:red'>汴京物价上涨</span></p>
        <p>听闻皇上近日神昏气闷，宫中正四处求购帮会里储藏有的安神定气的香料 <span style='color:red'>帮会香料→汴京</span></p>
        <a-divider orientation="left"><h2><strong>自研跑商路径，6分钟左右一趟</strong></h2></a-divider>
        <br>
        <p>帮会棉花4724→汴京</p>
        <p>汴京3680酒→磁州</p>
        <p>磁州3480书画→毁诺城</p>
        <p>毁诺城5716雪莲（14朵）→汴京12W齐</p>
        <br>
        <p>帮会→汴京</p>
        <p>汴京7500汴绣→磁州</p>
        <p>磁州6103瓷器→毁诺城</p>
        <p>毁诺城5680雪莲（11朵）→磁州</p>
        <p>磁州6239瓷器→汴京12W齐</p>
      </a-col>
    </a-row>
  </div>
</template>

<script>
import { Collapse, Divider } from 'ant-design-vue';
import headNav from '../components/headNav.vue';

export default {
  name: 'wyc',
  data() {
    return {
    };
  },
  components: {
    headNav,
    'a-collapse': Collapse,
    'a-collapse-panel': Collapse.Panel,
    'a-divider': Divider,
  },
};

</script>

<style lang="less">
@import '../static/csshake.css';
</style>
