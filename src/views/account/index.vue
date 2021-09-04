<template>
  <!--用户管理页面-->
  <div v-if="isChild" v-loading="isLoading">
    <!--搜索-->
    <SearchBox @search="searchList"
               @reset="resetList"
               :user-name="this.searchForm.account"
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
      <el-table :data="tableData" class="data_table">
        <el-table-column
            label="账号"
            prop="account">

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
          class="table_controller">
          <template #default="scope">
            <el-button
                @click.prevent="deleteRow(scope.$index, tableData)"
                type="text">
              删除
            </el-button>
            <el-button
                @click.prevent="editRow(scope.$index, tableData)"
                type="text">
              编辑
            </el-button>
            <el-button
                @click.prevent="infoRow(scope.$index, tableData)"
                type="text">
              详情
            </el-button>
          </template>

        </el-table-column>

      </el-table>
    <NeuPager @size-change="handleSizeChange"
              @current-change="handleCurrentChange"
              class="pagination"
              :current-page.sync="this.searchForm.page"
              :total="this.total"
              :small=true
              :page-sizes="[2,10]"
              :page-size="this.searchForm.limit" />
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
export default {
  name: "AccountManage",
  components: { SearchBox, TableBox, NeuPager},
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
        account:'',
        //电话号码
        phone:'',
        //开始时间
        startTime:'',
        //结束时间
        endTime:'',
        //页面数据数量
        limit:2,
        //页码
        page:1
      },
      total:0,
      tableData:[]
    };
  },
  methods:{
    /**
     * 搜索列表数据
     * @param val 子组件传递的值，可能为空
     */
    searchList(val){
      this.isLoading=true;
      //转义为符合接口协议的参数名
      let param=this.buildParam(val);
      //执行访问服务端搜索数据列表接口
      searchAccounts(param).then(response =>{
        this.searchForm.page=response.data.page;
        this.total=response.data.total;
        this.tableData=response.data.list;
        this.isLoading=false;
      })
    },
    /**
     * 重置搜索条件
     */
    resetList(){
      this.searchForm.page=1;
      this.searchList();
    },
    handleSizeChange(val){
      this.searchForm.limit=val.limit;
      this.searchForm.page=val.page;
      this.searchList();
    },
    handleCurrentChange(val){
      this.searchForm.limit=val.limit;
      this.searchForm.page=val.page;
      this.searchList();
    },
    /**
     * 构造获取列表数据参数
     * @param data
     * @returns {*}
     */
    buildParam(data){
      //如果data为空，也合并生成一个空的对象
      let param=data?data:{};
      param.limit=this.searchForm.limit;
      param.page=this.searchForm.page;
      return param;
    },
    /**
     * 删除指定数据
     * @param index 数据索引
     * @param data
     */
    deleteRow(index,data){
      console.log(index.data);
    },
    /**
     * 查看指定数据
     * @param index 数据索引
     * @param data
     */
    infoRow(index,data){
      console.log(index.data);
    },
    /**
     * 编辑指定数据
     * @param index 数据索引
     * @param data
     */
    editRow(index,data){
      console.log(index.data);
    }
  }
}
</script>

<style scoped>

</style>