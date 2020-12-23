<template>
	<view class="container">
		
		<view class="header">
			<image src="https://github.com/xym100111100/images/blob/main/attendance/bg.png?raw=true" mode="scaleToFill"></image>
			<view class="user-box">
				<view class="avatar">
					<image src="https://wx.qlogo.cn/mmopen/vi_32/Hx7MFkCEmZVHziaTTiaHSiaCs4ApnH5CD0nYOhOg1nYUUMYtxMXkL6L4VL5icRfO5w4LGzW5ib0FZicwj2MficyYfZgCw/132"></image>
				</view>
				<view class="nickname">
					<!-- {{ member.nickname }} -->
				   umbrella
				</view>
				<view>
					<view  @tap="showSearch = true" class="tags mb-10">
						好友签到
					</view>
					<view class="tags">
						签到规则
					</view>
				</view>
			</view>
		</view>
		<view style="padding: 0 30rpx;">
			<view class="integral-box">
				<view class="title">当前积分</view>
				<view class="value">{{ customPoints.totalPoints }}</view>
				<button type="primary" class="btn" @tap="attendance">签到</button>
			</view>
			<!-- 为了方便演示，这里设置了startDate和enddate属性 -->
			<uni-calendar :show-month="false" :start-date="startDate" :selected="attendanceList" :continuous="todayAttendance.attendance_continuity_day">
			</uni-calendar>
		</view>
		<modal custom :show="attendanceModalVisible">
			<view class="attendance-modal">
				<view class="modal-header">
					<image src="https://github.com/xym100111100/images/blob/main/attendance/cup.png?raw=true" mode="widthFix"></image>
				</view>
				<view class="modal-content d-flex align-items-center just-content-center flex-column font-size-sm text-color-base">
					<view>赠送的1积分已发到您的账户中</view>
					<view>连续签到2天可获得一张星球卷</view>
				</view>
				<view class="d-flex align-items-center just-content-center">
					<button type="primary" class="btn" @tap="attendanceModalVisible=false">我知道了</button>
				</view>
			</view>
		</modal>
		<search :show="showSearch" :friends="friends" @hide="showSearch=false" @choose="showfirendDetailModal"></search>
		
	</view>
</template>

<script>
	import {
		mapState
	} from 'vuex'
	import navbarBackButton from '@/components/navbar-back-button'
	import uniCalendar from '@/pages/attendance/uni-calendar/uni-calendar'
	import modal from '@/components/modal/modal'
	import Search from './components/search/search.vue'
	

	export default {
		components: {
			navbarBackButton,
			uniCalendar,
			modal,
			Search
		},
		data() {
			return {
				friends: [{
					price: "32",
					name: "芝芝莓莓 ®",
					id: 932
				}],
				showSearch: false,
				customPoints: {},
				attendanceModalVisible: false,
				attendanceList: [],
				todayAttendance: {},
				startDate: '',
				endDate: ''
			}
		},
		async onLoad() { 
			// this.friends = await this.$api('friends')
			// console.log(this.friends)	
			this.customPoints = await this.$api('customPoints')

			this.attendanceList = await this.$api('attendanceList')
			this.todayAttendance = await this.$api('todayAttendance')
			const date = new Date()
			let year = date.getFullYear()
			let month = date.getMonth()
			this.startDate = `${year}-${month}-01`
		},
		computed: {
			...mapState(['member'])
		},
		methods: {
			attendance() {
				this.attendanceModalVisible = true
			},
			showfirendDetailModal(val){
				
			}
		}
	}
</script>

<style lang="scss" scoped>
	.header {
		width: 100%;
		height: 330rpx;
		position: relative;

		image {
			width: 100%;
			height: 100%;
		}

		.user-box {
			position: absolute;
			width: 100%;
			top: var(--status-bar-height);
			bottom: 0;
			left: 0;
			display: flex;
			align-items: center;
			color: #FFFFFF;

			.avatar {
				margin-left: 30rpx;
				background-color: #FFFFFF;
				padding: 6rpx;
				border-radius: 100%;
				display: flex;
				align-items: center;
				justify-content: center;
				margin-right: 20rpx;

				image {
					width: 100rpx;
					height: 100rpx;
					border-radius: 100%;
				}
			}

			.nickname {
				font-size: $font-size-lg;
				flex: 1;
			}

			.tags {
				font-size: $font-size-sm;
				border-radius: 50rem 0 0 50rem;
				background-color: rgba($color: #ffffff, $alpha: 0.3);
				padding: 10rpx 30rpx;
			}
		}
	}

	.integral-box {
		position: relative;
		background-color: #FFFFFF;
		border-radius: 8rpx;
		padding: 30rpx;
		display: flex;
		flex-direction: column;
		align-items: center;
		margin-top: -70rpx;
		margin-bottom: 30rpx;
		box-shadow: 0 0 20rpx rgba($color: #000000, $alpha: 0.1);

		.title {
			font-size: $font-size-sm;
			color: $text-color-base;
			margin: 20rpx 0 30rpx;
		}

		.value {
			font-size: 46rpx;
			font-weight: bold;
			margin-bottom: 30rpx;
		}

		.btn {
			font-size: $font-size-lg;
			color: #FFFFFF;
			border-radius: 50rem !important;
			width: 70%;
		}
	}

	/deep/.uni-calendar {
		margin-bottom: 30rpx;
		border-radius: 8rpx;
		box-shadow: 0 0 20rpx rgba($color: #000000, $alpha: 0.1);
	}

	.attendance-modal {
		.modal-header {
			width: 100%;
			margin-top: -180rpx;
			position: relative;

			image {
				width: 100%;
			}
		}

		.modal-content {
			height: 200rpx;
		}

		.btn {
			width: 100%;
			border-radius: 50rem;
			font-size: $font-size-lg;
		}
	}
</style>
