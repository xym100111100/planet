<template>
	<view class="container">
		<view class="container-header">
			<view :class="'label'+item.index" v-for="(item , index) in labels"  :key="index" >
				{{item.title}}
			</view>
			
			<view class="navbar">
				<view type="default" plain class="talk-btn">
				</view>
			</view>

			<view class="tabbar">
				<view class="item" :class="{active: !tabIndex}" @tap="switchTab(0)">星球榜</view>
				<view class="item" :class="{active: tabIndex}" @tap="switchTab(1)">好友榜</view>
			</view>
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
						本周助力好友
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
						本周助力好友
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
						本周助力好友
					</view>
				</view>
			</view>
			<view class="tags">
					<view class="item" style="border-bottom: solid 1rpx #dba871;">
						历史榜单
					</view>
					<view class="item" style="border-bottom: solid 1rpx #dba871;">
						上榜攻略
					</view>
					<view class="item"  >
						获得奖励
					</view>
			</view>
		</view>
		<swiper :current="tabIndex" :duration="300" class="swiper" :show-scrollbar="false">
			<!-- 星球榜 begin -->
			<swiper-item @touchmove.stop="handleSwiperItemChange">
				<scroll-view scroll-y="true" class="orders-scroll">
					<view class="wrapper">
						<view class="order-list">
							<navigator class="order" v-for="(item, index) in kingList1" :key="index" open-type="navigate" :url="'/pages/order/detail?id=' + item.id">
								<view class="index-num">
									{{index +1}}
								</view>
								<view class="header">

									<view class="flex-fill font-size-medium header-left  ">
										<image :src="item.portrait"
										 class="avatar"></image>
										<text>{{item.name }}</text>
									</view>
									<view class="status">
										<view>
											<view>
												获得<text class="back">{{item.backMoney}}</text> ￥
											</view>
											<view class="total">
												购买{{item.payMoney}}￥
											</view>
										</view>
									</view>

								</view>
								<view class="friends">
									<view class="friends-list">
										<image v-for="(img ,index) in item.friendsList"  :key="index"  class="list-img" :src="img"
										 mode=""></image>
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

			</swiper-item>
			<!-- 星球榜 end -->
			<!-- 好友榜 begin -->
			<swiper-item @touchmove.stop="handleSwiperItemChange">
				<!-- 好友榜 begin -->

				<scroll-view scroll-y="true" class="orders-scroll">
					<view class="wrapper">
						<view class="order-list">
							<navigator class="order" v-for="(item, index) in kingList1" :key="index" open-type="navigate" :url="'/pages/order/detail?id=' + item.id">
								<view class="index-num">
									{{index +1}}
								</view>
								<view class="header">
				
									<view class="flex-fill font-size-medium header-left  ">
										<image :src="item.portrait"
										 class="avatar"></image>
										<text>{{item.name }}</text>
									</view>
									<view class="status">
										<view>
											<view>
												获得<text class="back">{{item.backMoney}}</text> ￥
											</view>
											<view class="total">
												购买{{item.payMoney}}￥
											</view>
										</view>
									</view>
				
								</view>
								<view class="friends">
									<view class="friends-list">
										<image v-for="(img ,index) in item.friendsList"  :key="index"  class="list-img" :src="img"
										 mode=""></image>
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
			</swiper-item>
			<!-- 历史订单 end -->
		</swiper>
		<!-- <image src="https://go.cdn.heytea.com/storage/ad/2020/05/20/1a389117c2fb44d5bcad4a910a68246c.jpg"></image> -->
	</view>
</template>

<script>
	export default {
		data() {
			return {
				tabIndex: 0,
				orderMenuIndex: 0,
				orders: [],
				storeOrders: [],
				kingList1:[],
				kingList2:[],
				labels:[
					
				]
				
			}
		},
		async onLoad() {},
		computed: {
			batchInvoiceVisible() {
				return (!this.orderMenuIndex && this.orders.length) || (this.orderMenuIndex && this.storeOrders.length)
			}
		},
		created() {
			this.getOrders()
			this.getRankingList()
			this.getUserLabels()
		},
		methods: {
			async getUserLabels(){
				let {
					data = []
				} = await this.$api2.request('getUserLabels')
				 let indexArr = [0,1,2,3,4,5,6,7,8,9,10,11]
				indexArr = this.shuffle(indexArr) 
				data = data.map((item,index)=>{
					return{
						title:item,
						index:indexArr[index]
					}
				})
				
				this.labels = this.shuffle(data)
			},
			shuffle(data){
				let arr = [...data]
				for (let i = 1; i < arr.length; i++) {
				    const random = Math.floor(Math.random() * (i + 1));
				    [arr[i], arr[random]] = [arr[random], arr[i]];
				}
				return arr;
				 
			},
			async getRankingList() {
				
				let {
					data = []
				} = await this.$api2.request('/ranking/getRankingList')
				this.kingList1  = data
				this.kingList2  = data
			},
			async lower(e) {
				console.log(e)

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
					this.storeOrders = await this.$api('storeOrders')
				}
			}
		}
	};
</script>

<style lang="scss" scoped>
	page {
		background-color: #f6f6f6;
	}

	.container-header {
		height: 580rpx;
		background-color: #DBA871;
		position: relative;
		.label0{
			position: absolute;
			text-align: center;
			color: #eacdcd;
			top:30rpx;
			left:5rpx;
			width:100rpx;
		}
		.label1{
			position: absolute;
			text-align: center;
			color: #eacdcd;
			top:210rpx;
			left:500rpx;
			width:100rpx;
		}
		.label2{
			position: absolute;
			text-align: center;
			color: #eacdcd;
			top:150rpx;
			left:107rpx;
			width:12rpx;
		}
		.label2{
			position: absolute;
			text-align: center;
			color: #eacdcd;
			top:130rpx;
			left:170rpx;
			width:200rpx;
		}
		.label3{
			position: absolute;
			text-align: center;
			color: #eacdcd;
			top:160rpx;
			left:600rpx;
			width:200rpx;
		}
		.label4{
			position: absolute;
			text-align: center;
			color: #eacdcd;
			top:101rpx;
			left:70rpx;
			width:60rpx;
		}
		.label5{
			position: absolute;
			text-align: center;
			color: #eacdcd;
			top:1rpx;
			left:667rpx;
			width:10rpx;
		}
		.label6{
			position: absolute;
			text-align: center;
			color: #eacdcd;
			top:-11rpx;
			left:227rpx;
			width:100rpx;
		}
		.label7{
			position: absolute;
			text-align: center;
			color: #eacdcd;
			top:120rpx;
			left:417rpx;
			width:100rpx;
		}
		.label8{
			position: absolute;
			text-align: center;
			color: #eacdcd;
			top:182rpx;
			left:-20rpx;
			width:100rpx;
		}
		.label9{
			position: absolute;
			text-align: center;
			color: #eacdcd;
			top:150rpx;
			left:277rpx;
			width:100rpx;
		}
		.label10{
			position: absolute;
			text-align: center;
			color: #eacdcd;
			top:40rpx;
			left:387rpx;
			width:10rpx;
		}
		.label11{
			position: absolute;
			text-align: center;
			color: #eacdcd;
			top:10rpx;
			left:517rpx;
			width:100rpx;
		}
		
		.tags{
			position: absolute;
			right: 20rpx;
			bottom: -300rpx;
			z-index: 1000;
			 background: rgba(0, 0, 0 ,0.2);
			 color: white;
			.item{
				
				 padding: 20rpx;
			}
		}
			
		.navbar {
			height: calc(44px + var(--status-bar-height));

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
			padding: 20rpx 30rpx 0;
			height: 320rpx;
			align-items: flex-end;

			.item {
				background: white;
				height: 280rpx;
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
				height: 320rpx;
				border-top-right-radius: 10rpx;
				border-top-left-radius: 10rpx;
			}


			.item-right {
				border-top-right-radius: 10rpx;
				border-bottom-right-radius: 10rpx;
				position: relative;
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
			padding: 30rpx 40rpx;
			margin-bottom: 18rpx;
			position: relative;

			.index-num {
				color: $text-color-assist;
				position: absolute;
				left: 25rpx;
				top: 48%;
				font-size: $font-size-lg;
			}

			.header {
				display: flex;
				justify-content: space-between;
				align-items: center;
				padding-left: 20rpx;


				.status {
					font-size: $font-size-base;
					display: flex;
					align-items: center;
					text-align: center;

					image {
						width: 30rpx;
						height: 30rpx;
						margin-left: $spacing-row-sm;
					}

					.back {

						padding: 0 3rpx;
						font-size: $font-size-extra-lg;
					}

					.total {
						padding-top: 10rpx;
						color: $text-color-assist;
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
