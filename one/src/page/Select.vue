<template>
<div id="bg">
  <transition name="form-fade" mode="in-out">
    <div class="bg" v-show="show">
        <h1>elm后台管理系统</h1>
        <div class="center">
           <el-form :model="ruleForm" status-icon :rules="rules" ref="ruleForm" label-width="100px" class="demo-ruleForm">
  <el-form-item label="用户名" prop="name">
    <el-input  v-model="ruleForm.name" autocomplete="off"></el-input>
  </el-form-item>
   <el-form-item label="密码" prop="pass">
    <el-input type="password" v-model="ruleForm.pass"></el-input>
  </el-form-item>
  <el-form-item>
    <el-button type="primary" @click="submitForm('ruleForm')" class="btn">提交</el-button>
  </el-form-item>
</el-form>
            <p>温馨提示 <br>未登录过的新用户，自动注册 <br> 注册过的用户可凭账号密码登录</p>
        </div>
        
    </div>
    		</transition>
</div>
</template>

<script>
import axios from 'axios'
export default {
data(){
    
        var validatePass = (rule, value, callback) => {
        if (!value) {
          return callback(new Error('用户名和密码不能为空'));
        }
         else {
          if (this.ruleForm.pass !== '') {
            this.$refs.ruleForm.validateField('checkPass');
          }
          callback();
        }
      };
    return{
        name:'',
        show:false,
         ruleForm: {
          name: '',
          pass: ''
        },
        rules: {
          name: [
            { validator:validatePass, trigger: 'blur' }
          ],
          pass: [
            { validator:validatePass, trigger: 'blur' }
          ]
        }
    }
},
mounted(){
console.log(this.$store.state.login)
this.show= true
},
methods:{
            submitForm(formName) {
         let data={password: this.ruleForm.pass,
user_name: this.ruleForm.name}
    console.log(data)

    axios.post('https://elm.cangdu.org/admin/login',data).then((res)=>{
        console.log(res)
         if(this.ruleForm.pass&&this.ruleForm.name&&res.data.status==1){
               	this.$message({
						     type:"success",
					      	message: '登录成功'
					});

              this.$router.push('./title')
    }else{
      	this.$notify.error({
						title: '错误',
						message: '请输入正确的账户密码'
					});
    }
   
     
    })
    },
      resetForm(formName) {
        this.$refs[formName].resetFields();
      }
    },
// sub(){
   
// }
}

</script>

<style lang='scss' scoped>

.form-fade-enter-active,
.form-fade-leave-ative {
	transition: all 2s;
}
.form-fade-enter, .form-fade-leave-ative /* .fade-leave-active below version 2.1.8 */ {
	transform: translate3d(0, -50px, 0);
	opacity: 0;
}
#bg{
  width: 100%;
  height: 100%;
  background: #324057;
    position: absolute;
top: 0;
}
.bg{
    position: absolute;

    left: 40%;
    top: 20%;
    height: 380px;
    width: 400px;
    text-align: center;
        h1{
            color: white;
        }
    
    .center{
    background: white;
    padding-right: 40px;
    padding-bottom: 20px;
    p{
        color: red;
        width: 100%;
    }
     .el-form{
        padding-right: 30px;
        padding-top: 20px;
        .btn{
            width: 100%;
        }
    }
    }
   


}
</style>
