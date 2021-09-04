<template>
  <div class="search-box-container">
    <el-card class="search-box">
      <el-form>
        <el-row :gutter="8" class="search-box-row" type="flex">
          <el-col :span="6">
            <el-form-item
              label="用户名">
              <el-input v-model="this.accountData"
                        :placeholder="this.placeholder"
                        size="small"
                        maxlength="30"/>
            </el-form-item>
          </el-col>
          <el-col :span="6">
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
          </el-col>
        </el-row>
      </el-form>
    </el-card>
  </div>
</template>
<script>

export default {
  name: "SearchBox",
  data(){
    return{
      //账号数据
      accountData:this.account,
    }
  },
  props:{
    //账号
    account:{
      type:String,
      default:''
    },
    //输入提示
    placeholder:{
      type:String,
      default:'请输入用户名'
    }
  },
  emits: ['search','reset'],
  methods:{
    /**
     * 点击搜索按钮
     */
    handleSearch(){
      this.$emit('search',this.buildParam());
    },
    /**
     * 点击重置按钮
     */
    handleReset(){
        this.accountData='';
        this.$emit('reset');
    },
    /**
     * 组装参数
     * @returns {{username: *}}
     */
    buildParam(){
      let searchForm={
        account:this.accountData
      }
      return searchForm;
    }
  }

}
</script>

<style scoped>

</style>