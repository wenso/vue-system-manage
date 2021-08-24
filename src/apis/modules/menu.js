import http from '@utils/http'

/**
 * 搜索菜单列表
 * @param param
 * @returns {*}
 */
export const searchMenus=(param) => {
    return http.post('api/menu/search',param);
}
/**
 * 编辑菜单信息
 * @param param
 * @returns {*}
 */
export const editMenu=(param)=>{
    return http.post('api/menu/edit',param);
}
/**
 * 添加菜单信息
 * @param param
 * @returns {*}
 */
export const addMenu=(param)=>{
    return http.post('api/menu/add',param)
}
/**
 * 删除菜单信息
 * @param id
 * @returns {*}
 */
export const deleteMenu=(id)=>{
    return http.get('api/menu/delete//${id}')
}
/**
 * 查看菜单信息
 * @param id
 * @returns {*}
 */
export const menuDetail=(id)=>{
    return http.get('api/menu/detail/${id}')
}