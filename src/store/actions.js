export const actions={
    SET_PERMISSION(context,permission){
        context.commit("setPermission",permission);
    },
    SET_THEME(context,theme){
        context.commit("setTheme",theme);
    },
    SET_USER(context,user){
        context.commit("setUser",user);
    }
}