import http from '@utils/http'

/**
 * 搜索用户列表
 * @param param
 * @returns {*}
 */
export const searchAccounts=(param) => {
    return http.post('api/account/search',param);
}
/**
 * 编辑用户信息
 * @param param
 * @returns {*}
 */
export const editAccount=(param)=>{
    return http.post('api/account/edit',param);
}
/**
 * 添加用户信息
 * @param param
 * @returns {*}
 */
export const addAccount=(param)=>{
    return http.post('api/account/add',param)
}
/**
 * 删除用户信息
 * @param id
 * @returns {*}
 */
export const deleteAccount=(id)=>{
    return http.get('api/account/delete/${id}')
}
/**
 * 查看用户详情
 * @param id
 * @returns {*}
 */
export const accountDetail=(id)=>{
    return http.get('api/account/detail/${id}')
}