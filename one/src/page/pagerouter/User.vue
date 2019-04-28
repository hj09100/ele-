<template>
    <div id="rigth">
<Head :name='name'></Head>
        <el-table
    ref="singleTable"
    :data="data"
    highlight-current-row
    @current-change="handleCurrentChange"
    style="width: 100%">
    <el-table-column
      type="index">
    </el-table-column>
    <el-table-column
      property="registe_time"
      label="日期">
    </el-table-column>
    <el-table-column
      property="username"
      label="姓名">
    </el-table-column>
    <el-table-column
      property="city"
      label="地址">
    </el-table-column>
  </el-table>
   <div class="block">
  <el-pagination
  @size-change="handleSizeChange"
      @current-change="handleCurrentChange"
      :current-page.sync="currentPage1"
      :page-size="100"
      layout="total, prev, pager, next"
      :total="1000">
</el-pagination>
</div>
    </div>
</template>

<script>
import axios from 'axios'
import Head from '@/page/pagerouter/head'
export default {
data(){
    return{
        name:'',
        data:[],
        currentRow: null,
        currentPage1: 1,
        num:0
    }
},
 methods: {
      setCurrent(row) {
        this.$refs.singleTable.setCurrentRow(row);
      },
      handleCurrentChange(val) {
        this.currentRow = val;
      },
       handleSizeChange(val) {
        console.log(`每页 ${val} 条`);
      },
      handleCurrentChange(val) {
        console.log(`当前页: ${val}`);
        this.num=(val-1)*20
        console.log(this.num)
        axios.get('https://elm.cangdu.org/v1/users/list?offset='+this.num+'&limit=20').then((res)=>{
    // console.log(res.data)
    this.data=res.data
    console.log(this.data)
})
      }
    },
components:{
Head
},
created(){
    this.name=this.$route.params.username


},
mounted(){
  axios.get('https://elm.cangdu.org/v1/users/list?offset=0&limit=20').then((res)=>{
    // console.log(res.data)
    this.data=res.data
    console.log(this.data)
})
}
}
</script>

<style>
#rigth{
    width: 100%;
    height: 100%;
    overflow: auto;
}
</style>
