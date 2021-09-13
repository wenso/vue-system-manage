import { createApp } from 'vue'
import App from './App.vue'
import router from '@/router'
import {store} from '@/store'
import ElementPlus from 'element-plus'
import 'element-plus/lib/theme-chalk/index.css';
import '@theme/black/index.css'
import PermButton from "@comps/permission/PermButton";
import moment from 'moment';

// 注册svgIcon
//import 'vite-plugin-svg-icons/register';
//import SvgIcon from '@comps/SvgIcon/SvgIcon.vue';

import {setupProdMockServer} from "./mock";

setupProdMockServer();
const app=createApp(App);
// 全局注册SvgIcon组件
app.component('perm-button', {
})

// 全局变量 挂载moemnt,需要setup const { ctx } = getCurrentInstance();
//app.config.globalProperties.$moment=moment;
app.use(router);
app.use(store);
app.use(ElementPlus,{ size: 'small', zIndex: 3000 })
app.mount('#app')
