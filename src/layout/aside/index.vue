<template>
  <!--侧栏Logo-->
  <div class="logo">

  </div>
  <el-aside class="aside">
    <!--侧栏菜单-->
    <el-menu :collapse="isCollapse">
      <el-menu-item index="1">
        <i class="el-icon-menu"></i>
        <router-link to="/dashboard"> 系统看板</router-link>
      </el-menu-item>
      <el-menu-item index="2">
        <i class="el-icon-menu"></i>
        <router-link to="/system/account-manage">用户管理</router-link>
      </el-menu-item>
      <el-menu-item>
        <i class="el-icon-menu"></i>
        <router-link to="/system/role-manage">角色管理</router-link>
      </el-menu-item>
      <el-menu-item>
        <i class="el-icon-menu"></i>
        <router-link to="/system/menu-manage">菜单管理</router-link>
      </el-menu-item>
    </el-menu>
  </el-aside>
</template>

<script>
export default {
  name: "Aside",
  data(){
    return {
      //菜单折叠状态，ture为是，false为否
      isCollapse:false
    }
  },
  methods:{
    /**
     * 改变当前侧栏折叠状态
     */
    changeAsideShow:function(){
      this.isCollapse=!this.isCollapse;
    }
  }
}
</script>

<style scoped>
.logo{ height:60px; background: #333333;}
.aside{ width:220px; height:100%; background:#a7c0d3;}

</style>