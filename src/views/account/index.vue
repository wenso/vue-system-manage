<template>
  <!--用户管理页面-->
  <div v-if="isChild" v-loading="isLoading">
    <!--搜索-->
    <SearchBox @search="searchList"
               @reset="resetList" />
    <!--按钮-->

    <div class="table-btns">
      <el-button type="primary" @click="addAccount">添加用户</el-button>
      <el-button type="primary" @click="exportData">导出数据</el-button>
      <perm-button type="primary" perm-id="system:account:add">上传图片</perm-button>
    </div>

    <!--用户列表-->
    <DataTable @refresh="refreshList"
               @edit="editRow"
               @detail="detailRow"
               ref="DataTable" />

    <!--添加弹窗-->
    <AddDialog title="添加账号" :visible.sync="showAddDialog" @close="closeDialog"></AddDialog>
    <!--编辑弹窗-->
    <EditDialog title="编辑账号" :visible.sync="showEditDialog" :user="this.currObj"  @close="closeDialog"></EditDialog>
    <!--详情弹窗-->
    <DetailDialog title="账号详情" :visible.sync="showDetailDialog" :user="this.currObj"  @close="closeDialog"></DetailDialog>
  </div>
  <!--子路由-->
  <router-view v-else />
</template>
<script>


import ChildMixin from "@comps/mixins/ChildMixin";
import PermButton from "@comps/permission/PermButton";
import DataTable from "./components/DataTable";
import SearchBox from "./components/SearchBox.vue";
import AddDialog from "./components/dialogs/AddDialog";
import EditDialog from "./components/dialogs/EditDialog";
import DetailDialog from "./components/dialogs/DetailDialog";

export default {
  name: "AccountManage",
  components: {DetailDialog, EditDialog, AddDialog, PermButton, DataTable, SearchBox},
  mixins:[ChildMixin],
  mounted() {
    this.searchList();
  },
  data() {
    return {
      //是否显示loading
      isLoading:false,
      isChild:true,
      //编辑弹窗
      showEditDialog:false,
      //添加弹窗
      showAddDialog:false,
      //详细弹窗
      showDetailDialog:false,
      //当前编辑或详情用户对象
      currObj:null
    }
  },
  methods:{

    /**
     * 重置搜索条件
     */
    resetList(val){
      this.$refs.DataTable.search(val);
    },
    /**
     * 刷新列表数据
     */
    refreshList(){
      this.$refs.DataTable.refresh();
    },
    /**
     * 搜索列表数据
     */
    searchList(val){
      this.$refs.DataTable.search(val);
    },
    /**
     * 编辑列表数据
     */
    editRow(data){
      //编辑用户弹窗显示
      this.currObj=data;
      this.showEditDialog=true;
    },
    /**
     * 详情数据
     */
    detailRow(data){
      //用户详情弹窗显示
      this.currObj=data;
      this.showDetailDialog=true;
    },
    /**
     * 添加用户数据
     */
    addAccount(){
      //添加用户弹窗显示
      this.showAddDialog=true
    },
    /**
     * 导出符合条件的条件数据
     */
    exportData(){
      //导出数据
    },
    /**
     * 关闭弹框
     */
    closeDialog(){
      this.showEditDialog=false;
      this.showAddDialog=false;
      this.showDetailDialog=false;
      this.currObj=null;
    }
  }
}
</script>

<style scoped>
.table-btns{ text-align: left; margin: 10px; }
</style>