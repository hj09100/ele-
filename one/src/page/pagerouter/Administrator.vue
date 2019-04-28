<template>
    <div id="rigth">
<Head :name='name'></Head>
        <el-table
    :data="data"
    style="width: 100%"
    :row-class-name="tableRowClassName">
    <el-table-column
      prop="user_name"
      label="姓名">
    </el-table-column>
    <el-table-column
      prop="create_time"
      label="注册日期">
    </el-table-column>
    <el-table-column
      prop="city"
      label="地址">
    </el-table-column>
    <el-table-column
      prop="admin"
      label="权限">
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
         data: []
        // num:0
    }
},
 methods: {
 
    },
components:{
Head
},
created(){
    this.name=this.$route.params.username


},
mounted(){
  axios.get('https://elm.cangdu.org/admin/all?offset=0&limit=20').then((res)=>{
    console.log(res.data.data)
    this.data=res.data.data
    console.log(this.data.data)
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
.demo-table-expand {
    font-size: 0;
  }
  .demo-table-expand label {
    width: 90px;
    color: #99a9bf;
  }
  .demo-table-expand .el-form-item {
    margin-right: 0;
    margin-bottom: 0;
    width: 50%;
  }
</style>
