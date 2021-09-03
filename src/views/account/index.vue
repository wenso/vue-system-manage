<template>
  <!--用户管理页面-->
  <div v-if="isChild" v-loading="isLoading">
    <!--搜索-->
    <SearchBox @search="searchList"
               :user-name="searchForm.userName"
    />
    <!--按钮-->
    <!--
    <div class="table-btns">
      <el-button><router-link to="/system/account-manage/add">添加用户</router-link></el-button>
      <el-button><router-link to="/system/account-manage/edit">编辑用户</router-link></el-button>
      <el-button>删除用户</el-button>
      <el-button>导出用户</el-button>
    </div>
    -->
    <!--用户列表-->

    <el-table :data="tableData">
      <el-table-column
          label="账号"
          prop="userName">

      </el-table-column>
      <el-table-column
          label="手机"
          prop="phone">

      </el-table-column>
      <el-table-column
          label="性别"
          prop="sex">

      </el-table-column>
      <el-table-column
          label="角色"
          prop="roles">

      </el-table-column>
      <el-table-column
          label="状态"
          prop="status">

      </el-table-column>
      <el-table-column
          label="创建时间"
          prop="createTime">

      </el-table-column>
      <el-table-column
        label="操作"
        fixed="right"
        class="controller">
        <el-button type="text"
                   size="small">详情</el-button>
        <el-button type="text"
                   size="small">修改</el-button>
        <el-button type="text"
                   size="small">删除</el-button>
      </el-table-column>

    </el-table>
  </div>
  <!--子路由-->
  <router-view v-else />
</template>
<script>

import ChildMixin from "@comps/mixins/ChildMixin";
import {searchAccounts} from "@apis/modules/account";
import SearchBox from "./components/SearchBox.vue";
import Pagination from "@comps/pagination/Pager.vue";
import TableBox from "@comps/templates/TableBox.vue";
export default {
  name: "AccountManage",
  components: {Pagination, SearchBox, TableBox},
  mixins:[ChildMixin],
  created() {
    this.searchList();
  },
  data() {
    return {
      //是否显示loading
      isLoading:false,
      isChild:true,
      //搜索框参数集
      searchForm:{
        //用户名
        userName:'',
        //电话号码
        phone:'',
        //开始时间
        startTime:'',
        //结束时间
        endTime:'',
        //页面数据数量
        limit:10,
        //页码
        page:1
      },
      tableData:[]
    };
  },
  methods:{
    /**
     * 搜索列表数据
     */
    searchList(param){
      this.isLoading=true;
      let _param=this.buildParam(param);
      searchAccounts(_param).then(response =>{
        console.log(response);
        this.searchForm.page=response.data.page;
        this.tableData=response.data.list;
        this.isLoading=false;
      })
    },
    /**
     * 重置搜索条件
     */
    resetList(){
      this.searchForm.limit=10;
      this.searchForm.page=1;
      this.searchList();
    },
    buildParam(param){
      param.limit=this.searchForm.limit;
      param.page=this.searchForm.page;
    }
  }
}
</script>

<style scoped>
.controller{ width: 200px;}

</style>