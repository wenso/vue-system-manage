<template>
  <el-dialog :visible.sync="dialogVisible" title="添加账号">
    <el-form>
      <el-form-item label="账号">
        <el-input v-model="userData.account"></el-input>
      </el-form-item>
      <el-form-item label="真实姓名">
        <el-input v-model="userData.realName"></el-input>
      </el-form-item>
      <el-form-item label="性别">
        <el-input v-model="userData.sex"></el-input>
      </el-form-item>
      <el-form-item label="年龄">
        <el-input v-model="userData.age"></el-input>
      </el-form-item>
      <el-form-item label="手机">
        <el-input v-model="userData.phone"></el-input>
      </el-form-item>
      <el-form-item label="状态">
        <el-input v-model="userData.status"></el-input>
      </el-form-item>
      <el-form-item label="备注">
        <el-input v-model="userData.remarks"></el-input>
      </el-form-item>

    </el-form>
    <div class="dialog-footer">
      <el-button type="danger" @click="dialogVisible=false">取消</el-button>
      <el-button type="primary" @click="handleConfirm">确认</el-button>
    </div>
  </el-dialog>
</template>

<script>
export default {
  name: "editDialog",
  data(){
    return{
      dialogVisible: false,
      userData:this.user
    }
  },
  props:{
    user:{
      type:Object,
      require:true
    }
  },
  /**
   * 添加账号
   */
  handleConfirm(){

  }
}
</script>

<style scoped>

</style>