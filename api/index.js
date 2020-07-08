/** 
 * api接口的统一出口
 */
// 全局功能性接口
import global from '@/api/global';
import device from '@/api/device';
// 其他模块的接口……

// 导出接口
export default {    
    global,
    device,
}