<template>
	<view class="scene">
		<uni-section title="场景列表" type="line">
			<picker @change="bindPickerChange" :value="selectIndex"  range-key="label" :range="array">
				<view class="uni-input top-select">{{array[selectIndex].label}}</view>
			</picker>
		</uni-section>
		<uni-card v-for="item in sceneList" :key="item.scene_number" :title="item.scene_name" :extra="dealExtra(item)" isShadow v-if="!array[selectIndex].value || item.obox_serial_id === array[selectIndex].value" @click="contral(item.scene_number, '02')">
			<text class="content-box-text">
				场景类型：{{sceneType[item.scene_type]}} 
				场景序号：{{item.scene_number}}
				状态：<text :style="{'color': item.scene_status ? 'green':'red'}">{{item.scene_status ? '启用': '禁用'}}</text>
				\n{{item.obox_scene_number ? ('OBOX本地场景序号：' + item.obox_scene_number) : ''}}
			</text>
			<!-- <template slot="footer">
				<view style="text-align: right;">
					<button class="mini-btn" type="warn"  size="mini"  @tap="contral(item.scene_number, '00')" v-if="item.scene_status">禁用</button>
					<button class="mini-btn" type="default"  size="mini"  @tap="contral(item.scene_number, '01')" v-else>启用</button>
					<button class="primary" type="primary" :disabled="!item.scene_status" size="mini"  @tap="contral(item.scene_number, '02')" v-if="item.scene_status">触发场景</button>
				</view>
			</template> -->
		</uni-card>	
	</view>
</template>
<script>
	import { getSceneList, controlScene } from '@/api/scene.js'
	import {
		mapState,
		mapActions
	} from 'vuex'
	import uniSection from '@/components/uni-section/uni-section.vue'
	import uniCard from '@/components/uni-card/uni-card.vue'
	export default {
		computed: {
			...mapState(['forcedLogin', 'hasLogin', 'oboxList']),
			array(){
				let tarArr = [{'value':'','label':'全部'}],obj = {}
				this.sceneList.forEach(ele => {
					if(ele.obox_serial_id && !obj[ele.obox_serial_id]) {
						obj[ele.obox_serial_id] = true;
						tarArr.push({'value': ele.obox_serial_id,'label': this.dealOboxName(ele.obox_serial_id)})
					} 
				})
				return tarArr
			}
		},
		components:{
			uniSection,
			uniCard
		},
		data(){
			return {
				sceneList: [],
				_freshing: false,	//是否正在
				triggered: false,
				sceneType: {
					'00': '服务器场景',
					'01': '本地场景',
					'02': '有人场景',
					'03': '无人场景',
					'04': '安防场景',
				},
				// array: ['中国', '美国', '巴西', '日本'],
				selectIndex: 0
			}
		},
		onLoad() {
		},
		onShow(){
			if (this.hasLogin) { 
				// 场景列表
				this.getList()
				// 获取obox列表
				if(!this.oboxList.length) {
					this.getOboxList()
				}
			} else {
				this.sceneList = []
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
		},        
		methods: {
			...mapActions(["getOboxList"]),
			getList(){
				getSceneList({}).then(res => {
					if(res.status === 200 && res.data && res.data.scenes) {
						this.sceneList = res.data.scenes;
						uni.stopPullDownRefresh();
					} else {
						throw res
					}
				}).catch(err => {
					uni.stopPullDownRefresh();
				})
			},
			contral(scene_number, scene_status) {
				// CMD=execute_sc&scene_number=6436&scene_status=00
				const params = `scene_status=${scene_status}&scene_number=${scene_number}`
				controlScene(params).then(res => {
					uni.showToast({
						title: '命令下发成功',
						duration: 2000
					});
					if(scene_status === '00' || scene_status === '01') {
						setTimeout(() => {
							this.getList()
						}, 1000)
					}
				}).catch(err => {
					console.log('err', err)
				})
			},
			dealExtra(item) {
				if(item.obox_serial_id) return this.dealOboxName(item.obox_serial_id)
				return ''
			},
			dealOboxName(str) {
				return (this.oboxList.find(item => item.obox_serial_id === str) || {'obox_name': str}).obox_name
			},
			bindPickerChange(e) {
				console.log('picker发送选择改变，携带值为', e.target.value)
				this.selectIndex = e.target.value
			},
        },
		onPullDownRefresh:function(){
			if (this.hasLogin) { 
				this.getList();
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
	
	.content-box {
		padding-top: 20rpx;
	}
	
	.content-box-text {
		font-size: 12px;
		line-height: 22px;
	}
	uni-button[disabled][type=primary] {
	    background-color: rgba(0,122,255,.6);
	}
	.mini-btn {
		margin-right: 15px;
	}
	.top-select{
		font-size: 12px;
		color: #333;
	}
</style>
