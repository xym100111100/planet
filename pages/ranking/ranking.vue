<template>
	<view class="container">
		<view class="container-header">
			<MyStatusBar />
			<view class="ranking-three">
				<view class="item item-left ">
					<view class="item-img">
						<image src="https://wx.qlogo.cn/mmopen/vi_32/Hx7MFkCEmZVHziaTTiaHSiaCs4ApnH5CD0nYOhOg1nYUUMYtxMXkL6L4VL5icRfO5w4LGzW5ib0FZicwj2MficyYfZgCw/132"
						 class="avatar"></image>
					</view>
					<view class="nick-name">
						吴彦祖很忙很忙很忙很忙
					</view>
					<view class="item-count">
						2
					</view>
					<view class="item-text">

					</view>

				</view>
				<view class="item item-center">
					<view class="item-img">
						<image src="https://wx.qlogo.cn/mmopen/vi_32/Hx7MFkCEmZVHziaTTiaHSiaCs4ApnH5CD0nYOhOg1nYUUMYtxMXkL6L4VL5icRfO5w4LGzW5ib0FZicwj2MficyYfZgCw/132"
						 class="avatar"></image>
					</view>
					<view class="nick-name">
						杰克
					</view>
					<view class="item-count" style="color: #DBA871;">
						20
					</view>
					<view class="item-text">

					</view>
				</view>
				<view class="item item-right ">
					<view class="item-img">
						<image src="https://wx.qlogo.cn/mmopen/vi_32/Hx7MFkCEmZVHziaTTiaHSiaCs4ApnH5CD0nYOhOg1nYUUMYtxMXkL6L4VL5icRfO5w4LGzW5ib0FZicwj2MficyYfZgCw/132"
						 class="avatar"></image>
					</view>
					<view class="nick-name">
						umbrella
					</view>
					<view class="item-count">
						3
					</view>
					<view class="item-text">

					</view>
				</view>
			</view>
			<view class="tags">
			<!-- 	<view @tap="goPage('/pages/ranking/history/history')" class="item" style="border-bottom: solid 1rpx #dba871;">
					历史榜单
				</view> -->
				<view @tap="openPopup('strategy')" class="item" style="border-bottom: solid 1rpx #dba871;">
					上榜攻略
				</view>
				<view @tap="openPopup('reward')" class="item">
					上榜奖励
				</view>
			</view>
		</view>

		<scroll-view scroll-y="true" style="height: 100%;" class="orders-scroll">
			<view class="wrapper">
				<view class="order-list">
					<navigator class="order" v-for="(item, index) in kingList1" :key="index" open-type="navigate" :url="'/pages/order/detail?id=' + item.id">

						<view class="header">

							<view class="flex-fill font-size-medium header-left  ">
								<image :src="item.portrait" class="avatar"></image>
								<text>{{item.name }}</text>
							</view>
							<view class="status">
								<view v-if="index >=  0  &&  index <= 2">
									<text class="back">任意奶茶</text>
								</view>
								<view v-if="index >=  3  &&  index <= 10">
									<text class="back">星球卷</text>
								</view>
								<template v-if="index == 0">
									<view class="icon" v-for="(item,index) in [1,2,3]" :key="index">
										<image src="/static/images/common/nai-cha.png"> </image>
									</view>
								</template>
								<template v-if="index == 1">
									<view class="icon" v-for="(item,index) in [1,2]" :key="index">
										<image src="/static/images/common/nai-cha.png"> </image>
									</view>
								</template>
								<template v-if="index == 2">
									<view class="icon" v-for="(item,index) in [1]" :key="index">
										<image src="/static/images/common/nai-cha.png"> </image>
									</view>
								</template>
								<template v-if="index >=  3  &&  index <= 10">
									<view class="icon">
										<image src="/static/images/common/you-hui-juan2.png"> </image>
									</view>
								</template>

							</view>

						</view>
						<view class="friends">
							<view class="friends-list">
								<image v-for="(img ,index) in item.friendsList" :key="index" class="list-img" :src="img" mode=""></image>
							</view>
						</view>

					</navigator>
				</view>
				<!-- <view class="no-order-content">
							<image src="https://go.cdn.heytea.com/storage/ad/2020/05/20/0bdb360866d94aa4a4404c0b676a1982.jpg"></image>
							<view class="tips">
								<view>您今天还没有下单</view>
								<view>快去选择一杯喜欢的茶吧</view>
							</view>
							<button type="primary" class="font-size-lg" hover-class="none">去下单</button>
						</view> -->
			</view>
		</scroll-view>

		<uni-popup ref="strategy" type="center">
			<view class="pl-popup">
				<view class="popup-title">
					上榜攻略
				</view>
				<view class="popup-content text-color-assist">
					<view>1.购买奶茶后分享给好友点亮星球，一周内点亮星球越多就排在越前面。</view>
					<view>2.一周内一个好友只能帮点亮一次。</view>
				</view>
				
			</view>
		</uni-popup>

		<uni-popup ref="reward" type="center">
			<view class="pl-popup">
				<view class="popup-title">
					上榜奖励
				</view>
				<view class="popup-content text-color-assist">
					<view>1.第一名奖励3杯任意奶茶。</view>
					<view>2.第二名奖励2杯任意奶茶。</view>
					<view>3.第三名奖励2杯任意奶茶。</view>
					<view>4.第四名到第十名奖励1张星球卷。</view>
					<view>5.星球奶茶日(每周日)早上八点截止统计并发放奖励。</view>
				</view>

			</view>
		</uni-popup>

	</view>
</template>

<script>
	import MyStatusBar from '@/components/my-status-bar/my-status-bar.vue'

	export default {
		components: {
			MyStatusBar
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


				tabIndex: 0,
				orderMenuIndex: 0,
				orders: [],
				storeOrders: [],
				kingList1: [],
				kingList2: [],
				labels: [

				]

			}
		},
		created() {
			this.getOrders()
			this.getRankingList()
			this.getUserLabels()

		},
		methods: {
			openPopup(val, payload, method) {
				this.$refs[val].open(payload, method)
			},
			goPage(url) {

				uni.navigateTo({
					url: url
				})
			},
			async getUserLabels() {
				let {
					data = []
				} = await this.$api2.request('getUserLabels')
				let indexArr = [0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11]
				indexArr = this.shuffle(indexArr)
				data = data.map((item, index) => {
					return {
						title: item,
						index: indexArr[index]
					}
				})

				this.labels = this.shuffle(data)
			},
			shuffle(data) {
				let arr = [...data]
				for (let i = 1; i < arr.length; i++) {
					const random = Math.floor(Math.random() * (i + 1));
					[arr[i], arr[random]] = [arr[random], arr[i]];
				}
				return arr;

			},
			async getRankingList() {

				this.kingList1 = []
				this.kingList2 = []
				let {
					data = []
				} = await this.$api2.request('/ranking/getRankingList')

				this.kingList1 = [...data, ...data]

				this.kingList2 = data
			},
			async switchTab(index) {
				if (this.tabIndex === index) return
				this.tabIndex = index

				await this.getOrders()

			},
			handleSwiperItemChange() { //禁止手动滑动
				return true
			},

			async getOrders() {
				if (!this.orderMenuIndex) {
					this.orders = await this.$api('orders')
				} else {
					this.storeOrders = []
					this.storeOrders = await this.$api('storeOrders')
				}
			},

		}
	};
</script>

<style lang="scss" scoped>
	page {
		background-color: #f6f6f6;
	}

	.container-header {
		background: url('https://go.cdn.heytea.com/storage/ad/2020/05/01/e1c6915022c849fd9492377021aef454.jpg');
		position: relative;

		.label0 {
			position: absolute;
			text-align: center;
			color: #e1baba;
			top: 30rpx;
			left: 5rpx;
			width: 100rpx;
		}

		.label1 {
			position: absolute;
			text-align: center;
			color: #e1baba;
			top: 200rpx;
			/* #ifdef H5 */
			top: 180rpx;
			/* #endif */
			left: 500rpx;
			width: 120rpx;
		}

		.label2 {
			position: absolute;
			text-align: center;
			color: #e1baba;
			top: 120rpx;
			left: 190rpx;
			width: 200rpx;
		}

		.label3 {
			position: absolute;
			text-align: center;
			color: #e1baba;
			top: 160rpx;
			left: 600rpx;
			width: 200rpx;
		}

		.label4 {
			position: absolute;
			text-align: center;
			color: #e1baba;
			top: 101rpx;
			left: 70rpx;
			width: 60rpx;
		}

		.label5 {
			position: absolute;
			text-align: center;
			color: #e1baba;
			top: 1rpx;
			left: 667rpx;
			width: 10rpx;
		}

		.label6 {
			position: absolute;
			text-align: center;
			color: #e1baba;
			top: -11rpx;
			left: 227rpx;
			width: 10rpx;
		}

		.label7 {
			position: absolute;
			text-align: center;
			color: #e1baba;
			top: 120rpx;
			left: 417rpx;
			width: 100rpx;
		}

		.label8 {
			position: absolute;
			text-align: center;
			color: #e1baba;
			top: 182rpx;
			left: -20rpx;
			width: 100rpx;
		}

		.label9 {
			position: absolute;
			text-align: center;
			color: #e1baba;
			top: 150rpx;
			left: 277rpx;
			width: 120rpx;
		}

		.label10 {
			position: absolute;
			text-align: center;
			color: #e1baba;
			top: 40rpx;
			left: 387rpx;
			width: 10rpx;
		}

		.label11 {
			position: absolute;
			text-align: center;
			color: #e1baba;
			top: 10rpx;
			left: 517rpx;
			width: 100rpx;
		}

		.tags {
			position: fixed;
			right: 20rpx;
			bottom: 140rpx;
			z-index: 1;
			background: rgba(0, 0, 0, 0.2);
			color: white;

			.item {
				padding: 25rpx;
			}
		}

		.navbar {
			height: calc(74px + var(--status-bar-height));

			display: flex;


			.talk-btn {

				height: 32px;
				margin-left: 10px;
				margin-top: 26px;
				/* #ifdef H5 */
				margin-top: 6px;
				/* #endif */
				display: flex;
				align-items: center;
				justify-content: center;
				font-size: $font-size-sm !important;
				padding: 0 20rpx;



				image {
					width: 40rpx;
					height: 40rpx;
					margin-right: $spacing-row-sm;
				}
			}
		}




		.tabbar {
			height: 100rpx;

			display: flex;
			align-items: center;
			justify-content: space-around;

			.item {
				height: 100%;
				font-size: $font-size-lg;
				color: $text-color-inverse;
				font-weight: 400 !important;
				display: flex;
				align-items: center;

				&.active {
					color: $text-color-inverse;
					border-bottom: 4rpx solid $text-color-inverse;
				}
			}
		}

		.ranking-three {
			display: flex;
			width: 100%;
			padding: 20rpx 30rpx 20rpx;
			align-items: flex-end;

			.item {
				background: white;
				flex: 1;
				text-align: center;
				box-sizing: border-box;
				padding-top: 20rpx;

				.avatar {
					width: 100rpx;
					height: 100rpx;
					border-radius: 100%;
				}

				.nick-name {
					width: 140rpx;
					margin: 6rpx auto;
					overflow: hidden;
					text-overflow: ellipsis;
					white-space: nowrap;
					font-size: $font-size-medium;
				}

				.item-count {
					font-family: 'neutra';
					font-size: $font-size-extra-lg;
				}

				.item-text {
					color: $text-color-assist;
				}
			}

			.item-left {
				border-top-left-radius: 10rpx;
				border-bottom-left-radius: 10rpx;
				position: relative;
				padding-bottom: 30rpx;
			}

			.item-left::before {
				position: absolute;
				right: 0;
				top: 0;
				content: " ";
				width: 0;
				height: 0;
				border-left: 3rpx solid transparent;
				border-right: 3rpx solid transparent;
				border-top: 170rpx solid #f0e8e8;


			}

			.item-center {
				padding-bottom: 80rpx;
				border-top-right-radius: 10rpx;
				border-top-left-radius: 10rpx;
			}


			.item-right {
				border-top-right-radius: 10rpx;
				border-bottom-right-radius: 10rpx;
				position: relative;
				padding-bottom: 30rpx;
			}

			.item-right::after {
				position: absolute;
				left: 0;
				top: 0;
				content: " ";
				width: 0;
				height: 0;
				border-left: 3rpx solid transparent;
				border-right: 3rpx solid transparent;
				border-top: 170rpx solid #f0e8e8;
			}


		}
	}




	.swiper {
		width: 100%;
		height: calc(100vh - 44px - var(--status-bar-height) - 430rpx);
		/* #ifdef H5 */
		height: calc(100vh - 44px - var(--status-bar-height) - 430rpx - 160rpx);
		/* #endif */
	}

	.no-order-content {
		width: 100%;
		height: 100%;
		display: flex;
		flex-direction: column;
		align-items: center;
		justify-content: center;

		image {
			width: 300rpx;
			height: 300rpx;
			margin-bottom: 50rpx;
		}

		.tips {
			color: $text-color-assist;
			display: flex;
			flex-direction: column;
			align-items: center;
			line-height: 1.2rem !important;
			margin-bottom: 70rpx;
		}

		button {
			width: 50%;
		}
	}

	.history-order {
		width: 100%;
		height: 100%;
		position: relative;



		.history-order-swiper {
			width: 100%;
			height: 100%;
		}
	}

	.store-order-wrapper {
		width: 100%;
		height: 100%;
		display: flex;
		flex-direction: column;
		align-items: center;
		justify-content: center;
		font-size: $font-size-base;
		color: $text-color-assist;
		line-height: 1.3rem !important;

		image {
			width: 400rpx;
			height: 333rpx;
			margin-bottom: 40rpx;
		}
	}

	.orders-scroll {
		width: 100%;
		height: 100%;

	}

	.order-list {
		display: flex;
		width: 100%;
		flex-direction: column;

		.order {
			background-color: $bg-color-white;
			padding: 30rpx 26rpx 30rpx 10rpx;
			margin-bottom: 18rpx;
			position: relative;



			.header {
				display: flex;
				justify-content: space-between;
				align-items: center;
				padding-left: 10rpx;


				.status {
					font-size: $font-size-base;
					display: flex;
					align-items: center;
					text-align: center;

					image {
						width: 39rpx;
						height: 39rpx;

					}

					.back {
						padding: 0 10rpx;
					}

					.total {
						padding-top: 10rpx;
						color: $text-color-assist;
					}

					.icon {
						height: 42rpx;
						display: flex;
						align-items: flex-end;
						justify-content: center;
						text-align: center;
						width: 42rpx;
					}



				}

				.header-left {
					display: flex;
					align-items: center;



					image {
						width: 55rpx;
						height: 55rpx;
						border-radius: 100%;
						margin: 0 15rpx;
					}
				}
			}

			.friends {
				display: flex;
				padding-left: 100rpx;
				margin-top: 15rpx;

				.list-img {
					height: 35rpx;
					width: 35rpx;
					border-radius: 10rpx;
					margin: 5rpx;
				}
			}




		}
	}
</style>
