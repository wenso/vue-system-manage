<template>
  <div class="dialog-wrapper">
    <el-dialog
        title="确认提示"
        v-model="visible"
        :close-on-click-modal="false"
        @close="handleClose"
        width="400px">
      <div class="dialog-content">
        <slot>

        </slot>
      </div>
      <div slot="footer" class="dialog-footer">
        <el-button class="dialog-btn" @click="handleClose" >取消</el-button>
        <el-button class="dialog-btn" @click="handleConfirm" style="background: #333333; color: #e5e5e5;">确认</el-button>
      </div>
    </el-dialog>
  </div>
</template>

<script>
export default {
  name:"DialogConfirm",
  props:{
    dialogTitle:{
      type:String,
      default:"标题"
    },
    visible:{
      type:Boolean,
      default:false
    }
  },
  data() {
    return {

    };
  },
  computed:{
    dialogVisible:{
      get(){
        return this.visible
      },
      //改变visible值的时候，触发父组件updateVisible方法
      set(val){
        this.$emit("handleVisible",val);
      }
    }
  },
  methods: {
    handleConfirm() {
      this.$emit("handleConfirm");
    },
    handleClose() {
      this.$emit("handleClose");
    }
  }
};
</script>

<style scoped>
.dialog-wrapper {
  padding: 0 0 0 100px;
  position: relative;
  font-size: 14px;
}
.dialog-content{ padding: 20px; padding-bottom:50px;}
.dialog-btn{
  width:100px; font-weight: bold;
  height: 30px; line-height: 12px !important;
}


</style>
