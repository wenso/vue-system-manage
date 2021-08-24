<template>
  <div :class="{'hidden':hidden}" class="pagination-container">
    <el-pagination
      :current-page.sync="currentPage"
      :page-size.sync="pageSize"
      :layout="layout"
      :page-sizes="pageSizes"
      :total="total"
      v-bind="$attrs"
      @size-change="handleSizeChange"
      @current-change="handleCurrentChange"/>
  </div>
</template>

<script>
export default {
  name: "Pager",
  props:{
    //总数
    total:{
      required:true,
      type:Number
    },
    //当前页码
    page:{
      type:Number,
      default:1
    },
    //每页条数
    limit:{
      type:Number,
      default:20
    },
    //组件布局 total, sizes, prev, pager, next, jumper
    layout:{
      type:String,
      default:'total,sizes,prev,pager,next'
    },
    //可选每页数据条数
    pageSizes:{
      type:Array,
      default(){
        return [10,20,50]
      }
    },
    //是否显示分页
    hidden:{
      type:Boolean,
      default:false
    }
  },
  computed:{
    //当前页码
    currentPage:{
      get(){
        return this.page
      },
      set(val){
        this.$emit('update:page',val)
      }
    },
    //当前每页数据条数
    pageSize:{
      get(){
        return this.limit
      },
      set(val){
        this.$emit('update:limit',val)
      }
    }
  },
  methods:{
    /**
     * 每页数据条数变化
     * @param val
     */
    handleSizeChange(val){
      this.$emit('pagination',{page:this.currentPage,limit:val})
    },
    /**
     * 当前页码变化
     * @param val
     */
    handleCurrentChange(val){
      this.$emit('pagination',{page:val,limit:this.pageSize})
    }
  }
}
</script>

<style scoped>
  .pagination-container{

  }
  .pagination-container.hidden{
    display: none;
  }
</style>