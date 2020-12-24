<template>
	<view  class="statusWidth" :style="statusHeight">
	</view>
</template>

<script>
	export default {
		name: "MyStatusBar",
		props: {
			styles: {
				type: Object,
				default: () => {
					{
						
					}
				}
			}
		},
		data() {
			return {
				statusHeight: 'height:0rpx',
			}
		},
		created() {
			
			this.GetStatusBarHeight();
		},
		methods: {
			GetStatusBarHeight() {
				wx.getSystemInfo({
					success: (res)=> {
						this.statusHeight = 'height:' + parseInt(res.statusBarHeight + 7) + 'px';
					},
				});
			},

		}
	}
</script>
<style lang="scss" scoped>
	.statusWidth{
		 width: 750rpx;
		
	}
	   

</style>
