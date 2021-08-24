export default {
    created() {
        this.checkComponentTemplate();
    },
    props: {
        menuPath: {
            type: String,
            default: ''
        }
    },
    data(){
        return {
            //是否包含子路由
            isChild:false
        }
    },
    methods:{
        /**
         * 组装api接口参数
         * @param param
         * @returns {*}
         */
        buildApiParam(param){
            return param;
        },
        /**
         * 检查组件路由配置
         */
        checkComponentTemplate() {
            if (this.$props.menuPath) {
                const that = this;
                const matchedIndex = _.findIndex(this.$route.matched, function(route) {
                    return route.path === that.$props.menuPath;
                });
                if (matchedIndex === this.$route.matched.length - 1) {
                    this.isChild = true;
                }
            }
        }

    }
}