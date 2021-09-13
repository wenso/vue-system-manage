import {createStore} from 'vuex';
import {mutations} from "./mutations";
import {actions} from "./actions";

export const store =createStore({
    state:{
        theme:'black',
        user:{

        },
        permission:[]
    },
    getters:{
        getUser(){
            return state.user;
        }
    },
    mutations,
    actions
})