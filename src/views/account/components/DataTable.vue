<template>
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
        label="性别">
      <template #default="scope">
        {{formatterSex(scope.row.sex)}}
      </template>
    </el-table-column>
    <el-table-column
        label="角色">
      <template #default="scope">
        {{formatterRoleName(scope.row.roles)}}
      </template>
    </el-table-column>
    <el-table-column
        label="状态">
      <template #default="scope">
        {{formatterStatus(scope.row.status)}}
      </template>
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
    return {}
  },
  props:{
    //表格绑定的数据
    list:{
      type:Array,
      default: () => []
    }
  },
  computed:{
    tableData(){
      return this.list
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
    },
    /**
     * 格式化状态 当使用prop赋值时，入参为(row，column),使用row[column.property]取值
     */
    formatterStatus(val){
      return getAccountStatus(val)
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

</style>