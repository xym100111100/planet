<template>
	<view :class="[theme]" class="bm-container">
		<view class="header">
			<myStatusBar />
			<view class="header__content">
				<view class="title font-size-32">
					测试模版
				</view>
			</view>
			<view class="tab-nav">
				<view class="switch-list" style="height: 49px;">
					<view @tap="changeSwitch(index)" :style="item.active?'border-bottom: solid 2px #F3433D ':''" :class="item.active?'item active-item':'item'"
					 v-for="(item,index) in switchData" :key="index">
						{{item.title}}
					</view>
				</view>
			</view>
		</view>
		<view class="main">
			<scroll-view lower-threshold="150" @scrolltolower="lower" refresher-enabled="true" :refresher-triggered="triggered"
			 :refresher-threshold="100" refresher-background="#f1eeee" @refresherrefresh="onRefresh" @refresherrestore="onRestore"
			 scroll-y="true" style="height: 100%;">
				<view class="list-item" v-for="(iten,index) in   dataList" :key="index">
					{{index}}
				</view>
				<view class="bm-loading-more">{{finishText}}</view>
			</scroll-view>
		</view>
	</view>
</template>

<script>
	import myStatusBar from "@/components/myStatusBar/myStatusBar.vue"
	import myList from "@/components/myLIst/myList.vue"

	export default {
		components: {
			myStatusBar,
			myList
		},
		computed: {

			theme() {
				return this.$store.state.theme.name;
			}
		},

		data() {
			return {
				finishText: '加载中...',
				triggered: true, // 下拉状态，显示自定义下拉组件
				_freshing: false, // 防止重复触发下拉
				isFinish: false,
				dataList: [],
				queryParams: {
					page: 1,
					row: 10
				},
				switchData: [{
						index: 1,
						active: true,
						title: '全部',
					},
					{
						index: 2,
						active: false,
						title: '进行中',
					},
					{
						index: 3,
						active: false,
						title: '已完成',
					},
					{
						index: 4,
						active: false,
						title: '已取消',
					},

				]

			}
		},
		onLoad() {
			this.getListData()
		},
		methods: {
			getListData(callback) {
				if (this.isFinish) return;
				this.finishText = ""
				this.$http.get('initData', this.queryParams).then(req => {
					clearTimeout(this.timer)
					this.timer = setTimeout(() => {
						this.dataList.push(...req.data.data)
						// 修改底部提示
						if ((this.queryParams.page * this.queryParams.row) >= req.data.total) {
							this.isFinish = true
							this.finishText = "没有更多了"
						} else {
							this.isFinish = false
							this.finishText = "加载更多..."
						}

						// 触发回调
						callback ? callback(req) : ""

					}, 200)
				}).catch(err => {
					this.finishText = "出错了..."
					console.log(err)
				})

			},
			changeSwitch(index) {
				this.switchData.forEach(item => {
					item.active = false
				})
				this.switchData[index].active = true

				this.dataList = []
				this.isFinish = false
				this.queryParams.page = 1

				this.getListData()
			},

			lower(e) {
				// 上拉加载
				this.queryParams.page = this.queryParams.page + 1
				this.getListData()
			},

			onRefresh() {
				if (this._freshing) return;
				this._freshing = true;
				this.isFinish = false
				this.queryParams.page = 1
				this.dataList = []

				this.getListData(() => {
					this.triggered = false;
					this._freshing = false;
				})
			},
			onRestore() {
				this.triggered = 'restore'; // 需要重置

			},


		}
	}
</script>

<style lang="less" scoped>
	.bm-container {
		height: 100%;
		display: flex;
		flex-direction: column;

		.header {
			width: 100%;
			background: url(http://localhost:8080/static/images/index/index-back.png);

			&__content {
				.title {
					height: 62rpx;
					margin-bottom: 14rpx;
					line-height: 62rpx;
					color: #FFFFFF;
					text-align: center;
				}

				.content {
					height: 216rpx;
				}

			}

			.tab-nav {
				.switch-list {
					background: #FFFFFF;
					border-bottom: solid 2rpx #E4E4E4;
					display: flex;
					justify-content: space-around;
					align-items: center;

					.item {
						height: 100%;
						width: 100%;
						text-align: center;
						line-height: 98rpx;
						font-size: 30rpx;
						color: #666666;
					}

					.active-item {
						color: #F3433D;
					}
				}
			}

		}

		.main {
			height: 10rpx;
			flex-grow: 1;

			.list-item {
				height: 120rpx;
				margin-bottom: 20rpx;
				border: solid 1rpx #999;
			}
		}


	}
</style>
