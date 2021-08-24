<template>
  <div class="search-box-container">
    <el-card class="search-box">
      <el-form>
        <el-row :gutter="8" class="search-box-row" type="flex">
          <el-col :span="6">
            <el-form-item
              label="用户名"
              size="small">
              <el-input v-model="username"
                        placeholder="请输入用户名"
                        size="small"
                        maxlength="30"/>
            </el-form-item>
          </el-col>
          <el-col :span="6">
            <el-button @click="handleSearch"
                       class="search-btn"
                       size="small"
                       icon="el-icon-search">
              搜索
            </el-button>
            <el-button @click="handleReset"
                       class="reset-btn"
                       size="small"
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
  props:{

  },
  computed:{
    //用户名
    username:{
      get(){
        return this.username
      },
      set(val){
        this.$emit("update:username",val)
      }
    }
  },
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
        this.username='';
        this.handleSearch();
    },
    /**
     * 组装参数
     * @returns {{username: *}}
     */
    buildParam(){
      let searchForm={
        username:this.username
      }
      return searchForm;
    }
  }

}
</script>

<style scoped>

</style>