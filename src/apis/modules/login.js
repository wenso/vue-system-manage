import http from '@utils/http'

/**
 * 登录
 * @param param
 * @returns {*}
 */
export const login=(param) => {
    return http.post('api/login',param);
}
/**
 * 个人简介详情，通过token
 * @returns {*}
 */
export const userDetail=()=>{
    return http.get('api/user/detail');
}
/**
 * 编辑个人简介，通过token
 * @param param
 * @returns {*}
 */
export const editUser=(param)=>{
    return http.post('api/user/edit',param);
}

/**
 * 修改密码，通过token
 * @param param
 * @returns {*}
 */
export const editPassword=(param)=>{
    return http.post('api/user/password',param);
}
/**
 * 退出登录，通过token，即使接口调用失败，本地清空token缓存
 * @returns {*}
 */
export const logout=()=>{
    return http.get('api/logout')
}