import {tokens,users} from "../token"
const accountApi=[
    //搜索账号信息
    {
        url:'api/account/search',
        method: 'post',
        response:config=>{
            const {authorization}=config.headers;
            const info=users[authorization];
            if(!info){
                return {
                    code:508,
                    desc:'用户令牌已失效，请重新进行登录'
                }
            }else{
                return {
                    code:200,
                    data:{
                        total:20,
                        limit:10,
                        page:1,
                        list:[{
                            age:18,
                            sex:1,
                            status:'active',
                            createTime:'1628170430',
                            phone:'135****0240',
                            roles:[2],
                            userName:"wenso",
                            realName:"祝融",
                            id:'22D34G564H3F'
                        },{
                            age:19,
                            sex:1,
                            status:'active',
                            createTime:'1628170430',
                            phone:'135****0240',
                            roles:[1],
                            userName:'admin',
                            realName:"黄帝",
                            id:'12D34G564H3F'
                        },{
                            age:28,
                            sex:0,
                            status:'lock',
                            createTime:'1628170430',
                            phone:'135****0240',
                            roles:[2,3],
                            userName:"kity",
                            realName:"雅典娜",
                            id:'32D34G564H3F'
                        }
                    ]},
                    desc:'success'
                }
            }
        }
    }
]
export default accountApi;