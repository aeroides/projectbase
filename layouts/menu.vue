<template>
  <el-row class="tac" width="100%">
    <el-col>
      <el-menu
        :default-active="activeIndex"
        class="el-menu-vertical-demo"
        background-color="#545c64"
        text-color="#fff"
        active-text-color="#ffd04b">
        <el-submenu index="1">
          <template slot="title">
            <i class="el-icon-location"></i>
            <span>财务报表</span>
          </template>
          <el-menu-item index="table/ksincome">
            2.3 科室收入
          </el-menu-item>
          <el-menu-item index="table/employee">
            2.3.1 人员报表
          </el-menu-item>
          <el-menu-item index="table/hospital">
            3.3.1 武钢
          </el-menu-item>
          <el-menu-item index="table/ksincome_month">
            3.3.2 科室收入月报
          </el-menu-item>
          <el-menu-item index="table/workload">
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
    activeIndex () {
      return this.$route.path.replace('/', '')
    }
  },
  methods: {
  }
}
</script>
