<template>
	<view class="container">
		<MyStatusBar />
		
     <view class="d3-box">
           <view class="layout">
               <view class="star sun">
                   <view class="stage">
                       <view class="ball">
                           <view class="shadow"></view>
                       </view>
                   </view>
               </view>
   
               <view class="pathway p1">
               </view>
               <view class="pathway p10">
               </view>
               <view class="pathway p11">
               </view>
               <view class="pathway p12">
               </view>
               <view class="pathway p13">
               </view>
               <view class="pathway p14">
               </view>
               <view class="pathway p15">
               </view>
               <view class="pathway p16">
               </view>
   
   
   
               <view class="pathway p1">
               </view>
               <view class="pathway p2">
               </view>
               <view class="pathway p3">
               </view>
               <view class="pathway p4">
               </view>
               <view class="pathway p5">
               </view>
           </view>
       </view>
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
 .d3-box {
        position: fixed;
        top: 0;
        left: 0;
        right: 0;
        bottom: 0;
        margin: auto;
        width: 600px;
        height: 600px;
        perspective: 1200px;
    }

    .layout {
        transform-style: preserve-3d;
        width: 100%;
        height: 100%;
        transform: rotateX(70deg) rotateY(-13deg);
    }

    .pathway {
        position: absolute;
        top: 0;
        left: 0;
        right: 0;
        bottom: 0;
        margin: auto;
        border: 2px dashed #999;
        border-radius: 50%;
        animation: rotatebox infinite linear 5s;
        transform-style: preserve-3d;
    }

    .pathway.p1 {
        width: 420px;
        height: 420px;
        border: 4px solid#999;
    }

    .pathway.p10 {
        width: 430px;
        height: 430px;
    }

    .pathway.p11 {
        width: 440px;
        height: 440px;
    }

    .pathway.p12 {
        width: 450px;
        height: 450px;
    }

    .pathway.p13 {
        width: 460px;
        height: 460px;
    }

    .pathway.p14 {
        width: 470px;
        height: 470px;
    }

    .pathway.p15 {
        width: 480px;
        height: 480px;
    }


    .pathway.p16 {
        width: 490px;
        height: 490px;
    }




    .pathway.p2 {
        width: 520px;
        height: 520px;
        animation-duration: 4s;
    }

    .pathway.p3 {
        width: 530px;
        height: 530px;
        animation-duration: 4s;
    }

    .pathway.p4 {
        width: 540px;
        height: 540px;
        animation-duration: 4s;
    }

    .pathway.p5 {
        width: 550px;
        height: 550px;
        animation-duration: 4s;
        border: 4px solid#999;
    }

    .sun {
        position: absolute;
        top: 0;
        left: 0;
        right: 0;
        bottom: 0;
        margin: auto;
        width: 240px;
        height: 240px;

        transform-style: preserve-3d;
    }

   




    @keyframes rotatebox {
        from {
            transform: rotateZ(0)
        }

        to {
            transform: rotateZ(360deg)
        }
    }



    .ball {
        display: inline-block;
        width: 100%;
        height: 100%;
        margin: 0;
        border-radius: 50%;
        position: relative;
        -webkit-transform-style: preserve-3d;
        background: url('http://hop.ie/balls/images/world-map-one-color.png') white repeat-x;
        background-size: auto 100%;
        -webkit-animation: move-map 30s infinite linear;
        -moz-animation: move-map 30s infinite linear;
        -o-animation: move-map 30s infinite linear;
        -ms-animation: move-map 30s infinite linear;
        animation: move-map 30s infinite linear;
    }

    .ball:before {
        content: "";
        position: absolute;
        top: 0%;
        left: 0%;
        width: 100%;
        height: 100%;
        border-radius: 50%;
        box-shadow: -40px 10px 70px 10px rgba(0, 0, 0, 0.5) inset;
        z-index: 2;
    }

    .ball:after {
        content: "";
        position: absolute;
        border-radius: 50%;
        width: 100%;
        height: 100%;
        top: 0;
        left: 0;
        -webkit-filter: blur(0);
        opacity: 0.3;
        background: radial-gradient(circle at 50% 80%, #81e8f6, #76deef 10%, #055194 66%, #062745 100%);
    }

    .ball .shadow {
        position: absolute;
        width: 100%;
        height: 100%;
        background: radial-gradient(circle at 50% 50%, rgba(0, 0, 0, 0.4), rgba(0, 0, 0, 0.1) 40%, rgba(0, 0, 0, 0) 50%);
        -webkit-transform: rotateX(90deg) translateZ(-150px);
        -moz-transform: rotateX(90deg) translateZ(-150px);
        -ms-transform: rotateX(90deg) translateZ(-150px);
        -o-transform: rotateX(90deg) translateZ(-150px);
        transform: rotateX(90deg) translateZ(-150px);
        z-index: -1;
    }

    body {
        width: 300px;
        margin: 20px auto;
        background: linear-gradient(to bottom, rgba(100, 100, 100, 0.2) 0%, rgba(255, 255, 255, 0.5) 40%, #ffffff 100%);
        background-repeat: no-repeat;
    }

    .stage {
        transform: rotateX(306deg) rotateY(0deg);
        width: 240px;
        height: 240px;
        display: inline-block;
        -webkit-perspective: 1200px;
        -moz-perspective: 1200px;
        -ms-perspective: 1200px;
        -o-perspective: 1200px;
        perspective: 1200px;
        -webkit-perspective-origin: 50% 50%;
        -moz-perspective-origin: 50% 50%;
        -ms-perspective-origin: 50% 50%;
        -o-perspective-origin: 50% 50%;
        perspective-origin: 50% 50%;
    }

    @-moz-keyframes move-map {
        0% {
            background-position: -849px 0;
        }

        100% {
            background-position: 0 0;
        }
    }

    @-webkit-keyframes move-map {
        0% {
            background-position: 0 0;
        }

        100% {
            background-position: -849px 0;
        }
    }


    @-o-keyframes move-map {
        0% {
            background-position: -849px 0;
        }

        100% {
            background-position: 0 0;
        }
    }

    @-ms-keyframes move-map {
        0% {
            background-position: -849px 0;
        }

        100% {
            background-position: 0 0;
        }
    }

    @keyframes move-map {
        0% {
            background-position: -849px 0;
        }

        100% {
            background-position: 0 0;
        }
    }
	}
</style>
