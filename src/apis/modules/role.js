import http from '@utils/http'
/**
 * 搜索角色列表
 * @param param
 * @returns {*}
 */
export const searchRoles=(param) => {
    return http.post('api/role/search',param);
}
/**
 * 编辑角色
 * @param param
 * @returns {*}
 */
export const editRole=(param)=>{
    return http.post('api/role/edit',param);
}
/**
 * 添加角色，角色名称不可重复
 * @param param
 * @returns {*}
 */
export const addRole=(param)=>{
    return http.post('api/role/add',param)
}
/**
 * 删除角色，已经关联用户角色无法删除
 * @param id
 * @returns {*}
 */
export const deleteRole=(id)=>{
    return http.get('api/role/delete'${id})
}
/**
 * 角色详情
 * @param id
 * @returns {*}
 */
export const roleDetail=(id)=>{
    return http.get('api/role/detail'${id})
}
/**
 * 角色关联用户
 * @param param
 * @returns {*}
 */
export const roleRelation=(param)=>{
    return http.post('api/role/relation',param)
}
/**
 * 角色分配权限
 * @param param
 * @returns {*}
 */
export const rolePermissions=(param)=>{
    return http.post('api/roles/permissions',param)
}