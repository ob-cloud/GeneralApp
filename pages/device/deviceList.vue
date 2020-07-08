<template>
	<view class="scene">
		<uni-section title="设备列表" type="line">
		</uni-section>
		<view class="example-body">
			<uni-grid :column="3" :highlight="true">
				<uni-grid-item v-for="(item, index) in deviceList" :index="index" :key="index" >
					<view class="grid-item-box" style="background-color: #fff;">
						<image src="/static/img/deviceHL.png" />
						<text class="text">{{ item.name }}</text>
						<text class="device-status">
							{{getStatus(item)}}
						</text>
					</view>
				</uni-grid-item>
			</uni-grid>
		</view>
	</view>
</template>
<script>
	import { getDeviceList } from '@/api/device.js'
	import { deviceInfo,getDevicePath } from '@/common/deviceInfo.js'
	import { login } from '@/api/global.js'
	import Suit from '@/static/js/suit.umd.js'
	import md5 from 'md5';
	import btoa from 'btoa';
	import {
		mapState,
		mapActions,
		mapMutations
	} from 'vuex'
	import uniSection from '@/components/uni-section/uni-section.vue'
	import uniGrid from '@/components/uni-grid/uni-grid.vue'
	export default {
		computed: {
			...mapState(['forcedLogin', 'hasLogin', 'oboxList']),
		},
		components:{
			uniSection,
			uniGrid
		},
		data(){
			return {
				deviceList: [],
				selectIndex: 0,
				aliDev: []
			}
		},
		onLoad() {
		},
		onShow(){
			if (this.hasLogin) {
				this.getTotalList()
			} else {
				// 要是记录了账号密码直接登录
				const account = uni.getStorageSync('account');
				const password = uni.getStorageSync('password');
				if(account && password) {
					login({
						password: md5(btoa(password) + password),
						username:  account,
						grant_type: "password"
					}).then(res => {
						this.setLogin({
							token: res.access_token,
							userName: account
						});
						this.getTotalList()
					}).catch(err => {
						console.log(err)
					})
				} else {
					this.deviceList = []
					uni.showModal({
						title: '未登录',
						content: '您未登录，需要登录后才能继续',
						/**
						 * 如果需要强制登录，不显示取消按钮
						 */
						showCancel: !this.forcedLogin,
						success: (res) => {
							if (res.confirm) {
								/**
								 * 如果需要强制登录，使用reLaunch方式
								 */
								if (this.forcedLogin) {
									uni.reLaunch({
										url: '../login/login'
									});
								} else {
									uni.navigateTo({
										url: '../login/login'
									});
								}
							}
						}
					});
				}
			}
		},        
		methods: {
			...mapActions(["getOboxList"]),
			...mapMutations(['setLogin']),
			dealOboxName(str) {
				return (this.oboxList.find(item => item.obox_serial_id === str) || {'obox_name': str}).obox_name
			},
			// 获取设备列表
			getDeviceList(){
				uni.showLoading({
				    title: '加载中'
				});
				getDeviceList({}).then(res => {
					uni.hideLoading();
					if(res.status === 200 && res.data && res.data.config) {
						this.deviceList = res.data.config;
						uni.stopPullDownRefresh();
					} else {
						this.deviceList = []
						throw res
					}
				}).catch(err => {
					uni.stopPullDownRefresh();
					uni.hideLoading();
				})
			},
			getStatus(item){
				let tarStr;
				try{
					tarStr = Suit.getStatusDescriptor(item.state,item.device_type,item.device_child_type) || ''
				}catch(e){
					tarStr = '-'
				}
				return tarStr
			},
			getTotalList() {
				// 设备列表，红外设备
				this.getDeviceList()
				// 获取obox列表1
				if(!this.oboxList.length) {
					this.getOboxList()
				}
			}
        },
		onPullDownRefresh:function(){
			if (this.hasLogin) { 
				this.getDeviceList();
			}
		},
 
	}
</script>

<style>
/* 头条小程序组件内不能引入字体 */
	/* #ifdef MP-TOUTIAO */
	@font-face {
		font-family: uniicons;
		font-weight: normal;
		font-style: normal;
		src: url('~@/static/uni.ttf') format('truetype');
	}

	/* #endif */

	/* #ifndef APP-NVUE */
	page {
		display: flex;
		flex-direction: column;
		box-sizing: border-box;
		background-color: #efeff4;
		min-height: 100%;
		height: auto;
	}

	view {
		font-size: 14px;
		line-height: inherit;
	}
	
	/* #endif */
	
	uni-button[disabled][type=primary] {
	    background-color: rgba(0,122,255,.6);
	}
	.top-select{
		font-size: 12px;
		color: #333;
	}
	.grid-item-box {
		flex: 1;
		/* position: relative;
*/
		/* #ifndef APP-NVUE */
		display: flex;
		/* #endif */
		flex-direction: column;
		align-items: center;
		justify-content: space-around;
	}
	.text {
		font-size: 26rpx;
	}
	.example-body {
		padding: 15px;
	}
	image {
		width: 30px;
		height: 30px;
		display: inline-block;
		overflow: hidden;
	}
	.device-status {
		color: #b8b8b8;
		font-size: 12px;
		text-align: center;
	}
</style>
