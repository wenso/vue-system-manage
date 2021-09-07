<template>
  <!--用户管理页面-->
  <div v-if="isChild" v-loading="isLoading">
    <!--搜索-->
    <SearchBox @search="searchList"
               @reset="resetList"
               :condition="this.condition" />
    <!--按钮-->

    <div class="table-btns">
      <el-button type="primary" @click="addAccount">添加用户</el-button>
      <el-button type="primary" @click="exportData">导出数据</el-button>
    </div>

    <!--用户列表-->
    <DataTable @refresh="refreshList"
               @edit="editRow"
               @info="infoRow"
               :data="this.tableData" />
    <!--分页-->
    <NeuPager @size-change="handleSizeChange"
              @current-change="handleCurrentChange"
              class="pagination"
              :current-page.sync="this.page"
              :total="this.total"
              :page-sizes="[2,10]"
              :page-size="this.limit" />
  </div>
  <!--子路由-->
  <router-view v-else />
</template>
<script>

import ChildMixin from "@comps/mixins/ChildMixin";
import {searchAccounts} from "@apis/modules/account";
import NeuPager from "@comps/pagination/NeuPager.vue";
import TableBox from "@comps/templates/TableBox.vue";
import SearchBox from "./components/SearchBox.vue";
import {toDateTime} from "@/utils/obj";
import DataTable from "./components/DataTable";

export default {
  name: "AccountManage",
  components: {DataTable, SearchBox, TableBox, NeuPager},
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
      condition:{
        //用户名
        account:'',
        //状态
        status:'',
        //电话号码
        phone:'',
        //创建时间
        createTime:[]
      },
      //页面数据数量
      limit:2,
      //页码
      page:1,
      //数据总量
      total:0,
      //表格数据
      tableData:[]
    };
  },
  methods:{
    /**
     * 搜索列表数据
     * @param val 子组件传递的值，condition对象
     */
    searchList(val){
      this.isLoading=true;
      //转义为符合接口协议的参数名
      let param=this.buildParam(val);
      //执行访问服务端搜索数据列表接口
      searchAccounts(param).then(response =>{
        this.page=response.data.page;
        this.total=response.data.total;
        this.tableData=response.data.list;
        this.isLoading=false;
      })
    },
    /**
     * 重置搜索条件
     */
    resetList(val){
      this.condition=val;
      this.page=1;
      this.searchList();
    },
    /**
     * 刷新列表数据
     */
    refreshList(){
      this.searchList();
    },
    /**
     * 编辑列表数据
     */
    editRow(data){
      //弹出编辑 dialog
    },
    /**
     * 详情数据
     */
    infoRow(data){
      //弹出编辑 dialog
    },
    /**
     * 添加用户数据
     */
    addAccount(){
      //添加用户
    },
    /**
     * 导出符合条件的条件数据
     */
    exportData(){
      //导出数据
    },
    /**
     * 单页数据量pageSize发生变化
     */
    handleSizeChange(val){
      this.limit=val.limit;
      this.page=val.page;
      this.searchList();
    },
     /**
     * 当前页码发生变化
     */
    handleCurrentChange(val){
      this.limit=val.limit;
      this.page=val.page;
      this.searchList();
    },
    /**
     * 构造获取列表数据参数
     * @param data
     * @returns {*}
     */
    buildParam(data){
      //也合并生成一个新的对象
      let param={};
      param.startTime=toDateTime(this.condition.createTime[0]);
      param.endTime=toDateTime(this.condition.createTime[1]);
      param.account=this.condition.account;
      param.phone=this.condition.phone;
      param.status=this.condition.status;
      param.limit=this.limit;
      param.page=this.page;
      return param;
    }
  }
}
</script>

<style scoped>
.table-btns{ text-align: left; margin: 10px; }
</style>