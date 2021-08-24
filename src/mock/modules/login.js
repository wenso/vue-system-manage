import {tokens,users} from "../token"
import Cache from "@utils/cache"

const userApi=[
    //用户登录
    {
        url:'api/login',
        method:'post',
        response:config => {
            const {username,password,verifyCode} =config.body;
            const token =tokens[username].token;
            const mPassword=tokens[username].password;
            const mVerifyCode=tokens[username].verifyCode;
            if(!token){
                //如果token不存在，说明没有用户
                return {
                    code:204,
                    desc:'用户名或密码不正确'
                }
            }else{
                //如果token存在，说明用户存在，判断密码是否正确
                if(mVerifyCode!==verifyCode){
                    return {
                        code:205,
                        desc:'验证码不正确'
                    }
                }else if(mPassword!==password){
                    return {
                        code:204,
                        desc:'用户名或密码不正确'
                    }
                }else{
                    return {
                        code:200,
                        data:token,
                        desc:'success'
                    }
                }
            }
        }
    },
    //获取用户信息
    {
        url:'api/user/detail',
        method: 'get',
        response:config=>{
            const {token}=config.query;
            const info=users[token];
            if(!info){
                return {
                    code:508,
                    desc:'用户令牌已失效，请重新进行登录'
                }
            }else{
                return {
                    code:200,
                    data:info,
                    desc:'success'
                }
            }
        }
    },
    //用户登出
    {
        url:'api/logout',
        method:'post',
        response:()=>{
            return {
                code:200,
                desc:'success'
            }
        }
    }
]

export default userApi;