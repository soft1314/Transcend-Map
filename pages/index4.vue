<template>
	<view class="page">
		<video class="video" id="demoVideo" :controls="false" :enable-progress-gesture="false"
			:show-center-play-btn="disable" src="../static/transcend.mp4">
		</video>

		<noticebar :text='noticetext1'></noticebar>
		<noticebar :text='noticetext2'></noticebar>
		<noticebar :text='noticetext3'></noticebar>
		<noticebar :text='noticetext4'></noticebar>
		<noticebar :text='noticetext5'></noticebar>
		<noticebar :text='noticetext6'></noticebar>

      <image src="~@/static/transcend.png" style="display:block;margin:0 auto;" />


	</view>
</template>

<script>
	import noticebar from '@/pages/components/notice-bar/notice-bar.vue'
	
	export default {
		components: {
			noticebar
		},
		data() {
			return {
				noticetext1: '湖光山色',
				noticetext2: '超然致远',
				noticetext3: '栏杆拍遍',
				noticetext4: '碧天垂影',
				noticetext5: '齐烟岱云',
				noticetext6: '鹰起超然',
				disable: true
			}
		},
		methods: {

		}
	}
</script>

<style>
	.page video {
		width: 750rpx;
	}

	@-webkit-keyframes rowup {
		0% {
			-webkit-transform: translate3d(0, 0, 0);
			transform: translate3d(0, 0, 0);
		}

		100% {
			-webkit-transform: translate3d(0, -250rpx, 0);
			transform: translate3d(0, -250rpx, 0);
		}
	}

	@keyframes rowup {
		0% {
			-webkit-transform: translate3d(0, 0, 0);
			transform: translate3d(0, 0, 0);
		}

		100% {
			-webkit-transform: translate3d(0, -250rpx, 0);
			transform: translate3d(0, -250rpx, 0);
		}
	}

	.swiperC-text {
		font-size: 25rpx;
		font-family: PingFang SC;
		font-weight: 500;
		color: #323232;
		width: 475rpx;
		line-height: 38rpx;
		-webkit-animation: 10s rowup linear infinite normal;
		animation: 10s rowup linear infinite normal;
		animation-delay: 2s;
	}
</style>