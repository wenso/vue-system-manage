<template>
  <div class="search-box-container">
    <el-card class="search-box">
      <el-form :inline="true" class="search-form">
        <el-form-item
          label="用户名">
          <el-input v-model="this.condition.account"
                    placeholder="账号"
                    maxlength="16"
                    class="search-input"
                    clearable/>
        </el-form-item>
        <el-form-item
            label="手机">
          <el-input v-model="this.condition.phone"
                    placeholder="手机号码"
                    maxlength="11"
                    class="search-input"
                    clearable/>
        </el-form-item>
        <el-form-item
            label="状态">
          <el-select v-model="this.condition.status" clearable placeholder="请选择" class="search-select">
            <el-option
                v-for="item in status"
                :key="item.value"
                :label="item.label"
                :value="item.value">
            </el-option>
          </el-select>
        </el-form-item>
        <el-form-item
            label="创建时间">
          <el-date-picker
              v-model="this.condition.createdTime"
              type="daterange"
              range-separator="-"
              start-placeholder="开始日期"
              end-placeholder="结束日期"
              >
          </el-date-picker>
        </el-form-item>
      </el-form>
      <div class="search-btns">
        <el-button @click="handleSearch"
                   class="search-btn"
                   icon="el-icon-search">
          搜索
        </el-button>
        <el-button @click="handleReset"
                   class="reset-btn"
                   icon="el-icon-brush">
          重置
        </el-button>
      </div>
    </el-card>
  </div>
</template>
<script>
import {toDateTime,getArrObj} from "@utils/obj";

export default {
  name: "SearchBox",
  data(){
    return{
      //搜索框参数集
      condition:{
        //用户名
        account:'',
        //状态
        status:'',
        //电话号码
        phone:'',
        //创建时间
        createdTime:[]
      },
      //状态数据
      status:[{
          value: 'active',
          label: '启用'
        }, {
          value: 'lock',
          label: '锁定'
        }, {
          value: 'disable',
          label: '停用'
      }]
    }
  },
  emits: ['search','reset'],
  methods:{
    /**
     * 点击搜索按钮
     */
    handleSearch(){
      this.$emit('search',this.getBuildParam(this.condition));
    },
    /**
     * 点击重置按钮
     */
    handleReset(){
      this.condition=this.getDefaultParam();
      this.$emit('reset',this.condition);
    },
    /**
     * 构建参数
     */
    getBuildParam(condition){
      return {
        //用户名
        account:condition.account,
        //状态
        status:condition.status,
        //电话号码
        phone:condition.phone,
        //创建时间
        createdTime:condition.createdTime,
        //起始时间
        startTime:toDateTime(getArrObj(condition.createdTime,0)),
        //结束时间
        endTime:toDateTime(getArrObj(condition.createdTime,1))
      }
    },
    /**
     * 获取默认搜索参数
     */
    getDefaultParam(){
      return {
        //用户名
        account:'',
        //状态
        status:'',
        //电话号码
        phone:'',
        //开始时间
        createdTime:[],
        //起始时间
        startTime:null,
        //结束时间
        endTime:null
      }
    }
  }
}
</script>

<style scoped>
  .search-form{ float: left; display: inline;}
  .search-btns{ float: right; display: inline; }
  .search-btn{ }
  .reset-btn{}
  .search-input{ width: 140px; }
  .search-select{ width: 120px;}
</style>