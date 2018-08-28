<template>
  <el-container>
  <el-header><header-view></header-view></el-header>
  <el-container>
    <el-aside width="20%"><menu-view></menu-view></el-aside>
    <el-main><nuxt /></el-main>
  </el-container>
</el-container>
</template>

<script>
import Header from './header'
import Menu from './menu'

export default {
  components: {
    HeaderView: Header,
    MenuView: Menu
  }
}
</script>
<style>
  body{
    font-family: "微软雅黑";
  }
  .el-header {
    background-color: #B3C0D1;
    color: #333;
    text-align: center;
    line-height: 60px;
  }
  .el-aside {
    background-color: rgb(84, 92, 100);
    color: #333;
    text-align: center;
  }
  .el-main {
    background-color: #E9EEF3;
    color: #333;
    text-align: center;
  }
  .el-menu{
    border:none;
  }
</style>
