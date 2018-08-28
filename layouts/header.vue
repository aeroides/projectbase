<template>
  <div class="header">
    <div class="logo">武钢财务管理系统</div>
    <div class="user-info">
      <img src="../static/images/logout.png" @click="logout" />
    </div>
  </div>
</template>
<script>
export default {
  data () {
    return {
      username: 'admin'
    }
  },
  methods: {
    logout () {
      var self = this
      this.$confirm('您确定要退出吗?', '退出管理平台', {
        confirmButtonText: '确定',
        cancelButtonText: '取消'
      }).then(() => {
        self.$store.dispatch('logout', {
          username: self.$store.state.authUser.username,
          token: self.$store.state.authUser.token
        }).then(() => {
          location.reload()
        }).catch((err) => {
          console.log(err)
        })
      })
    }
  }
}
</script>
<style scoped>
.header {
  position: relative;
  box-sizing: border-box;
  width: 100%;
  font-size: 22px;
  color: #fff;
}
.header .logo{
  float: left;
  width:22%;
  text-align: center;
  background:url('../build/logo.png') center left no-repeat;
  background-size:40px;
}
.user-info {
  float: right;
}
.user-info img{
  height: 25px;
  vertical-align: middle;
  cursor: pointer;
}
</style>
