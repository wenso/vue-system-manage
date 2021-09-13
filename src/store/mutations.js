export const mutations ={
    /**
     * 设置权限
     * @param state
     * @param permission
     */
    setPermission(state,permission){
        state.permission=permission;
    },
    /**
     * 设置主题
     * @param state
     * @param themeName
     */
    setTheme(state,themeName){
        state.theme=themeName;
    },
    /**
     * 设置当前登录用户信息
     * @param state
     * @param user
     */
    setUser(state,user){
        state.user=user;
    }
}