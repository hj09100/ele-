<template>
    <div id="rigth">
<Head :name='name'></Head>
   <div class="login">首页</div>
    <div class="tu">数据管理</div>
    <div class="tu-1">
      <span class="span1">当日数据：</span>
      <span class="span2">34 新增用户</span>
      <span class="span2">4 新增订单</span>
      <span class="span2">43 新增管理员</span>
    </div>
    <div class="tu-2">
      <span class="span1">总数据：</span>
      <span class="span2">22 注册用户</span>
      <span class="span2">22 订单</span>
      <span class="span2"> 22 管理员</span>
    </div>
    <div
      id="chartmain"
      style="width:900px; height: 450px;margin-top:50px;margin-left:50px"
    ></div>
    </div>
</template>

<script>
import axios from 'axios'
import dtime from 'time-formater'
import Head from '@/page/pagerouter/head'
export default {
data(){
    return{
        name:'',
      
    }
},
mounted() {
    this.on();
  },
  created(){
     axios.get('https://elm.cangdu.org/statis/order/'+rawDate+'/count').then((item)=>{
         console.log(item.data)
     })
    this.name=this.$route.params.username

const time = require('time-formater')
 
let rawDate = time(new Date()).format('YYYY-MM-DD') // 当前时间
console.log(rawDate) // 2017-05-21 15:19:34

  },
  methods: {
    userList() {
      this.$router.push({ name: "userList" });
    },
    detail() {
      this.$router.push({ name: "detail" });
    },
    on() {
      let aaa = this.$echarts.init(document.getElementById("chartmain"));
      aaa.setOption({
        title: {
          text: "走势图"
        },
        tooltip: {
          trigger: "axis"
        },
        legend: {
          data: ["新注册用户", "新增订单", "新增管理员"]
        },
        toolbox: {
          show: true,
          feature: {
            dataZoom: {
              yAxisIndex: "none"
            },
            dataView: { readOnly: false },
            magicType: { type: ["line", "bar"] },
            restore: {},
            saveAsImage: {}
          }
        },
        xAxis: {
          type: "category",
          boundaryGap: false,
          data: [
            "2019-04-22",
            "2019-04-23",
            "2019-04-24",
            "2019-04-25",
            "2019-04-26",
            "2019-04-27",
            "2019-04-28"
          ]
        },
        yAxis: {
          type: "value",
          min: 0,
          max: 200,
          interval: 50,
          axisLabel: {
            formatter: "{value}"
          }
        },
        series: [
          {
            name: "新注册用户",
            type: "line",
            data: [199, 113, 77, 50, 38, 13, 0, 5],
            markPoint: {
              data: [
                { type: "max", name: "最大值" },
                { type: "min", name: "最小值" }
              ]
            }
          },
          {
            name: "新增订单",
            type: "line",
            data: [15, 3, 2, 30, 3, 21, 2, 17],
            markPoint: {
              data: [
                { type: "max", name: "最大值" },
                { type: "min", name: "最小值" }
              ]
            }
          },
          {
            name: "新增管理员",
            type: "line",
            data: [124, 129, 123, 124, 127, 13, 22],
            markPoint: {
              data: [
                { type: "max", name: "最大值" },
                { type: "min", name: "最小值" }
              ]
            }
          }
        ]
      });
    }
  },
  components:{
Head
},

};
</script>

<style>
#rigth{
    width: 100%;
    height: 100%;
    overflow: auto;
}
</style>
