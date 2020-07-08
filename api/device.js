import { get, post } from '@/common/request'; // 导入http中创建的axios实例
// import qs from 'qs'; // 根据需求是否导入qs模块

export function getDeviceList() {//查看设备列表
 return get(`consumer/common?CMD=query_device`);  
}