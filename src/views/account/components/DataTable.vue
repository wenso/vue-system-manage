<template>
  <el-table :data="tableData" class="data_table">
    <el-table-column
        label="账号"
        prop="account">

    </el-table-column>
    <el-table-column
        label="手机">
      <template #default="scope">
        {{scope.row.phone}}
      </template>
    </el-table-column>
    <el-table-column
        label="性别"
        prop="sex"
        :formatter="formatterSex">
    </el-table-column>
    <el-table-column
        label="角色"
        prop="roles"
        :formatter="formatterRoleName">
    </el-table-column>
    <el-table-column
        label="状态"
        prop="status"
        :formatter="formatterStatus">
    </el-table-column>
    <el-table-column
        label="创建时间"
        prop="createTime">
      <template #default="scope">
        {{scope.row.createTime}}
      </template>
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
</template>

<script>
import {deleteAccount,editAccount,accountDetail} from "@apis/modules/account"
import {getRoleName,getSex,getAccountStatus} from "../../../utils/dict";
export default {
  name: "DataTable",
  data(){
    return {
      //表格数据
      tableData:this.list
    }
  },
  props:{
    //表格绑定的数据
    list:{
      type:Array,
      default: () => []
    }
  },
  emits: ['refresh',"edit","info"],
  methods:{
    /**
     * 删除指定数据
     * @param index 数据索引
     * @param data
     */
    deleteRow(index,data){
      this.isLoading=true;
      //执行访问服务端搜索数据列表接口
      deleteAccount(data.id).then(response =>{
        this.$emit("refresh");
        this.isLoading=false;
      })
    },
    /**
     * 格式化状态
     */
    formatterStatus(row,column){
      return getAccountStatus(row[column.property])
    },
    /**
     * 格式化权限
     */
    formatterRoleName(row,column){
      return getRoleName(row[column.property])
    },
    /**
     * 格式化性别
     */
    formatterSex(row,column){
      return getSex(row[column.property])
    },
    /**
     * 查看指定数据
     * @param index 数据索引
     * @param data
     */
    infoRow(index,data){
      accountDetail(data.id).then(response =>{
        this.$emit("info",response.data);
        this.isLoading=false;
      })
    },
    /**
     * 编辑指定数据
     * @param index 数据索引
     * @param data
     */
    editRow(index,data){
      accountDetail(data.id).then(response =>{
        this.$emit("edit",response.data);
        this.isLoading=false;
      })
    }

  }
}
</script>

<style scoped>

</style>