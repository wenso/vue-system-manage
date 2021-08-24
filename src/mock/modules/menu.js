const data=[
    {
        path:'/',
        compnent:'Layout',
        redirect:'/dashboard/',
        name:'layout',
        meta:{
            title:'系统首页',
            index:1,
            icon:''
        },
        children:[
            {
                path:'dashboard',
                name:'dashboard',
                component:'/dashboard/index',
                meta:{
                    title:'统计看板'
                }
            },{
                path:'',
                name:'',
                component:'',
                meta:{
                    title:''
                }
            }
        ]
    }
]
const menuApi=[]
export default menuApi;