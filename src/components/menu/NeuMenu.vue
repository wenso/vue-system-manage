<template>
  <el-scrollbar
      wrap-class="scrollbar-wrapper"
      view-class="scrollbar-view"
      class="menu-v"
  >
    <el-menu
        :default-active="activeMenu"
        :collapse="collapse"
        background-color="#0e334c"
        text-color="#adb3b8"
        active-text-color="#eeeeee"
        unique-opened
        mode="vertical"
        class="aside-menu"
    >
      <magic-menu-item
          v-for="route in routes"
          :key="route.path"
          :item="route"
          :base-path="route.path"
      />
    </el-menu>
  </el-scrollbar>
</template>

<script>
export default {
  name: "NeuMenu",
  data(){
    return {}
  },
  props:{
    //是否展开
    isCollapse:{
      type:Boolean,
      default:false
    },
    routes:{
      type:Array,
      default:function(){
        return []
      },
      required:true
    }
  },
  computed:{

  }
}
</script>

<style scoped>

</style>