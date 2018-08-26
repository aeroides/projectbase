<template>
  <div class="header">
    <div class="logo">登录管理系统</div>
    <div class="user-info">
      <el-button @click="logout">退出</el-button>
    </div>
  </div>
</template>
<script>
export default {
  data () {
    return {
      name: 'linxin'
    }
  },
  computed: {
    username () {
      let username = sessionStorage.getItem('ms_username')
      return username
    }
  },
  methods: {
    handleCommand (command) {
      if (command === 'loginout') {
        sessionStorage.removeItem('ms_username')
        sessionStorage.removeItem('ms_userId')
        this.$router.push('/')
      }
    },
    logout () {
      this.$store.dispatch('logout', {
        user_id: this.$store.state.authUser.id,
        token: this.$store.state.authUser.token
      }).then(res => {
        this.$router.replace('/user/login')
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
  width:250px;
  text-align: center;
  background:url('../build/logo.png') center left no-repeat;
  background-size:40px;
}
.user-info {
  float: right;
}
</style>
