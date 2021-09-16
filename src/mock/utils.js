import {isEmpty} from "../utils/obj";

/**
 * 时间在指定范围内
 * @param current 数据时间值
 * @param start 起始时间条件
 * @param end 结束时间条件
 * @returns {boolean}
 */
export const isRangeTime=(val,start,end)=>{
    if(!isEmpty(val)){
        if(isEmpty(start)&&isEmpty(end)){
            return true;
        }else{
            if(isEmpty(start)){
                return new Date(val)<=new Date(end)
            }else if(isEmpty(end)){
                return new Date(val)>=new Date(start)
            }else{
                return new Date(val)<=new Date(end)&&new Date(val)>=new Date(start);
            }
        }
    }
    return false;
}
/**
 * 是否符合单选条件
 * @param val 当前数据值
 * @param target  条件值
 * @returns {boolean}
 */
export const isSelected=(val,target)=>{
    if(!isEmpty(val)){
        if(isEmpty(target)){
            return true;
        }else{
            if(val===target){
                return true;
            }else{
                return false;
            }
        }
    }
    return false;
}
/**
 * 是否包含对应的字符
 * @param val 数据值
 * @param targe 条件值
 * @returns {boolean}
 */
export const isInclude=(val,target)=> {
    if (!isEmpty(val)) {
        if(isEmpty(target)){
            return true
        }else{
            return val.indexOf(target) != -1
        }
    }else{
        return target===val
    }
}