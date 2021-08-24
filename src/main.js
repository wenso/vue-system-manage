import { createApp } from 'vue'
import App from './App.vue'
import router from '@/router'
import ElementPlus from 'element-plus'
import 'element-plus/lib/theme-chalk/index.css';
import '@theme/black/index.css'

// 注册svgIcon
//import 'vite-plugin-svg-icons/register';
//import SvgIcon from '@comps/SvgIcon/SvgIcon.vue';

import {setupProdMockServer} from "./mock";

setupProdMockServer();
const app=createApp(App);
// 全局注册SvgIcon组件
//app.component('SvgIcon', SvgIcon);

// 全局变量 挂载
//app.config.globalProperties.xxx = xxx;
app.use(router);
app.use(ElementPlus)
app.mount('#app')
