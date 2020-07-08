<template>
	<view class="content" style="background: url(https://7465-te-651663-1257727594.tcb.qcloud.la/back2.png?sign=79bca63b8d2a84e564c9ed5ef2ce1909&t=1550568007) no-repeat center center;">
		<m-header></m-header>
		<image bindtap='navigatortap' style="width:40vw;height: 30vh;margin: 0 auto;" mode="aspectFit"  src="/static/img/logo.png"></image>
		<view class="input-group">
			<view class="input-row border">
				<text class="title">账号：</text>
				<m-input class="m-input" type="text" clearable v-model="account" placeholder="请输入账号"></m-input>
			</view>
			<view class="input-row">
				<text class="title">密码：</text>
				<m-input type="password" displayable v-model="password" placeholder="请输入密码"></m-input>
			</view>
		</view>
		<view class="btn-row">
			<button type="primary" class="primary" :disabled="!(account && password)" @tap="bindLogin">登录</button>
		</view>
	</view>
</template>

<script>
	import request from '@/common/request.js';
	import { login } from '@/api/global.js'
	import md5 from 'md5';
	import btoa from 'btoa';
	import {
		mapState,
		mapMutations,
		mapActions
	} from 'vuex'
	import mInput from '@/components/m-input.vue'
	import mHeader from '@/components/header.vue'
	export default {
		components: {
			mInput,
			mHeader
		},
		data() {
			return {
				providerList: [],
				hasProvider: false,
				account: '',
				password: '',
				closeTap: false
			}
		},
		// computed: mapState(['forcedLogin']),
		methods: {
			...mapMutations(['setLogin']),
			bindLogin() {
				/**
				 * 下面简单模拟下服务端的处理
				 * 检测用户账号密码是否在已注册的用户列表中
				 * 实际开发中，使用 uni.request 将账号信息发送至服务端，客户端在回调函数中获取结果信息。
				 */
				if(this.closeTap) return
				this.closeTap = true
				const data = {
					password: md5(btoa(this.password) + this.password),
					username:  this.account,
					grant_type: "password"
				};
				uni.showLoading({
				    title: '加载中'
				});
				login(data).then(res => {
					// 执行某些操作
					this.setLogin({
						token: res.access_token,
						userName: this.account
					});
					uni.setStorage({
					    key: 'account',
					    data: this.account,
					});
					uni.setStorage({
					    key: 'password',
					    data: this.password,
					});
					this.backEven()
				}).catch(err => {
					console.log(err)
					this.closeTap = false
					setTimeout(() => { //防止load与showToast冲突bug
						uni.hideLoading()
					}, 1000)
				})
			},
			backEven(){
				if(getCurrentPages().length > 1) {
					uni.navigateBack();
				} else {
					uni.switchTab({
						url: '/pages/device/deviceList',
					});
				}
			}
		},
		onReady() {
			// this.bindLogin()
			uni.getStorage({
			    key: 'account',
			    success:  (res) => {
					this.account = res.data
			    }
			});
			uni.getStorage({
			    key: 'password',
			    success:  (res) => {
					this.password = res.data
			    }
			});
		}
	}
</script>

<style>
	.action-row {
		display: flex;
		flex-direction: row;
		justify-content: center;
	}

	.action-row navigator {
		color: #007aff;
		padding: 0 10px;
	}

	.oauth-row {
		display: flex;
		flex-direction: row;
		justify-content: center;
		position: absolute;
		top: 0;
		left: 0;
		width: 100%;
	}

	.oauth-image {
		position: relative;
		width: 50px;
		height: 50px;
		border: 1px solid #dddddd;
		border-radius: 50px;
		margin: 0 20px;
		background-color: #ffffff;
	}

	.oauth-image image {
		width: 30px;
		height: 30px;
		margin: 10px;
	}

	.oauth-image button {
		position: absolute;
		left: 0;
		top: 0;
		width: 100%;
		height: 100%;
		opacity: 0;
	}
	
	/* 开始 */
	.content {
		box-sizing: 100% 100%;
	}
	.input-group {
		background-color: rgba(255,255,255,.2);
		margin: 20px 10px 0;
		border-radius: 5px;
		overflow: hidden;
	}
	.input-group::before,.input-group::after{
		height: 0;
	}
	.content {
		padding: 0;
	}
</style>
