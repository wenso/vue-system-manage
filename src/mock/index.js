import {createProdMockServer} from "vite-plugin-mock/es/createProdMockServer";
//导入modules目录文件
const files=import.meta.globEager('./modules/*.js')
const mockList=[];

//遍历文件列表，将模块节点添加到数组
Object.keys(files).forEach(key => {
    mockList.push(...files[key].default);
})

export const setupProdMockServer=() =>{
    console.log(mockList);
    createProdMockServer(mockList);
}