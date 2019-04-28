<template>
    <div id="head">
         <el-header style="text-align: left;  font-size: 12px">
		 <span>{{name}}</span>
		</el-header>
    </div>
</template>

<script>
export default {
props:[
    'name'
    ]
}
</script>

<style>
#head{
    width: 100%;
    background: red;
}
</style>
