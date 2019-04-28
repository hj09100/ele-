<template>
    <div id="rigth">
        
<Head :name='name'></Head>
<div class="kuang">
            
        <el-form ref="form" :model="form" label-width="80px">
  <el-form-item label="店铺名称">
    <el-input v-model="form.name"></el-input>
  </el-form-item>
  <el-form-item label="详细地址">
    <el-input v-model="form.name"></el-input>
  </el-form-item>
  <el-form-item label="联系电话">
    <el-input v-model="form.name"></el-input>
  </el-form-item>
  <el-form-item label="店铺简介">
    <el-input v-model="form.name"></el-input>
  </el-form-item>
  <el-form-item label="店铺标语">
    <el-input v-model="form.name"></el-input>
  </el-form-item>
  <el-form-item label="店铺分类">
    <el-select v-model="form.region" placeholder="请选择活动区域">
      <el-option label="区域一" value="shanghai"></el-option>
      <el-option label="区域二" value="beijing"></el-option>
    </el-select>
  </el-form-item>
  <el-form-item label="店铺特点">
    <el-form-item label="品牌保证">
    <el-switch v-model="form.delivery"></el-switch>
  </el-form-item>
  <el-form-item label="蜂鸟专送">
    <el-switch v-model="form.delivery"></el-switch>
  </el-form-item>
  <el-form-item label="新开店铺">
    <el-switch v-model="form.delivery"></el-switch>
  </el-form-item>
  <el-form-item label="外卖保">
    <el-switch v-model="form.delivery"></el-switch>
  </el-form-item>
  <el-form-item label="准时达">
    <el-switch v-model="form.delivery"></el-switch>
  </el-form-item>
  <el-form-item label="开发票">
    <el-switch v-model="form.delivery"></el-switch>
  </el-form-item>
  </el-form-item>
  
   <el-form-item label="营业时间">
    <el-col :span="11">
      <el-date-picker type="date" placeholder="选择日期" v-model="form.date1" style="width: 100%;"></el-date-picker>
    </el-col>
    <el-col class="line" :span="2">-</el-col>
    <el-col :span="11">
      <el-time-picker placeholder="选择时间" v-model="form.date2" style="width: 100%;"></el-time-picker>
    </el-col>
  </el-form-item>
  <el-form-item label="上传店铺头像">
    <el-upload
  class="avatar-uploader"
  action="https://jsonplaceholder.typicode.com/posts/"
  :show-file-list="false"
  :on-success="handleAvatarSuccess"
  :before-upload="beforeAvatarUpload">
  <img v-if="imageUrl" :src="imageUrl" class="avatar">
  <i v-else class="el-icon-plus avatar-uploader-icon"></i>
</el-upload>
  </el-form-item>
  <el-form-item label="上传营业执照">
    <el-upload
  class="avatar-uploader"
  action="https://jsonplaceholder.typicode.com/posts/"
  :show-file-list="false"
  :on-success="handleAvatarSuccess"
  :before-upload="beforeAvatarUpload">
  <img v-if="imageUrl" :src="imageUrl" class="avatar">
  <i v-else class="el-icon-plus avatar-uploader-icon"></i>
</el-upload>
  </el-form-item>
  <el-form-item label="上传餐饮服务许可证">
    <el-upload
  class="avatar-uploader"
  action="https://jsonplaceholder.typicode.com/posts/"
  :show-file-list="false"
  :on-success="handleAvatarSuccess"
  :before-upload="beforeAvatarUpload">
  <img v-if="imageUrl" :src="imageUrl" class="avatar">
  <i v-else class="el-icon-plus avatar-uploader-icon"></i>
</el-upload>
  </el-form-item>
   <el-form-item label="优惠活动">
    <el-select v-model="form.region" placeholder="满减优惠">
      <el-option label="区域一" value="shanghai"></el-option>
      <el-option label="区域二" value="beijing"></el-option>
    </el-select>
  </el-form-item>
  <el-form-item>
    <el-button type="primary" @click="onSubmit">立即创建</el-button>
  </el-form-item>
</el-form>
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
         imageUrl: '',
        form: {
          name: '',
          region: '',
          date1: '',
          date2: '',
          delivery: false,
          type: [],
          resource: '',
          desc: ''
        }
    }
},
components:{
Head
},
methods: {
      onSubmit() {
        console.log('submit!');
      },
       handleAvatarSuccess(res, file) {
        this.imageUrl = URL.createObjectURL(file.raw);
      },
      beforeAvatarUpload(file) {
        const isJPG = file.type === 'image/jpeg';
        const isLt2M = file.size / 1024 / 1024 < 2;

        if (!isJPG) {
          this.$message.error('上传头像图片只能是 JPG 格式!');
        }
        if (!isLt2M) {
          this.$message.error('上传头像图片大小不能超过 2MB!');
        }
        return isJPG && isLt2M;
      }
    },
created(){
    this.name=this.$route.params.username


},
}
</script>

<style>
#rigth{
    width: 100%;
    height: 100%;
    overflow: auto;
}
.kuang{
    width: 50%;
    margin: 0 auto;
    padding-top: 30px;
}
.avatar-uploader .el-upload {
    border: 1px dashed #d9d9d9;
    border-radius: 6px;
    cursor: pointer;
    position: relative;
    overflow: hidden;
  }
  .avatar-uploader .el-upload:hover {
    border-color: #409EFF;
  }
  .avatar-uploader-icon {
    font-size: 28px;
    color: #8c939d;
    width: 178px;
    height: 178px;
    line-height: 178px;
    text-align: center;
  }
  .avatar {
    width: 178px;
    height: 178px;
    display: block;
  }
</style>
