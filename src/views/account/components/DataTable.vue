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
        <span v-html="formatterStatus(scope.row.status)"></span>
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
            @click.prevent="deleteRow(scope.$index, scope.row)"
            type="text">
          删除
        </el-button>
        <el-button
            @click.prevent="editRow(scope.$index, scope.row)"
            type="text">
          编辑
        </el-button>
        <el-button
            @click.prevent="detailRow(scope.$index, scope.row)"
            type="text">
          详情
        </el-button>
      </template>
    </el-table-column>
  </el-table>

  <!--分页-->
  <NeuPager @size-change="handleSizeChange"
            @current-change="handleCurrentChange"
            class="pagination"
            :current-page.sync="this.page"
            :total="this.total"
            :page-sizes="[2,10]"
            :page-size="this.limit" />
</template>

<script>
import {deleteAccount,searchAccounts} from "@apis/modules/account";
import NeuPager from "@comps/pagination/NeuPager";
import { isEmpty} from "@utils/obj";
import {getRoleName,getSex,getAccountStatus} from "@utils/dict";
import {ElMessage} from "element-plus";
export default {
  name: "DataTable",
  components: {NeuPager},
  data(){
    return {
      //搜索框参数集
      condition:{
        //用户名
        account:'',
        //状态
        status:'',
        //电话号码
        phone:'',
        //创建时间
        startTime:null,
        //结束时间
        endTime:null
      },
      limit:2,
      page:1,
      total:0,
      tableData:[]
    }
  },
  emits: ['refresh',"edit","detail"],
  methods:{
    /**
     * 搜索列表数据
     * @param val 子组件传递的值，condition对象
     */
    search(val){
      this.isLoading=true;
      //转义为符合接口协议的参数名
      let param=this.buildParam(val);
      //执行访问服务端搜索数据列表接口
      searchAccounts(param).then(response =>{
        this.total=response.data.total;
        this.tableData=response.data.list;
        this.isLoading=false;
      })
    },
    refresh(){

    },
    /**
     * 单页数据量pageSize发生变化
     */
    handleSizeChange(val){
      this.limit=val.limit;
      this.page=val.page;
      this.search(this.condition);
    },
    /**
     * 当前页码发生变化
     */
    handleCurrentChange(val){
      this.limit=val.limit;
      this.page=val.page;
      this.search(this.condition);
    },
    /**
     * 构造获取列表数据参数
     * @param data
     * @returns {*}
     */
    buildParam(val){
      if(!isEmpty(val)){
        this.condition=val;
      }
      //也合并生成一个新的对象
      let param={};
      param.account=this.condition.account;
      param.phone=this.condition.phone;
      param.status=this.condition.status;
      param.startTime=this.condition.startTime;
      param.endTime=this.condition.endTime;
      param.limit=this.limit;
      param.page=this.page;
      return param;
    },


    /**
     * 删除指定数据
     * @param index 数据索引
     * @param data
     */
    deleteRow(index,data){
      this.$confirm('确定要删除该账户吗?', '提示', {
        confirmButtonText: '确定',
        cancelButtonText: '取消',
        type: 'warning',
      }).then(() => {
        this.isLoading=true;
        //执行访问服务端删除数据列表接口
        deleteAccount(data.id).then(response =>{
          this.$emit("refresh");
          this.isLoading=false;
          ElMessage.success(response.desc);
        })
      })
    },
    /**
     * 查看指定数据
     * @param index 数据索引
     * @param data
     */
    detailRow(index,data){
      this.$emit("detail",data);
    },
    /**
     * 编辑指定数据
     * @param index 数据索引
     * @param data
     */
    editRow(index,data){
      this.$emit("edit",data);
    },
    /**
     * 格式化状态 当使用prop赋值时，入参为(row，column),使用row[column.property]取值
     */
    formatterStatus(val){
      let tag="";
      switch(val){
        case "active":
          tag='<span class="tag fc-green">'+getAccountStatus(val)+'</span>';
          break;
        case "lock":
          tag='<span class="tag fc-red">'+getAccountStatus(val)+'</span>';
          break;
        case "disable":
          tag='<span class="tag fc-gray">'+getAccountStatus(val)+'</span>';
          break;
        default:
          break;
      }
      return tag;
    },
    /**
     * 格式化权限
     */
    formatterRoleName(val){
      return getRoleName(val);
    },
    /**
     * 格式化性别
     */
    formatterSex(val){
      return getSex(val);
    }
  }
}
</script>

<style scoped>

</style>