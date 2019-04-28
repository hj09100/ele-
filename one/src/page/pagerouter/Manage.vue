<template>
    <div id="rigth">
<Head :name='name'></Head>
        <el-table
    style="width: 100%"
     ref="singleTable"
    :data="data"
    highlight-current-row
    @current-change="handleCurrentChange"
    >
    <el-table-column type="expand">
      <template slot-scope="props">
        <el-form label-position="left" inline class="demo-table-expand">
          <el-form-item label="店铺名称">   
            <span>{{ props.row.name }}</span>
          </el-form-item>
          <el-form-item label="店铺地址">
            <span>{{ props.row.address }}</span>
          </el-form-item>
          <el-form-item label="店铺介绍">
            <span>{{ props.row.description }}</span>
          </el-form-item>
          <el-form-item label="店铺 ID">
            <span>{{ props.row.id }}</span>
          </el-form-item>
          <el-form-item label="联系电话">
            <span>{{ props.row.phone }}</span>
          </el-form-item>
          <el-form-item label="评分">
            <span>{{ props.row.rating }}</span>
          </el-form-item>
          <el-form-item label="销售量">
            <span>{{ props.row.recent_order_num }}</span>
          </el-form-item>
            <el-form-item label="分类">
            <span>{{ props.row.category }}</span>
          </el-form-item>
        </el-form>
      </template>
    </el-table-column>
    <el-table-column
      label="店铺名称"
      prop="name" 
      width="300">
    </el-table-column>
    <el-table-column
      label="店铺地址"
      prop="address"
      width="600">
    </el-table-column>
    <el-table-column
      label="店铺介绍"
      prop="description"
      width="400">
    </el-table-column>
     <el-table-column label="操作">
      <template slot-scope="scope">
        <el-button
          size="mini"
          @click="handleEdit(scope.$index, scope.row)">编辑</el-button>
          <el-button
          size="mini"
          @click="handleEdit(scope.$index, scope.row)">添加商品</el-button>
        <el-button
          size="mini"
          type="danger"
          @click="handleDelete(scope.$index, scope.row)">删除</el-button>
      </template>
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
         data: [],
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
        axios.get('https://elm.cangdu.org/shopping/restaurants?latitude=39.90469&longitude=116.407173&offset='+this.num+'&limit=20').then((res)=>{
    console.log(res.data)
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
  axios.get('https://elm.cangdu.org/shopping/restaurants?latitude=39.90469&longitude=116.407173&offset=0&limit=20').then((res)=>{
    console.log(res.data)
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
