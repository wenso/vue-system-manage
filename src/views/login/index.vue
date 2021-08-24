<template>
  <!--登录面板-->
  <div class="login-box welcome">
    <div class="title">
      <span>后台管理系统</span>
    </div>
    <div class="login-from r">
      <el-form
        ref="loginForm"
        :model="loginForm"
        class="form">
        <el-form-item prop="username">
          <el-input
            class="input-text"
            v-model="loginForm.username"
            placeholder="账号"
            :maxlength="32"
            prefix-icon="el-icon-user">
          </el-input>
        </el-form-item>
        <el-form-item prop="password">
          <el-input
            class="input-text"
            v-model="loginForm.password"
            placeholder="密码"
            :maxlength="32"
            prefix-icon="el-icon-unlock"
            :show-password="loginForm.showPassword">
          </el-input>
        </el-form-item>
        <el-form-item prop="verifyCode">
          <el-input
            class="input-text"
            v-model="loginForm.verifyCode"
            placeholder="验证码"
            :maxlength="8"
            prefix-icon="el-icon-present">
          </el-input>
          <img id="captcha-img"
               class="captcha-img"
               :src="captchaImg"
               @click="refreshCode"
               alt=""/>
        </el-form-item>
        <el-form-item>
            <el-button
              class="login-btn"
              :disabled=isLoading
              @click="login">
              登录
            </el-button>
        </el-form-item>
      </el-form>
    </div>
  </div>
</template>

<script>
import {login} from "@apis/modules/login";
import Cache from "@utils/cache";
export default {
  name: "Login",
  data(){
    return {
      //是否显示loading
      isLoading:false,
      //验证码图片base64
      captchaImg:'',
      //登录表单参数集合
      loginForm:{
        //账号
        username:'',
        //密码
        password:'',
        //验证码
        verifyCode:'',
        //是否记住密码
        remember:false,
        //是否查看密码原文
        showPassword:false
      }
    }
  },
  methods:{
    /**
     * 登录
     */
    login(){
      let param=this.buildParam();
      this.isLoading=true;
      login(param).then(res=>{
        Cache.setLS("token",res.data)
        console.log(res);
        this.isLoading=false;
        this.$router.push("/");
      }).catch((e) => {})
    },
    refreshCode(){
      console.log("刷新验证码");
    },
    /**
     * 组建参数
     * @param param
     * @returns {*}
     */
    buildParam(){
      return {
        username:this.loginForm.username,
        password:this.loginForm.password,
        verifyCode:this.loginForm.verifyCode
      };
    }
  }
}
</script>

<style scoped>

</style>