<template>
  <div class="header">
    <!--顶部用户信息-->
    <div class="user-box right">
      <div class="welcome">
          欢迎您，用户
      </div>
    </div>
  </div>
</template>
<script>
export default {
  name: "Header",
  data(){
    return{
    }
  }
}
</script>

<style scoped>
.header{ height: 60px; padding: 10px; color:#000; background: antiquewhite;}
.header a:link,
.header a:visited{ color:#000;}

.header a:hover,
.header a:active{ color:rgb(46,81,52);}
.welcome{ }
.welcome span{ color:#000;}
.user-box{ font-size: 1em;}

</style>