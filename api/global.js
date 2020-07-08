import { get, post } from '@/common/request'; // 导入http中创建的axios实例
// import qs from 'qs'; // 根据需求是否导入qs模块

export function login(data) {//登录
 return post(`oauth/token`, data, 1);
}
export function queryObox(data) {//查看Obox列表
 return post(`consumer/common?CMD=query_obox`); 
}