<template>
  <el-row class="tac" width="100%">
    <el-col>
      <el-menu
        default-active="ksincome"
        :router="true"
        class="el-menu-vertical-demo"
        background-color="#545c64"
        text-color="#fff"
        active-text-color="#ffd04b"
        :active="1"
        id="leftnav">
        <el-submenu index="1">
          <template slot="title" style="text-align: left;">
            <i class="el-icon-location"></i>
            <span>财务报表</span>
          </template>
          <el-menu-item index="ksincome">
            2.3 科室收入
          </el-menu-item>
          <el-menu-item index="employee">
            2.3.1 人员报表
          </el-menu-item>
          <el-menu-item index="hospital">
            3.3.1 武钢
          </el-menu-item>
          <el-menu-item index="ksincome_month">
            3.3.2 科室收入月报
          </el-menu-item>
          <el-menu-item index="workload">
            3.3.3 科室收入及工作量报表
          </el-menu-item>
        </el-submenu>
      </el-menu>
    </el-col>
  </el-row>
</template>

<script>
export default {
  computed: {
  },
  methods: {
  }
}
</script>
<style>
#leftnav .el-submenu__title, #leftnav .el-submenu .el-menu-item{
  text-align: left;
}
</style>
