<template>
    <div id='head1'>
        <el-container style="height: 100%; border: 1px solid #eee">
  <el-aside width="200px" style="background-color: rgb(238, 241, 246)">
    <el-menu :default-openeds="['1', '3']">
      <el-submenu index="1">
        <template slot="title"><i class="el-icon-message"></i> <router-link :to="{ name: 'Manage', params: { username: name} }"> 首页</router-link></template>
      </el-submenu>
      <el-submenu index="2">
        <template slot="title"><i class="el-icon-menu"></i>数据管理</template>
        
          <el-menu-item index="2-1"> <router-link :to="{ name: 'Shop', params: { username: shop} }" >用户列表</router-link></el-menu-item>
          <el-menu-item index="2-2"> <router-link to='./manage'>商家列表</router-link></el-menu-item>
          <el-menu-item index="2-3"> <router-link to='./manage'>食品列表</router-link></el-menu-item>
          <el-menu-item index="2-4"> <router-link to='./manage'>订单列表</router-link></el-menu-item>
          <el-menu-item index="2-5"> <router-link to='./manage'>管理员列表</router-link></el-menu-item>
        
      </el-submenu>
      <el-submenu index="3">
        <template slot="title"><i class="el-icon-setting"></i>数据添加</template>
          <el-menu-item index="3-1">添加商铺</el-menu-item>
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

        // name:'',
        // name:''


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
</style>
