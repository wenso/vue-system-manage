import {createRouter,createWebHashHistory} from 'vue-router'
import Layout from '@/layout/index.vue'

const routes=[
    {
        path: '/login',
        name: 'Login',
        component: () => import('@views/login/index.vue')
    },{
        path:'/',
        name:'DashBoard',
        component:Layout,
        redirect:'/dashboard',
        children:[{
            path:'dashboard',
            component:() => import('@views/dashboard/index.vue'),
            meta:{
                title:'系统看板',
                icon:'',
                menuType:0,
                affix:true
            }
        }]
    },{
        path:'/system',
        name:'System',
        component: Layout,
        redirect:'/system/account-manage',
        meta:{title:'系统管理',icon:'',menuType:0},
        children:[
            {
                path:'/system/account-manage',
                component:() => import('@views/account/index.vue'),
                hidden: true,
                meta:{
                    title:'用户管理',
                    menuType:1,
                },
                children:[
                    {
                        path:'/system/account-manage/edit',
                        component:() => import('@views/account/account-edit.vue'),
                        hidden: true,
                        meta:{
                            title:'用户编辑',
                            menuType:2,
                        }
                    },{
                        path:'/system/account-manage/add',
                        component:() => import('@views/account/account-add.vue'),
                        hidden: true,
                        meta:{
                            title:'用户添加',
                            menuType:2,
                        }
                    }
                ]
            },{
                path:'/system/role-manage',
                component:() => import('@views/role/index.vue'),
                hidden: true,
                meta:{
                    title:'角色管理',
                    menuType:1,
                },
                children:[
                    {
                        path:'/system/role-manage/edit',
                        component:() => import('@views/role/role-edit.vue'),
                        hidden: true,
                        meta:{
                            title:'角色编辑',
                            menuType:2,
                        }
                    },{
                        path:'/system/role-manage/add',
                        component:() => import('@views/role/role-add.vue'),
                        hidden: true,
                        meta:{
                            title:'角色添加',
                            menuType:2,
                        }
                    }
                ]
            },{
                path:'/system/menu-manage',
                component:() => import('@views/menu/index.vue'),
                hidden: true,
                meta:{
                    title:'菜单管理',
                    menuType:1,
                },
                children:[
                    {
                        path:'/system/menu-manage/edit',
                        component:() => import('@views/menu/menu-edit.vue'),
                        hidden: true,
                        meta:{
                            title:'菜单编辑',
                            menuType:2,
                        }
                    },{
                        path:'/system/menu-manage/add',
                        component:() => import('@views/menu/menu-add.vue'),
                        hidden: true,
                        meta:{
                            title:'菜单添加',
                            menuType:2,
                        }
                    }
                ]
            }
        ]
    }
];
const router=createRouter({
    history:createWebHashHistory(),
    routes
});
router.beforeEach((to,from,next)=>{
    console.log(to,from);
    next();
});

export default router;