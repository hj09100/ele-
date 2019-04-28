<template>
    <div id='head1'>
        <el-container style="height: 100%; border: 1px solid #eee">
  <el-aside width="200px" style="background-color: rgb(238, 241, 246)">
    <el-menu >
      <!-- <el-submenu index="1"> -->
          <router-link  :to="{ name: 'HomeThis', params: { username: homethis } }"> <el-menu-item index="1-1">首页</el-menu-item></router-link>
        <!-- <template slot="title"><i class="el-icon-message"></i>  首页</template> -->
      <!-- </el-submenu> -->
      <el-submenu index="2">
        <template slot="title"><i class="el-icon-menu"></i>数据管理</template>
        
          <router-link  :to="{ name: 'User', params: { username: name } }"><el-menu-item index="2-1"> 用户列表</el-menu-item></router-link>
          <router-link :to="{ name: 'Manage', params: { username: shop} }"><el-menu-item index="2-2"> 商家列表</el-menu-item></router-link>
          <router-link :to="{ name: 'Food', params: { username: food} }"><el-menu-item index="2-3"> 食品列表</el-menu-item></router-link>
          <router-link :to="{ name: 'Order', params: { username: order} }"><el-menu-item index="2-4"> 订单列表</el-menu-item></router-link>
          <router-link :to="{ name: 'Administrator', params: { username: administrator} }" ><el-menu-item index="2-5"> 管理员列表</el-menu-item></router-link>
        
      </el-submenu>
      <el-submenu index="3">
        <template slot="title"><i class="el-icon-setting"></i>数据添加</template>
          <router-link :to="{ name: 'Addshop', params: { username: addshop} }" ><el-menu-item index="3-1">添加商铺</el-menu-item></router-link>
          <el-menu-item index="3-2">添加商品</el-menu-item>

      </el-submenu>
      <el-submenu index="4">
        <template slot="title"><i class="el-icon-setting"></i>图表</template>
          <el-menu-item index="4-1">用户分布</el-menu-item>
      </el-submenu>
      <el-submenu index="5">
        <template slot="title"><i class="el-icon-setting"></i>编辑</template>
          <el-menu-item index="5-1">文本编辑</el-menu-item>
      </el-submenu>
      <el-submenu index="6">
        <template slot="title"><i class="el-icon-setting"></i>设置</template>
          <el-menu-item index="6-1">管理员设置</el-menu-item>
      </el-submenu>
       <el-submenu index="7">
        <template slot="title"><i class="el-icon-setting"></i>说明</template>
          <el-menu-item index="7-1">说明</el-menu-item>
      </el-submenu>
    </el-menu>
  </el-aside>
        <el-container>
    <router-view/>
        
  </el-container>
</el-container>
    </div>
</template>

<script>
export default {
data(){
    return{
        name:'首页/数据管理/用户列表',
        shop:'首页/数据管理/商家列表',
        food:'首页/数据管理/食品列表',
        order:'首页/数据管理/订单列表',
        administrator:'首页/数据管理/管理员列表',
        homethis:'首页',
        addshop:'首页/数据添加/添加商铺'
    }
}
}
</script>

<style>
#head1{
    width: 100%;
    height: 100%;
}
  .el-header {
    background-color: #B3C0D1;
    color: #333;
    line-height: 60px;
  }
  
  .el-aside {
    color: #333;
  }
  /* .el-menu{
    background: #324057;
  } */
</style>
