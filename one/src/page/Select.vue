<template>
<div id="bg">
    <div class="bg">
        <h1>elm后台管理系统</h1>
        <div>
            <input type="text" name="" id="" placeholder="用户名" v-model="name"><br>
            <input type="password" name="" id="" placeholder="密码"  v-model="psd"><br>
            <button @click="sub">登录</button>
            <p>温馨提示 <br>未登录过的新用户，自动注册 <br> 注册过的用户可凭账号密码登录</p>
        </div>
        
    </div>
</div>
</template>

<script>
import axios from 'axios'
export default {
data(){
    return{
        name:'',
        psd:''
    }
},
methods:{
sub(){
    let data={password: this.psd,
user_name:this.name}
    console.log(data)
    axios.post('https://elm.cangdu.org/admin/login',data).then((res)=>{
        console.log(res)
    })
    this.$router.push('./title')
}
}
}

</script>

<style lang='scss' scoped>
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
    
    div{
        padding-top:20px;
        padding-bottom: 10px;
    background: white;
    p{
        color: red;
        width: 100%;
    }
    }
    input{

        width: 300px;
        height: 30px;
        font-size: 20px;
        margin-top: 20px;
    }
    button{
        border-radius:10px; 
        width: 300px;
        height: 30px;
        outline: none;
        border: none;
        font-size: 15px;
        background: #20a0ff;
        margin-top: 20px;
    }

}
</style>
