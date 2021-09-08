const routers={
    //目录
    catalog:{

    },
    //菜单
    menu:{
        '/dashboard':{
            component:()=>import('@/vies/dashboard/Aside.vue'),
            structure:'console'
        },
        '/system/role-manage':{
            component:()=>import('@/vies/role/Aside.vue'),
            structure:'console'
        },
        '/system/account-manage':{
            component:()=>import('@/vies/account/Aside.vue'),
            structure:'console'
        },
        '/system/menu-manage':{
            component:()=>import('@/vies/menu/Aside.vue'),
            structure:'console'
        }

    },
    //按钮
    button:{
        '/system/role-manage/edit':{
            component:()=>import('@/vies/role/edit.vue'),
            structure:'console'
        },
        '/system/role-manage/add':{
            component:()=>import('@/vies/role/add.vue'),
            structure:'console'
        },
        '/system/accout-manage/edit':{
            component:()=>import('@/vies/account/edit.vue'),
            structure:'console'
        },
        '/system/account-manage/add':{
            component:()=>import('@/vies/account/add.vue'),
            structure:'console'
        },
        '/system/menu-manage/edit':{
            component:()=>import('@/vies/menu/edit.vue'),
            structure:'console'
        },
        '/system/menu-manage/add':{
            component:()=>import('@/vies/menu/add.vue'),
            structure:'console'
        },
    }
}

export default routers