<template>
    <div id="rigth">
<Head :name='name'></Head>
        1
    </div>
</template>

<script>
import axios from 'axios'
import Head from '@/page/pagerouter/head'
export default {
data(){
    return{
        name:''
    }
},
components:{
Head
},
created(){
    this.name=this.$route.params.username


},
mounted(){
       axios.get('https://elm.cangdu.org/admin/login').then((res)=>{
        console.log(res)
    })
}
}
</script>

<style>
#rigth{
    width: 100%;
    height: 100%;
}
</style>
