<template>
  <el-button v-bind="$attrs" :disabled="hasPerms(permId)">
    <slot></slot>
  </el-button>
</template>

<script>
import {hasPermission} from "@/store/permission";

export default {
  name: "PermButton",
  data(){
    return {}
  },
  props:{
    //权限标识 菜单:页面:按钮
    permId:{
      type:String,
      default:null
    }
  },
  methods:{
    /**
     * 查看store中是否包含该权限标识
     * @param permId
     * @returns {boolean}
     */
    hasPerms:function(permId){
      return !hasPermission(permId);
    }
  }
}
</script>

<style scoped>

</style>