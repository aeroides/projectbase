<template>
  <el-form :model="loginForm" :rules="rules2" ref="loginForm" label-position="left" label-width="0px" class="demo-ruleForm login-container">
    <h3 class="title">系统登录</h3>
    <el-form-item prop="username">
      <el-input type="text" v-model="loginForm.username" auto-complete="off" placeholder="账号"></el-input>
    </el-form-item>
    <el-form-item prop="password">
      <el-input type="password" v-model="loginForm.password" auto-complete="off" placeholder="密码"></el-input>
    </el-form-item>
    <el-checkbox v-model="checked" checked class="remember">记住密码</el-checkbox>
    <el-form-item style="width:100%;">
      <el-button type="primary" style="width:100%;" @click.native.prevent="login" :loading="logining">登录</el-button>
      <!--<el-button @click.native.prevent="handleReset2">重置</el-button>-->
    </el-form-item>
  </el-form>
</template>

<script>
export default {
  layout: 'login',
  data () {
    return {
      logining: false,
      loginForm: {
        username: '',
        password: ''
      },
      rules2: {
        username: [
          { required: true, message: '请输入账号', trigger: 'blur' }
        ],
        password: [
          { required: true, message: '请输入密码', trigger: 'blur' }
        ]
      },
      checked: true
    }
  },
  methods: {
    login () {
      this.$refs.loginForm.validate((valid) => {
        if (valid) {
          this.$store.dispatch('login', {
            username: this.loginForm.username,
            password: this.loginForm.password
          }).then(res => {
            if (this.$store.state.authUser !== null) {
              this.$router.replace('/table/ksstatic')
            }
            if (this.$store.state.loginInfo !== null) {
              let msg = this.$store.state.loginInfo
              this.$notify({
                title: '警告1',
                message: `${msg}`,
                type: 'error'
              })
            }
          }).catch(err => {
            this.$notify({
              title: '警告2',
              message: `${err.message}`,
              type: 'error'
            })
          })
        }
      })
    }
  }
}
</script>
<style>
.el-checkbox{
  margin-bottom: 22px;
}
</style>
