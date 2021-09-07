import {tokens,users} from "../token"
import error from "../error";
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
                return error.noAuth
            }else{
                let userData=filterData(param);
                return Object.assign(error.success,{data:userData});
            }
        }
    },{
        url:'api/account/add',
        type:'post',
        response:config=>{
            const {authorization}=config.headers;
            const param=config.body;
            const info=users[authorization];
            if(!info){
                return error.noAuth;
            }else{
                return error.success;
            }
        }
    },{
        url:'api/account/edit',
        type:'post',
        response:config=>{
            const {authorization}=config.headers;
            const param=config.body;
            const info=users[authorization];
            if(!info){
                return error.noAuth;
            }else{
                return error.success;
            }
        }
    },{
        url:'api/account/delete',
        type:'get',
        response:config=>{
            const {authorization}=config.headers;
            const param=config.query;
            const info=users[authorization];
            if(!info){
                return error.noAuth;
            }else{
                return error.success;
            }
        }
    },{
        url:'api/account/detail',
        type:'get',
        response:config=>{
            const {authorization}=config.headers;
            const id=config.query.id;
            const info=users[authorization];
            if(!info){
                return error.noAuth;
            }else{
                let user=getInfo(id)
                return Object.assign(error.success,{data:user});
            }
        }
    }
]


function getInfo(id){
    let obj={};
    for(let i=0;i<data.length;i++){
        obj=data[i];
        if(data[i].id===id){
            break;
        }
    }
    return obj;
}

/**
 * 过滤数据
 * @param param 条件
 * @returns {*}  符合条件的数据
 */
function filterData(param){
    //符合条件的数据
    let tableData= [];
    //起始索引
    let startIndex=param.limit*(param.page-1);
    //结束索引
    let endIndex=startIndex+param.limit;
    for(let i=0;i<data.length;i++){
        let obj=data[i];
        if(param.account){
            //如果参数没有条件限制
            if(obj.account.indexOf(param.account)!=-1){
                //如果用户名中包含指定的字符
                tableData.push(obj);
            }
        }else{
            //如果没有条件限制
            tableData.push(obj);
        }
    }
    //分页数据及分页信息
    let pageData= {
        total:tableData.length,
        limit:param.limit,
        page:param.page,
        list:[]
    };
    for(let n=0;n<tableData.length;n++){
        if(n>=startIndex&&n<endIndex){
            //如果在起始和截至索引之间
            pageData.list.push(tableData[n]);
        }
    }
    return pageData;
}



//账号列表数据
const data=[{
        age:18,
        sex:1,
        status:'active',
        createTime:'2021-02-22 10:12:33',
        phone:'135****0240',
        roles:[2],
        account:"wenso",
        realName:"祝融",
        id:'22D34G564H3F'
    },{
        age:19,
        sex:1,
        status:'active',
        createTime:'2021-02-26 10:12:33',
        phone:'135****0240',
        roles:[1],
        account:'admin',
        realName:"黄帝",
        id:'12D34G564H4F'
    },{
        age:28,
        sex:0,
        status:'lock',
        createTime:'2021-02-28 21:12:34',
        phone:'135****0240',
        roles:[2,3],
        account:"kity",
        realName:"雅典娜",
        id:'32D34G564H5F'
    }
]
export default accountApi;