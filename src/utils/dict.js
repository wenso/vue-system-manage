const ACCOUNT_STATUS={
    active:"启用",
    lock:"锁定",
    disable:"停用"
}
const ROLES={
    1:"管理员",
    2:"部门经理",
    3:"业务员"
}
const SEX={
    0:"女",
    1:"男"
}
/**
 * 获取用户状态
 * @param val
 * @returns {*}
 */
export function getAccountStatus(val){
    if(!isEmpty(val)){
        return ACCOUNT_STATUS[val];
    }else{
        return "";
    }
    return !isEmpty(val)?ACCOUNT_STATUS[val]:""
}
/**
 * 获取用户权限
 * @param val
 * @returns {string}
 */
export function getRoleName(val){
    if(!isEmpty(val)){
        if(val.length>0){
            let roleName=[];
            val.forEach((role)=>{
                roleName.push(ROLES[role]);
            })
            return roleName.join(",");
        }
    }
    return "";
}
/**
 * 获取性别
 * @param val
 * @returns {*}
 */
export function getSex(val){
    return !isEmpty(val)?SEX[val]:""
}

function isEmpty(val){
    return val===null||val===undefined
}