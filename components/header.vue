<template>
	<view :style="{height: (topHeight + 44) + 'px',backgroundColor:theme? bcgColor :''}" style="width: 100vw;">
		<view class="status_bar" :style="{height: topHeight + 'px'}">
		  <!-- 这里是状态栏 -->
		</view>
		<view class="back-box">
			<button class="back-btn" @tap="backEven" size="mini">返回</button>
			<text class="title-name">{{title}}</text>
		</view>
	</view>
</template>

<script>
	// 头部样式
	export default {
		components: {
		},
		props: {
			/**
			 * 标题
			 */
			title: String,
			theme: {
				// 内容区域是否通栏
				type: Boolean,
				default: false
			},
			bcgColor: {
				// 内容区域是否通栏
				type: String,
				default: "#0faeff"
			},
		},
		model: {
			prop: 'value',
			event: 'input'
		},
		data() {
			return {
				topHeight: 20,
			}
		},
		methods: {
			backEven(){
				if(getCurrentPages().length > 1) {
					uni.navigateBack();
				} else {
					uni.switchTab({
						url: '/pages/device/deviceList',
					});
				}
			},
		},
		created(){
			this.topHeight = uni.getSystemInfoSync().statusBarHeight
		}
	}
</script>

<style>
	.status_bar {
		width: 100%;
	}
	.back-box {
		height: 44px;
		width: 100%;
		padding-left: 10px;
		padding-top: 0px;
		box-sizing: border-box;
		display: flex;
		justify-content: space-between;
		align-items: center;
	}
	.back-btn {
		color: #fff;
		border: none;
		background: transparent;
	}
	.title-name {
		flex: 1 1;
		text-align: center;
		padding-right: 5em;
		font-size: 13px;
		line-height: 2.3;
		color: #fff;
		font-weight: bold;
	}
</style>
