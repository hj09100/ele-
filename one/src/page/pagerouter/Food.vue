<template>
    <div id="rigth">
<Head :name='name'></Head>
        <el-table
    :data="data"
    style="width: 100%">
    <el-table-column type="expand">
      <template slot-scope="props">
        <el-form label-position="left" inline class="demo-table-expand">
          <el-form-item label="食品名称">
            <span>{{ props.row.name }}</span>
          </el-form-item>
          <el-form-item label="餐馆名称">
            <span>{{ props.row.address }}</span>
          </el-form-item>
          <el-form-item label="食品id">
            <span>{{ props.row.item_id }}</span>
          </el-form-item>
          <el-form-item label="餐馆ID">
            <span>{{ props.row.category_id }}</span>
          </el-form-item>
          <el-form-item label="食品介绍">
            <span>{{ props.row.phone }}</span>
          </el-form-item>
          <el-form-item label="餐馆地址">
            <span>{{ props.row.rating }}</span>
          </el-form-item>
          <el-form-item label="食品评分">
            <span>{{ props.row.rating }}</span>
          </el-form-item>
            <el-form-item label="食品分类">
            <span>{{ props.row.category }}</span>
          </el-form-item>
          </el-form-item>
            <el-form-item label="月销量">
            <span>{{ props.row.month_sales }}</span>
          </el-form-item>
        </el-form>
      </template>
    </el-table-column>
    <el-table-column
      label="食品名称"
      prop="name" 
      width="300">
    </el-table-column>
    <el-table-column
      label="食品介绍"
      prop="description"
      width="600">
    </el-table-column>
    <el-table-column
      label="评分"
      prop="rating"
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
        axios.get('https://elm.cangdu.org/shopping/v2/foods?offset='+this.num+'&limit=20&restaurant_id=undefined').then((res)=>{
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
  axios.get('https://elm.cangdu.org/shopping/v2/foods?offset=0&limit=20&restaurant_id=undefined').then((res)=>{
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
