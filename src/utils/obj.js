import moment from 'moment';
/**
 * 深度复制对象数据
 * @param obj
 * @returns {any}
 */
export const deepClone=(obj) => {
    return JSON.parse(JSON.stringify(obj));
}
/**
 * 字符串转换为YYYY-MM-DD时间格式
 * @param str
 * @returns {string|null}
 */
export const toDateTime=(str)=>{
    if(str){
        return moment(str).format("YYYY-MM-DD")
    }
    return null;
}
/**
 * 获取数组中元素对象，防止越界异常
 * @param arr 数组
 * @param index 索引
 * @returns {null|*}
 */
export const getArrObj=(arr,index)=>{
    if(arr) {
        if (arr.length > index) {
            return arr[index]
        }else{
            //越界返回null
            return null;
        }
    }
    return null;
}