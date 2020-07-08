import urlConfig from './config.js'
import store from '@/store'
const headers = {
	'Authorization': 'Basic d2ViQXBwOndlYkFwcA==',
	'Content-type': 'application/x-www-form-urlencoded',
}

const request = (url, method, data, header, power) => {
/*     权限判断 因为有的接口请求头可能需要添加的参数不一样，所以这里做了区分
    1 == 不通过access_token校验的接口
    2 == 文件下载接口列表
    3 == 验证码登录 */
	let tardetUrl = urlConfig + url
    switch (power){
        case 1:
            headers['Authorization'] = 'Basic a3N1ZGk6a3N1ZGk='
            break;
        case 2:
            headers['Authorization'] = 'Basic a3N1ZGlfcGM6a3N1ZGlfcGM='
            break;
        case 3:
            responseType = 'blob'
            break;
        default:
			tardetUrl += (url.indexOf('?') > -1 ? "&" : "?") +  (store.getters.hasLogin ? `access_token=${store.getters.token}`: "")
            break;
    }
    return uni.request({
        url: tardetUrl,
        method,
        data: data,
        dataType: 'json',
        header: Object.assign(headers, header),
		timeout: 10000
    }).then(res => {
		if(url === 'oauth/token' && res[1].statusCode === 200) { //登录接口特殊处理
			 return Promise.resolve(res[1])
		} else if (res[1].statusCode === 200 && (res[1].data.status === 200 || res[1].data.status === 205 || res[1].data.status === 201)) { //其它接口
            return Promise.resolve(res[1])
        } else {
            throw res[1].data
        }
    }).catch(parmas => {
　　　　　　switch (parmas.code) {
　　　　　　　　case 401:
　　　　　　　　　　break
　　　　　　　　default:
　　　　　　　　　　uni.showToast({
　　　　　　　　　　　　title: parmas.message,
　　　　　　　　　　　　icon: 'none'
　　　　　　　　　　})
　　　　　　　　　　return Promise.reject(parmas)
　　　　　　　　　　break
　　　　　　}
　　}) } 
export function get(url, data, power){    
    return new Promise((resolve, reject) =>{        
        request(url, "GET", data, power).then(res => {
            resolve(res.data);
        }).catch(err =>{
            reject(err)        
		})    
	});
}
export function post(url, data, power) {
    return new Promise((resolve, reject) => {
         request(url, "POST", data, power)
        .then(res => {
            resolve(res.data);
        })
        .catch(err =>{
            reject(err)
        })
    });
}
export function put(url, data, power) {
    return new Promise((resolve, reject) => {
         request(url, "PUT", data, power)
        .then(res => {
            resolve(res.data);
        })
        .catch(err =>{
            reject(err)
        })
    });
}
export default request