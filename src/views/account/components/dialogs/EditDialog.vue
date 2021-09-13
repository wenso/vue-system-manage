<template>
  <el-dialog v-model="dialogVisible"
             :title="this.title"
              @close="handleClose">
    <template #title>
      <div class="dialog-header">
        <span class="title">{{this.title}}</span>
      </div>
    </template>
    <el-form ref="EditForm"
             :model="userData"
             :rules="userRules"
             label-width="100px">
      <el-form-item label="账号" prop="account">
        <el-input v-model="userData.account" disabled class="form-input"></el-input>
      </el-form-item>
      <el-form-item label="真实姓名" prop="realName">
        <el-input v-model="userData.realName"></el-input>
      </el-form-item>
      <el-form-item label="性别" prop="sex">
        <el-select v-model="userData.sex" clearable placeholder="请选择">
          <el-option
              v-for="item in sex"
              :key="item.value"
              :label="item.label"
              :value="item.value">
          </el-option>
        </el-select>
      </el-form-item>
      <el-form-item label="年龄" prop="age">
        <el-input-number
            v-model="userData.age"
            controls-position="right"
            :min="1"
            :max="120"
        ></el-input-number>
      </el-form-item>
      <el-form-item label="手机" prop="phone">
        <el-input v-model="userData.phone"></el-input>
      </el-form-item>
      <el-form-item label="状态" prop="status">
        <el-select v-model="userData.status" clearable placeholder="请选择" class="search-select">
          <el-option
              v-for="item in status"
              :key="item.value"
              :label="item.label"
              :value="item.value">
          </el-option>
        </el-select>
      </el-form-item>
      <el-form-item label="备注" prop="remarks">
        <el-input v-model="userData.remarks"
                  type="textarea"
                  placeholder="请输入内容"
                  maxlength="240"
                  show-word-limit>
        </el-input>
      </el-form-item>
    </el-form>

    <template #footer>
      <div class="dialog-footer">
        <el-button type="danger" @click="handleClose">取消</el-button>
        <el-button type="primary" @click="this.handleConfirm">确认</el-button>
      </div>
    </template>
  </el-dialog>
</template>

<script>
import {editAccount,accountDetail} from "@apis/modules/account";
import {ElMessage} from "element-plus";

export default {
  name: "EditDialog",
  data(){
    return{
      //是否为加载状态
      isLoading:false,
      //是否显示当前组件
      dialogVisible: false,
      //当前form数据
      userData: {},
      //状态数据
      status:[{
          value: 'active',
          label: '启用'
        },{
          value: 'lock',
          label: '锁定'
        },{
          value: 'disable',
          label: '停用'
      }],
      //性别数据
      sex:[{
          value: 1,
          label: '男'
        },{
          value: 0,
          label: '女'
      }],
      //提交验证
      userRules: this.buildRules()
    }
  },
  watch:{
    //监听user参数变化
    user(newVal,oldData){
      if(newVal){
        this.getDetail(newVal.id);
      }
    },
    //监听显示状态变化
    visible(newVal,oldData){
      this.dialogVisible=newVal;
    }
  },
  props:{
    //用户对象参数
    user:{
      type:Object,
      require:true
    },
    //dialog标题
    title: {
      type: String,
      default: 'title'
    },
    //dialog显示状态
    visible: {
      type: Boolean,
      default: false
    }
  },
  emits:["close","confirm"],
  methods:{
    /**
     * 获取用户详情信息
     */
    getDetail(id){
      this.isLoading=true;
      accountDetail({id:id}).then(response=>{
        this.userData=response.data;
        this.isLoading=false;
      })
    },
    /**
     * 提交编辑后的用户信息
     */
    handleConfirm(){
      this.isLoading=true;
      let param=this.buildParam(this.userData.id);
      this.$refs["EditForm"].validate((valid) => {
        if (valid) {
          editAccount(param).then(response => {
            ElMessage.success(response.desc);
            this.dialogVisible = false;
            this.$emit("close");
            this.isLoading = false;

          })
        }
      })
    },
    /**
     * 关闭dialog
     */
    handleClose(){
      this.dialogVisible=false;
      this.$emit("close");
    },
    /**
     * 构建编辑用户信息参数
     * @param val
     * @returns {default.user}
     */
    buildParam(val){
      return this.userData;
    },
    /**
     * 构建验证规则
     * @returns {{sex: [{trigger: string, message: string, required: boolean}], age: [{validator(*, *=, *): void, trigger: string}, {trigger: string, message: string, required: boolean}], remarks: [{max: number, trigger: string, message: string}], status: [{trigger: string, message: string}]}}
     */
    buildRules(){
      return {
        account:[{
          validator:(rule, value, callback)=> {
            if (/^[a-zA-Z0-9\u4e00-\u9fa5]+$/.test(value) === false) {
              callback(new Error("请填写汉字、大小写字母或数字"));
            } else {
              callback();
            }
          },
          trigger: 'blur'
        },{
          required: true,
          message: "请选择性别",
          trigger: 'blur'
        }],
        sex: [{
          required: true,
          message: "请选择性别",
          trigger: 'blur'
        }],
        age: [{
          required: true,
          message: "请填写年龄",
          trigger: 'blur'
        }],
        status: [{
          message: "请选择状态",
          trigger: 'blur'
        }],
        remarks: [
          //{ required: true, message: '请输入备注行', trigger: 'blur' },
          {
            max: 240,
            message: '输入不能超过240个字符',
            trigger: 'blur'
          }]
      }
    }
  }
}
</script>

<style scoped>
.form-input{ width: 180px;}
.dialog-header{ height: 30px; line-height: 30px;}
.dialog-footer{}
.dialog-header .title{ float:left; font-size: 1.4em; padding-left: 10px;}
</style>