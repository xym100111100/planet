<template>
	<view class="container">
		<MyStatusBar />

		<view class="header">
			<view class="back-icon" @tap="goBack">
				<image src="../../static/images/common/icon_black_back.png" style="height: 38rpx; width: 38rpx;"></image>
			</view>

		</view>
		<view class="main">
			<view class="title">
				<view class="">
					添加标签
				</view>
				<view class="over-text font-size-lg ">
					完成
				</view>

			</view>

			<scroll-view class="scroll-view_H" scroll-x="true">
				<view class="label-list">
					<view class="item font-size-lg" v-for="(item ,index) in labelList " :key="index">
						<text :class="'label-color'+item.index">
							{{item.name}}
						</text>

					</view>
				</view>
			</scroll-view>

			<view class="text-color-assist mb-50">
				已经添加8标签，还可以添加3个。
			</view>
			<scroll-view class="scroll-view_H" scroll-x="true">

				<view class="label-list">
					<view class="item font-size-lg" v-for="(item ,index) in labelList2 " :key="index">
						<text :class="'label-color'+item.index">
							{{item.name}}
						</text>
					</view>
				</view>
				<view class="label-list">
					<view class="item font-size-lg" v-for="(item ,index) in labelList " :key="index">
						<text :class="'label-color'+item.index">
							{{item.name}}
						</text>
					</view>
				</view>
				<view class="label-list mt-20">
					<view @tap="addModalVisible = true"  class="item font-size-lg first-item">
						<image src="../../static/images/common/round_add_disabled.png" style="height: 38rpx; width: 38rpx;margin-right: 14rpx;"></image>
						<text>添加标签</text>
					</view>
					<view class="item font-size-lg">
						<text :class="'label-color'+1">
							傻逼玩意
						</text>

					</view>
				</view>
			</scroll-view>

		</view>
		
		<modal title="标题" content="内容" :maskClosable="true" @cancel="cancel" :show="addModalVisible">
			
		</modal>

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
				addModalVisible:false,
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
					{
						id: '5',
						name: '女神',
						index: 6
					},
					{
						id: '6',
						name: '大长腿',
						index: 3
					},
					{
						id: '7',
						name: '美剧',
						index: 1
					},
					{
						id: '8',
						name: '前任三',
						index: 5
					},
				],
				labelList2: [{
						id: '1',
						name: '懒人攻略',
						index: 1
					},
					{
						id: '2',
						name: '二次元',
						index: 2

					},
					{
						id: '3',
						name: '锤粉',
						index: 3
					},
					{
						id: '4',
						name: '周杰伦',
						index: 4
					},
					{
						id: '5',
						name: '开心吃货',
						index: 5
					},
					{
						id: '6',
						name: '第五人格',
						index: 6
					},
					{
						id: '7',
						name: '为了部落',
						index: 7
					},
					{
						id: '8',
						name: '工程师',
						index: 8
					},
				]
			}
		},
		async onLoad() {

		},
		computed: {

		},
		methods: {
			goBack() {
				uni.navigateBack()
			},
			cancel(){
				this.addModalVisible = false
			}
		}
	}
</script>

<style lang="scss" scoped>
	.container {
		.header {
			.back-icon {
				height: 63rpx;
				box-sizing: border-box;
				padding-left: 25px;
				width: 54rpx;
				display: flex;
				align-items: center;
			}

			.over-text {
				text-align: right;
				padding-right: 23rpx;
				height: 55rpx;
				line-height: 55rpx;
			}
		}

		.main {
			box-sizing: border-box;
			padding: 0rpx 35rpx 0 35rpx;

			.title {
				padding: 17rpx 0 25rpx 0;
				font-size: 56rpx;
				display: flex;
				align-items: center;
				justify-content: space-between;
			}

			.label-list {
				display: flex;

				.item {
					border: 1rpx #d4d2d5 solid;
					padding: 13rpx 29rpx;
					border-radius: 10rpx;
					flex-shrink: 0;
					margin: 0 21rpx 21rpx 0;
				}

				.first-item {
					border: 1rpx #d4d2d5 dashed;
					display: flex;
					align-items: center;
				}
			}

			.label-color1 {
				color: #8ac1ae;
			}

			.label-color2 {
				color: #66c1f0;
			}

			.label-color3 {
				color: #d1868a;
			}

			.label-color4 {
				color: #e3a8be;
			}

			.label-color5 {
				color: #baa5f2;
			}

			.label-color6 {
				color: #edbd8d;
			}

			.label-color7 {
				color: #bbbac8;
			}

			.label-color8 {
				color: #aee07f;
			}
		}
	}
</style>
