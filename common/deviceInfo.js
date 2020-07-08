// 有关设备的配置
export const deviceInfo = [{
	id: 1,
	name: 'LED灯/灯座/调光器',
	show: true,
	children: [{
		id: 1,
		name: '单色调光',
		show: true,
		path: '/pages/device/deviceControl/lamp',
		params:{},
		image: 'led_home'
	}, {
		id: 2,
		name: '冷暖色调光',
		show: true,
		path: '/pages/device/deviceControl/lamp',
		params:{
			color: 2
		},
		image: 'warm_home'
	}, {
		id: 3,
		name: '三色调光',
		show: true,
		image: 'color_led_home'
	}, {
		id: 4,
		name: 'RGB-W',
		show: true,
	}, {
		id: 5,
		name: 'RGB-CW',
		show: true,
	}, {
		id: 11,
		name: '1路滑条调光',
	}, {
		id: 12,
		name: '2路滑条调光',
	}, {
		id: 13,
		name: '3路滑条',
		image: 'three_way_lamp'
	}, {
		id: 14,
		name: '4路滑条',
	}, {
		id: 15,
		name: '5路滑条',
	}, {
		id: 16,
		name: '6路滑条',
	}]
}, {
	id: 2,
	name: '智能电饭煲',
	children: []
}, {
	id: 3,
	name: '智能加湿器',
	image: 'humid_room',
	children: []
}, {
	id: 4,
	name: '智能插座/开关',
	show: true,
	path: '/pages/device/deviceControl/switch',
	children: [{
		id: 1,
		name: '1路开关插座',
		show: true,
		image: 'chazuo_home',
		params: {
			socketNum: 1,
		}
	}, {
		id: 2,
		name: '继电器',
		image: 'one_button_wire_socket',
		params: {
		}
	}, {
		id: 3,
		name: '触摸开关',
		params: {
		}
	}, {
		id: 12,
		name: '2路开关智能插座',
		params: {
			socketNum: 3,
		}
	}, {
		id: 13,
		name: '3路开关智能插座',
		params: {
			socketNum: 3,
		}
	}, {
		id: 14,
		name: '4路开关智能插座',
		params: {
			socketNum: 4,
		}
	}, {
		id: 21,
		name: '1路开关',
		show: true,
		image: 'single_switch',
		params: {
			switchsNum: 1,
		}
	}, {
		id: 22,
		name: '2路开关',
		show: true,
		image: 'double_switch',
		params: {
			switchsNum: 2,
		}
	}, {
		id: 23,
		name: '3路开关',
		show: true,
		image: 'three_switch',
		params: {
			switchsNum: 3,
		}
	}, {
		id: 24,
		name: '4路开关插座',
		image: 'four_switch',
		params: {
			socketNum: 4,
		}
	}, {
		id: 25,
		name: '5路开关插座',
		params: {
			socketNum: 5,
		}
	}, {
		id: 26,
		name: '6路开关插座',
		params: {
			socketNum: 6,
		}
	}, {
		id: 28,
		name: '8路开关插座',
		params: {
			socketNum: 8,
		}
	}, {
		id: 31,
		name: '1路情景面板',
		params: {
			sceneNum: 1,
		}
	}, {
		id: 32,
		name: '2路情景面板',
		params: {
			sceneNum: 2,
		}
	}, {
		id: 33,
		name: '3路情景面板',
		show: true,
		image: 'scene_panel',
		params: {
			sceneNum: 3,
		}
	}, {
		id: 34,
		name: '4路情景面板',
		show: true,
		image: 'six_scene',
		params: {
			sceneNum: 4,
		}
	}, {
		id: 36,
		name: '6路情景面板',
		show: true,
		image: 'six_scene',
		params: {
			sceneNum: 6,
		}
	}, {
		id: 41,
		name: '1路开关+3路情景',
		show: true,
		image: 'one_three_panel',
		params: {
			switchsNum: 1,
			sceneNum: 3,
		}
	}, {
		id: 42,
		name: '2路开关+3路情景',
		show: true,
		image: 'two_three_panel',
		params: {
			switchsNum: 2,
			sceneNum: 3,
		}
	}, {
		id: 43,
		name: '3路开关+3路情景',
		show: true,
		image: 'six_mixed_switch',
		params: {
			switchsNum: 3,
			sceneNum: 3,
		}
	}, {
		id: 51,
		name: '1键单线供电开关',
		show: true,
		image: 'one_button_wire_socket',
		params: {
			switchsNum: 1,
		}
	}, {
		id: 52,
		name: '2键单线供电开关',
		show: true,
		image: 'two_button_wire_socket',
		params: {
			switchsNum: 2,
		}
	}, {
		id: 62,
		name: '2开关+2情景',
		show: true,
		image: 'six_scene',
		params: {
			switchsNum: 2,
			sceneNum: 2,
		}
	}, {
		id: 71,
		name: '1路开关+雷达',
		show: true,
		params: {
			switchsNum: 1,
			sceneNum: 1,
			infrared: 1
		}
	}, {
		id: 80,
		name: '3路触摸场景+红外对管',
		params: {
			sceneNum: 4,
			infrared: 1
		}
	}, {
		id: 81,
		name: '1路开关+3路触摸场景+红外对管',
		params: {
			switchsNum: 1,
			sceneNum: 4,
			infrared: 1
		}
	}, {
		id: 83,
		name: '3路开关+3路触摸场景+红外对管',
		show: true,
		image: 'three_scene_three_switch_read',
		params: {
			switchsNum: 3,
			sceneNum: 4,
			infrared: 1,
		}
	}, {
		id: 86,
		name: '6路触摸场景+红外对管',
		show: true,
		image: 'six_scene_read',
		params: {
			sceneNum: 7,
			infrared: 1
		}
	}, {
		id: 90,
		name: 'WIFI智能插座',
		params: {
		}
	}, {
		id: 91,
		name: '2键窗帘控制面板',
		show: true,
		image: 'three_switch',
		params: {
			switchsNum: 2,
		}
	}, {
		id: 92,
		name: '4键窗帘控制面板',
		show: true,
		image: 'six_scene',
		params: {
			switchsNum: 4,
		}
	}, {
		id: 101,
		name: '1路情景+雷达面板',
		params: {
			switchsNum: 1,
			sceneNum: 1,
		}
	}]
}, {
	id: 5,
	name: '智能开合类设备',
	show: true,
	children: [{
		id: 1,
		name: '窗帘',
		show: true,
		image: 'curtain_home',
		path: '/pages/device/deviceControl/curtains',
		params: {}
	}, {
		id: 2,
		name: '投影仪幕布',
		show: true,
		image: 'mubu_home'
	}, ]
}, {
	id: 6,
	name: '智能风扇',
	image: 'fan_room',
	children: []
}, {
	id: 7,
	name: '智能空气净化器',
	children: []
}, {
	id: 8,
	name: '兼容型智能电视',
	children: []
}, {
	id: 9,
	name: '测试用USB-RF模块',
	children: []
}, {
	id: 10,
	name: '网关',
	show: true,
	children: [{
		id: 1,
		name: '通用版本',
		show: true,
	}, {
		id: 2,
		name: '阿里版本',
		show: true,
	}, ]
}, {
	id: 11,
	name: '智能传感器',
	show: true,
	children: [{
		id: 1,
		name: 'ALS',
		image: 'water_have'
	}, {
		id: 2,
		name: '水浸',
		show: true,
		image: 'water_have'
	}, {
		id: 3,
		name: '雷达',
		show: true,
		image: 'radar_have'
	}, {
		id: 4,
		name: 'CO',
	}, {
		id: 5,
		name: '环境（光温湿）',
		image: 'radar_have'
	}, {
		id: 6,
		name: '人体感应（雷达+红外）',
		show: true,
	}, {
		id: 7,
		name: '空气质量（PM2.5+voc）',
		image: 'pm_home'
	}, {
		id: 8,
		name: '供电检测器',
		image: 'radar_have'
	}, {
		id: 9,
		name: '虚拟雷达',
		image: 'radar_have'
	}, {
		id: 10,
		name: '光线传感器',
		image: 'light_home'
	}, {
		id: 11,
		name: '温度湿度传感器',
		show: true,
		image: 'temp_humid_home'
	}, {
		id: 12,
		name: '烟雾传感器',
		show: true,
		image: 'smoke_have'
	}, {
		id: 13,
		name: '超声波传感器',
		image: 'radar_have'
	}, {
		id: 14,
		name: '雷达传感器',
		image: 'radar_have'
	}, {
		id: 15,
		name: '插卡感应器本',
		show: true,
		image: 'electric_card'
	}, {
		id: 16,
		name: '环境传感器',
		image: 'enviroment_home'
	}, {
		id: 17,
		name: '感应面板',
		image: 'radar_have'
	}, {
		id: 18,
		name: 'DC供电版红外',
		image: 'body_have'
	}, {
		id: 19,
		name: 'AC红外',
		show: true,
		image: 'body_have'
	}, {
		id: 20,
		name: 'PM2.5',
		image: 'pm_home'
	}, {
		id: 21,
		name: '门磁',
		show: true,
		image: 'magneticdoor'
	}, {
		id: 22,
		name: '雷达灯',
	}, {
		id: 23,
		name: 'DC红外+光感',
		show: true,
		image: 'body_als'
	}, {
		id: 24,
		name: 'AC红外+光感',
		show: true,
		image: 'body_als'
	}, {
		id: 25,
		name: '一键呼救',
		show: true,
		image: 'body_als'
	}, {
		id: 26,
		name: '尿床感应仪',
		show: true,
		image: 'smoke_have'
	}, {
		id: 27,
		name: '烟雾传感器',
		show: true,
		image: 'smoke_have'
	}, {
		id: 28,
		name: '燃气传感器',
		show: true,
		image: 'smoke_have'
	}, {
		id: 29,
		name: '插卡取点（NFC）',
		show: true,
		image: 'enviroment_home'
	}]
}, {
	id: 12,
	name: '智能抄表器',
	children: []
}, {
	id: 13,
	name: '线控面板',
	show: true,
	path: '/pages/device/deviceControl/airControl',
	children: [{
		id: 1,
		name: '空调线控器',
		show: true,
		image: 'air_con_panel',
		params:{}
	}]
}, {
	id: 14,
	name: '兼容型智能电视',
	image: 'infra_home',
	children: [{
		id: 1,
		name: '智能红外转发（蓝牙）'
	}, {
		id: 2,
		name: '智能红外转发（WIFI）'
	}, {
		id: 3,
		name: '红外线控面板'
	}]
}, {
	id: 20,
	name: '智能门禁',
	image: 'finger_home',
	children: []
}, {
	id: 21,
	name: '智能门锁',
	image: 'smart_lock',
	show: true,
	path: '/pages/device/deviceControl/lock',
	children: [{
		id: 1,
		name: 'OB全自动门锁'
	}, {
		id: 2,
		name: '亚太天能智能门锁'
	}, {
		id: 3,
		name: 'OB半自动指纹智能门锁',
		show: true,
		params:{}
	}, {
		id: 4,
		name: 'OB酒店门锁',
		show: true,
	}, {
		id: 5,
		name: 'OB全自动门锁',
		show: true,
	}]
}, {
	id: 22,
	name: '遥控灯',
	image: 'remote_led',
	children: [],
	path:'/pages/device/deviceControl/controlLamp',
	children: [{
		id: 1,
		name: '遥控灯',
		params:{}
	}],
}, {
	id: 32,
	name: '摄像头',
	image: 'camera_home',
	children: [],
}, {
	id: 81,
	name: 'wifi红外转发器',
	image: 'infra_home',
	children: []
}]
export function  getDevicePath(device_type,device_child_type) {
	const tarBox = deviceInfo.find(ele => ele.id === device_type);
	let tarObj;
	if(tarBox.children && tarBox.children.length) {
		tarObj = tarBox.children.find(ele2 => ele2.id === device_child_type);
	} else {
		tarObj = tarBox;
	}
	if(!tarObj.path && !tarBox.path) return '/404'
	return (tarObj.path || tarBox.path) + '?' + Object.keys(tarObj.params || {}).map(ele => `${ele}=${tarObj.params[ele]}`).join('&')
}