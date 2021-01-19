<template>
	<view class="container">
		<MyStatusBar />
		<view class="header">
			<view class="title">
				<view class="talk-btn" @tap="goPage('/pages/my/theme/rule')">
					<image src="/static/images/order/order_icon_talk2.0.png"></image>
					<view class="font-size-lg text">大战规则</view>
				</view>
			</view>
			<view class="pl-30 pb-30 result">
				<view class="time">
					05:26:12:10 后结束
				</view>
				<view class="msg pl-30">
					<text>umnrella：将获得</text>
					<image class="result-img" src="../../../static/images/common/nai-cha.png" mode=""></image>
					<image class="result-img" src="../../../static/images/common/nai-cha.png" mode=""></image>
					<image class="result-img" src="../../../static/images/common/nai-cha.png" mode=""></image>
					<image class="result-img" src="../../../static/images/common/nai-cha.png" mode=""></image>

				</view>
				<view class="msg pl-30">
					<text>杰克and露丝：将获得</text>
					<image class="result-img" src="../../../static/images/common/nai-cha.png" mode=""></image>
					<image class="result-img" src="../../../static/images/common/nai-cha.png" mode=""></image>
				</view>
				<view class="msg pl-30">
					<text>小明同学：将获得</text>
					<image class="result-img" src="../../../static/images/common/nai-cha.png" mode=""></image>
				</view>
			</view>
		</view>
		<view class="main">
			<view class="list-item">
				<view class="title">
					<view class="font-size-lg left">
						<view class="">
							<image class="avatar" src="https://wx.qlogo.cn/mmopen/vi_32/Hx7MFkCEmZVHziaTTiaHSiaCs4ApnH5CD0nYOhOg1nYUUMYtxMXkL6L4VL5icRfO5w4LGzW5ib0FZicwj2MficyYfZgCw/132"
							 mode="heightFix"></image>
						</view>
						<view class="left-user">
							<view class="pl-20">杰克and露丝</view>
							<view class="pl-20 font-size-sm text-color-assist">02月03日22:12</view>
						</view>
					</view>
					<view class="over-text font-size-lg ">
					</view>
				</view>
				<scroll-view class="scroll-view_H" scroll-x="true">
					<view class="label-list">
						<view class="item" v-for="(item ,index) in labelList " :key="index">
							<image class="img" src="https://go.cdn.heytea.com/storage/products/2019/12/18/01954797f3fb470cb6ba1606476c658c.png"
							 mode=""></image>
						</view>
					</view>
				</scroll-view>
				<view class="action">
					<view class="text-color-assist">
						点赞232次
					</view>
					<view>
						<image class="zan mr-40" src="../../../static/images/common/dian-zan1.png" mode=""></image>
						<image class="share mr-50" src="../../../static/images/common/fen-xiang2.png" mode=""></image>
					</view>
				</view>
				<view class="">
					<image style="width: 20rpx; height: 20rpx; margin-right: 10rpx;" src="../../../static/images/common/dian-zan1.png"
					 mode=""></image>
					<text>杰克马、</text><text>杰克马、</text><text>杰克马、</text><text>杰克马、</text><text>杰克马、</text><text>杰克马、</text><text>杰克马、</text><text>杰克马、</text><text>杰克马、</text><text>杰克马、</text><text>杰克马、</text><text>杰克马、</text><text>杰克马、</text><text>杰克马、</text><text>杰克马、</text><text>杰克马、</text><text>杰克马、</text><text>杰克马、</text>
				</view>
			</view>



			<view class="list-item">
				<view class="title">
					<view class="font-size-lg left">
						<view class="">
							<image class="avatar" src="https://wx.qlogo.cn/mmopen/vi_32/Hx7MFkCEmZVHziaTTiaHSiaCs4ApnH5CD0nYOhOg1nYUUMYtxMXkL6L4VL5icRfO5w4LGzW5ib0FZicwj2MficyYfZgCw/132"
							 mode="heightFix"></image>
						</view>
						<view class="left-user">
							<view class="pl-20">杰克and露丝</view>
							<view class="pl-20 font-size-sm text-color-assist">02月03日22:12</view>
						</view>
					</view>
					<view class="over-text font-size-lg ">
					</view>
				</view>
				<scroll-view class="scroll-view_H" scroll-x="true">
					<view class="label-list">
						<view class="item" v-for="(item ,index) in labelList " :key="index">
							<image class="img" src="https://go.cdn.heytea.com/storage/products/2019/12/18/01954797f3fb470cb6ba1606476c658c.png"
							 mode=""></image>
						</view>
					</view>
				</scroll-view>
				<view class="action">
					<view class="text-color-assist">
						点赞232次
					</view>
					<view>
						<image class="zan mr-40" src="../../../static/images/common/dian-zan1.png" mode=""></image>
						<image class="share mr-50" src="../../../static/images/common/fen-xiang2.png" mode=""></image>
					</view>
				</view>
				<view class="">
					<image style="width: 20rpx; height: 20rpx; margin-right: 10rpx;" src="../../../static/images/common/dian-zan1.png"
					 mode=""></image>
					<text>杰克马、</text><text>杰克马、</text><text>杰克马、</text><text>杰克马、</text><text>杰克马、</text><text>杰克马、</text><text>杰克马、</text><text>杰克马、</text><text>杰克马、</text><text>杰克马、</text><text>杰克马、</text><text>杰克马、</text><text>杰克马、</text><text>杰克马、</text><text>杰克马、</text><text>杰克马、</text><text>杰克马、</text><text>杰克马、</text>
				</view>
			</view>



			<view class="list-item">
				<view class="title">
					<view class="font-size-lg left">
						<view class="">
							<image class="avatar" src="https://wx.qlogo.cn/mmopen/vi_32/Hx7MFkCEmZVHziaTTiaHSiaCs4ApnH5CD0nYOhOg1nYUUMYtxMXkL6L4VL5icRfO5w4LGzW5ib0FZicwj2MficyYfZgCw/132"
							 mode="heightFix"></image>
						</view>
						<view class="left-user">
							<view class="pl-20">杰克and露丝</view>
							<view class="pl-20 font-size-sm text-color-assist">02月03日22:12</view>
						</view>
					</view>
					<view class="over-text font-size-lg ">
					</view>
				</view>
				<scroll-view class="scroll-view_H" scroll-x="true">
					<view class="label-list">
						<view class="item" v-for="(item ,index) in labelList " :key="index">
							<image class="img" src="https://go.cdn.heytea.com/storage/products/2019/12/18/01954797f3fb470cb6ba1606476c658c.png"
							 mode=""></image>
						</view>
					</view>
				</scroll-view>
				<view class="action">
					<view class="text-color-assist">
						点赞232次
					</view>
					<view>
						<image class="zan mr-40" src="../../../static/images/common/dian-zan1.png" mode=""></image>
						<image class="share mr-50" src="../../../static/images/common/fen-xiang2.png" mode=""></image>
					</view>
				</view>
				<view class="">
					<image style="width: 20rpx; height: 20rpx; margin-right: 10rpx;" src="../../../static/images/common/dian-zan1.png"
					 mode=""></image>
					<text>杰克马、</text><text>杰克马、</text><text>杰克马、</text><text>杰克马、</text><text>杰克马、</text><text>杰克马、</text><text>杰克马、</text><text>杰克马、</text><text>杰克马、</text><text>杰克马、</text><text>杰克马、</text><text>杰克马、</text><text>杰克马、</text><text>杰克马、</text><text>杰克马、</text><text>杰克马、</text><text>杰克马、</text><text>杰克马、</text>
				</view>
			</view>


			<view class="list-item">
				<view class="title">
					<view class="font-size-lg left">
						<view class="">
							<image class="avatar" src="https://wx.qlogo.cn/mmopen/vi_32/Hx7MFkCEmZVHziaTTiaHSiaCs4ApnH5CD0nYOhOg1nYUUMYtxMXkL6L4VL5icRfO5w4LGzW5ib0FZicwj2MficyYfZgCw/132"
							 mode="heightFix"></image>
						</view>
						<view class="left-user">
							<view class="pl-20">杰克and露丝</view>
							<view class="pl-20 font-size-sm text-color-assist">02月03日22:12</view>
						</view>
					</view>
					<view class="over-text font-size-lg ">
					</view>
				</view>
				<scroll-view class="scroll-view_H" scroll-x="true">
					<view class="label-list">
						<view class="item" v-for="(item ,index) in labelList " :key="index">
							<image class="img" src="https://go.cdn.heytea.com/storage/products/2019/12/18/01954797f3fb470cb6ba1606476c658c.png"
							 mode=""></image>
						</view>
					</view>
				</scroll-view>
				<view class="action">
					<view class="text-color-assist">
						点赞232次
					</view>
					<view>
						<image class="zan mr-40" src="../../../static/images/common/dian-zan1.png" mode=""></image>
						<image class="share mr-50" src="../../../static/images/common/fen-xiang2.png" mode=""></image>
					</view>
				</view>
				<view class="">
					<image style="width: 20rpx; height: 20rpx; margin-right: 10rpx;" src="../../../static/images/common/dian-zan1.png"
					 mode=""></image>
					<text>杰克马、</text><text>杰克马、</text><text>杰克马、</text><text>杰克马、</text><text>杰克马、</text><text>杰克马、</text><text>杰克马、</text><text>杰克马、</text><text>杰克马、</text><text>杰克马、</text><text>杰克马、</text><text>杰克马、</text><text>杰克马、</text><text>杰克马、</text><text>杰克马、</text><text>杰克马、</text><text>杰克马、</text><text>杰克马、</text>
				</view>
			</view>
			<view class="footer mt-20" @tap="goPage('/pages/my/theme/log')">
				<view class="text">历史记录</view>
			</view>

		</view>

		<view class="join" :class="{'show':footerShow}" :style="topHeight" @tap="goPage('/pages/my/theme/addTheme')">
			立即参与
		</view>
	</view>
</template>

<script>
	import MyStatusBar from '@/components/my-status-bar/my-status-bar.vue'
	import nomore from '@/components/nomore/nomore.vue'

	export default {
		components: {
			MyStatusBar,
		},
		data() {
			return {
				agree: false,
				footerShow: false,
				count: 200,
				topHeight: 'top:0px',
				addModalVisible: false,
				labelList: [{
						id: '1',
						name: '绘画',
						index: 8
					},
					{
						id: '2',
						name: '美妆达人',
						index: 7
					},
					{
						id: '3',
						name: 'FFF团园',
						index: 2
					},
					{
						id: '4',
						name: '为了部落',
						index: 4
					},

				],
			}
		},
		async onLoad() {

			setInterval(() => {
				this.count = this.count - 1
			}, 1000)

			wx.getSystemInfo({
				success: (res) => {
					this.topHeight = 'top:' + parseInt(res.statusBarHeight + 7 + 31 + 30) + 'px';
				},
			});
		},
		computed: {

		},
		onPageScroll({
			scrollTop
		}) {
			let top
			// #ifdef H5
			top = 66
			// #endif
			// #ifndef H5
			top = 100
			// #endif

			this.footerShow = scrollTop >= top ? true : false
		},
		methods: {
			goPage(url) {
				uni.navigateTo({
					url: url
				})
			},
			goBack() {
				uni.navigateBack()
			},
			cancel() {
				this.addModalVisible = false
			}
		}
	}
</script>

<style lang="scss" scoped>
	.container {
		background: white;
		height: unset;
		min-height: 100%;

		.header {
			.title {
				display: flex;
				justify-content: space-between;
				align-items: center;

				.talk-btn {
					height: 64px;
					margin-left: 10px;
					/* #ifdef H5 */
					margin-top: 6px;
					/* #endif */
					display: flex;
					align-items: center;
					justify-content: center;
					font-size: $font-size-sm !important;
					padding: 0 20rpx;
					border-radius: 50rem !important;

					image {
						width: 40rpx;
						height: 40rpx;
						margin-right: $spacing-row-sm;
					}

					.text {
						color: #030303;
					}
				}
			}

			.time {
				margin: 20rpx 0;
				height: 60rpx;
				line-height: 60rpx;
				font-size: 30rpx;
			}

			.msg {
				height: 60rpx;
				line-height: 60rpx;
				display: flex;
				align-items: center;
			}

			.result {
				&-img {
					height: 40rpx;
					width: 40rpx;
				}
			}


		}

		.main {
			box-sizing: border-box;
			padding-left: 35rpx;
			padding-bottom: 90rpx;

			.list-item {
				padding-bottom: 40rpx;

				.title {
					height: 96rpx;
					display: flex;
					align-items: center;
					justify-content: space-between;

					.left {
						.avatar {
							width: 60rpx;
							height: 60rpx;
							border-radius: 100%;
						}


						height:100%;
						display: flex;
						align-items: center;

						.left-user {
							height: 88rpx;
						}
					}
				}

				.action {
					height: 72rpx;
					display: flex;
					justify-content: space-between;
					align-items: center;

					.zan,
					.share {
						height: 40rpx;
						width: 40rpx;
					}


				}

				.label-list {
					display: flex;

					.item {
						border-radius: 10rpx;
						flex-shrink: 0;
						margin-right: 35rpx;

						.img {
							height: 318rpx;
							width: 300rpx;
						}
					}
				}
			}


		}
	}

	.footer {
		position: relative;
		z-index: 1;
		width: 500rpx;
		margin: 0 auto;
		text-align: center;

		.text {
			background: white;
			position: relative;
			width: 30%;
			left: 35%;
		}
	}

	.footer::before {
		content: ' ';
		position: absolute;
		border-bottom: 1rpx solid $text-color-assist;
		-webkit-transform: scaleY(0.5);
		transform: scaleY(0.5);
		width: 100%;
		top: 18rpx;
		left: 0;
	}

	.join {
		height: 60rpx;
		width: 150rpx;
		line-height: 60rpx;
		text-align: center;
		background: #DBA871 ;
		position: fixed;
		z-index: 100;
		border-radius: 30rpx;
		color: white;
		right: 38rpx;
		transition: all 1s cubic-bezier(0, 1, 0.5, 1);

		&.show {
			background: rgba(219, 168, 113, 0.6);
		}
	}
</style>
