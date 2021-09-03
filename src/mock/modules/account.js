import {tokens,users} from "../token"
const accountApi=[
    //搜索账号信息
    {
        url:'api/account/search',
        method: 'post',
        response:config=>{
            const {authorization}=config.headers;
            const param=config.body;
            const info=users[authorization];
            if(!info){
                return {
                    code:508,
                    desc:'用户令牌已失效，请重新进行登录'
                }
            }else{
                let userList=filterData(param);
                return {
                    code:200,
                    data:{
                        total:userList.length,
                        limit:10,
                        page:1,
                        list:userList
                    },
                    desc:'success'
                }
            }
        }
    }
]

/**
 * 过滤数据
 * @param param 条件
 * @returns {*}  符合条件的数据
 */
function filterData(param){
    //符合条件的数据
    let arr=[];
    //分页数据
    let arrPage=[];
    //起始索引
    let startIndex=param.limit*(param.page-1);
    //结束索引
    let endIndex=startIndex+param.limit;
    for(let i=0;i<data.length;i++){
        let obj=data[i];
        //判断性别为男性，年龄大于10
        if(obj.sex===param.sex&&obj.age>param.age){
            arr.push(obj);
        }
    }
    for(let n=0;n<arr.length;n++){
        if(n>=startIndex&&n<=endIndex){
            arrPage.push(arr[n]);
        }
    }
    return arrPage;
}

//数据
const data=[{
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
]
export default accountApi;