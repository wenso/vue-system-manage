<template>
  <div :class="{'hidden':hidden}" class="pagination-container">
    <el-pagination
      :current-page.sync="this.page"
      :page-size="this.limit"
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
  name: "NeuPager",
  data(){
    return{
      page:this.currentPage,
      limit:this.pageSize
    }
  },
  props:{
    //总数
    total:{
      type:Number,
      default:0
    },
    //当前页码
    currentPage:{
      type:Number,
      default:1
    },
    //每页条数
    pageSize:{
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
  emits:["size-change","current-change"],
  methods:{
    /**
     * 每页数据条数变化
     * @param val
     */
    handleSizeChange(val){
      this.page=1;
      this.limit=val;
      this.$emit('size-change',{limit:val,page:this.page})
    },
    /**
     * 当前页码变化
     * @param val
     */
    handleCurrentChange(val){
      this.page=val;
      this.$emit('current-change',{page:val,limit:this.pageSize})
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