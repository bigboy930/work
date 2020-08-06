<template>
  <div class="login-wrap">
    <div class="inner">
      <div class="form">
        <div>
          <label for="user-id">ID</label>
          <input id="user-id" type="text" name="id" placeholder="ID" v-model="userId">
          <label for="user-pwd">PASSWORD</label>
          <input id="user-pwd" type="password" name="password" placeholder="password" v-model="userPwd">
          <template v-if="!isLogin">
            <input id="user-pwd" type="password" name="password" placeholder="check password" v-model="userPwd2">
          </template>
          <input v-if="isLogin" type="submit" @click="signIn" value="로그인">
          <input v-else type="submit" @click="signUp" value="회원가입">
        </div>
        <div class="btn-signup">
          <span v-if="isLogin" @click="formSignUp">회원가입</span>
          <span v-else @click="formSignIn">로그인</span>
        </div>
      </div>

      <!-- <form action="/api/auth/signin" method="post">
        <input type="text" name="username">
        <input type="text" name="password">
        <input type="submit">
      </form> -->
    </div>
  </div>
</template>

<script>
export default {
  data(){
    return {
      isLogin: true,
      userId: "",
      userPwd: "",
      userPwd2: "",
    }
  },
  methods: {
    signIn(){
      console.log('aaa')
      this.$http.post('/api/auth/signin', {
        params: { userId: this.userId, userPwd: this.userPwd }
      })
        .then(result => {
          console.log('suc : ' , result)
        })
    },
    signUp(){
      if(this.userPwd === this.userPwd2){
        this.$http.post('/api/auth/signup',{
          params: { userId: this.userId, userPwd: this.userPwd }
        })
          .then(result => {
            this.isLogin = true;
          })
      }
    },
    formSignIn(){
      this.isLogin = true;
    },
    formSignUp(){
      this.isLogin = false;
    },
  }
}
</script>

<style scoped>
.login-wrap { display:table; height:100vh; margin:0 auto; text-align:left; }
.login-wrap .inner { display:table-cell; vertical-align:middle; }
.login-wrap .inner .form { display:inline-block; width:400px; }
.login-wrap input, .login-wrap label { width:100%; }
.login-wrap label { display:block; color:#999; margin-bottom:4px; }
.login-wrap input { font-size:15px;padding:15px; border-radius:3px; background-color:#ddd; margin-bottom:12px; }
.login-wrap input::placeholder { color:#999; }
.login-wrap input#user-id { margin-bottom:20px;}
.login-wrap input[type="submit"] { margin-top:30px; background-color:#333;color:#fff; font-size:16px; cursor:pointer; }
.btn-signup { text-align:center; cursor:pointer; margin-top:10px;}
</style>
