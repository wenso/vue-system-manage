<template>
  <el-dialog v-model="dialogVisible"
             :title="this.title"
             @close="handleClose">
    <template #title>
      <div class="dialog-header">
        <span class="title">{{this.title}}</span>
      </div>
    </template>
    <el-descriptions :column="1" border label-class-name="desc-label" class-name="desc-content">
      <el-descriptions-item >
        <template #label>
          账号
        </template>
        {{userData.account}}
      </el-descriptions-item>

      <el-descriptions-item>
        <template #label>
          真实姓名
        </template>
        {{userData.realName}}
      </el-descriptions-item>

      <el-descriptions-item>
        <template #label>
          角色
        </template>
        {{formatterRoleName(userData.roles)}}
      </el-descriptions-item>

      <el-descriptions-item>
        <template #label>
          性别
        </template>
        {{formatterSex(userData.sex)}}
      </el-descriptions-item>

      <el-descriptions-item>
        <template #label>
          年龄
        </template>
        {{userData.age}}
      </el-descriptions-item>

      <el-descriptions-item>
        <template #label>
          手机
        </template>
        {{userData.phone}}
      </el-descriptions-item>

      <el-descriptions-item>
        <template #label>
          状态
        </template>
        <span v-html="formatterStatus(userData.status)"></span>
      </el-descriptions-item>

      <el-descriptions-item>
        <template #label>
          备注
        </template>
        {{userData.remarks}}
      </el-descriptions-item>
    </el-descriptions>

    <template #footer>
      <div class="dialog-footer">
        <el-button type="primary" @click="handleClose">确认</el-button>
      </div>
    </template>
  </el-dialog>
</template>

<script>
import {accountDetail} from "@apis/modules/account";
import {ElMessage} from "element-plus";
import {getAccountStatus, getRoleName, getSex} from "../../../../utils/dict";

export default {
  name: "DetailDialog",
  data(){
    return{
      //是否为加载状态
      isLoading:false,
      //是否显示当前组件
      dialogVisible: false,
      //当前form数据
      userData: {},
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
     * 格式化状态 当使用prop赋值时，入参为(row，column),使用row[column.property]取值
     */
    formatterStatus(val){
      let tag="";
      switch(val){
        case "active":
          tag='<span class="tag fc-green">'+getAccountStatus(val)+'</span>'
          break;
        case "lock":
          tag='<span class="tag fc-red">'+getAccountStatus(val)+'</span>'
          break;
        case "disable":
          tag='<span class="tag fc-gray">'+getAccountStatus(val)+'</span>'
          break;
        default:
          break;
      }
      return tag
    },
    /**
     * 格式化权限
     */
    formatterRoleName(val){
      return getRoleName(val)
    },
    /**
     * 格式化性别
     */
    formatterSex(val){
      return getSex(val)
    }
  }
}
</script>

<style scoped>
.desc-label{ width: 100px;}
.desc-content{}
.dialog-header{ height: 30px; line-height: 30px;}
.dialog-footer{}
.dialog-header .title{ float:left; font-size: 1.4em; padding-left: 10px;}
</style>