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
          <el-menu-item index="table">
            财务月报表
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
