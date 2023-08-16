<template>
	<view>
		<view class="an-notice-box" :style="'background-color: '+bgColor+';'">
			<scroll-view class="an-notice-content">
				<swiper v-if="show" class="swiper" :autoplay="true" :interval="switchTime*1000" :duration="1500"
					:circular="true" :vertical="true">
					<swiper-item v-for="(text, index) in list" :key="index" class="an-notice-content-item">
						<view class="swiper-item">
							<text class="an-notice-content-item-text" :style="'color: '+color+';'">
								{{text}}
							</text>
						</view>
					</swiper-item>
				</swiper>
			</scroll-view>

		</view>
	</view>
</template>

<script>
	export default {
		name: "notice-bar",
		props: {
			text: {
				type: String,
				default: '暂无未读消息'
			},
			color: {
				type: String,
				default: '#de8c17'
			},
			bgColor: {
				type: String,
				default: '#fffbe8',

			},
			switchTime: {
				type: Number,
				default: 3
			},

		},
		data() {
			return {
				number: 0,
				list: [],
				copyText: '',
				show: '',
			};
		},
		mounted() {
			this.list = this.text.split('|');
			console.log(this.list.length)
			this.show = true;
		},
		watch: {
			text: function() {
				this.show = true;
				if (this.text != this.copyText) {
					this.copyText = this.text;
					this.list = this.text.split('|');
					console.log(JSON.stringify(this.list))
				}
			}
		},
		methods: {
			more() {
				this.show = false;
				this.$emit('more')
			}
		}
	}
</script>

<style>
	.swiper {
		height: 60upx !important;
	}

	.an-notice-box {
		width: 100%;
		height: 60upx;
		padding: 0 10upx;
		overflow: hidden;
		margin: 20upx 0;
		display: flex;
		/* justify-content: flex-start; */
		justify-content: center;
		border-radius: 20rpx;
	}

	.an-notice-icon {
		width: 60upx;
		height: 60upx;
		line-height: 50upx;
		text-align: center;
		position: relative;
	}

	.an-notice-content {
		width: calc(100% - 220upx);
		position: relative;
		font-size: 14px;
	}

	.an-notice-content-item {
		width: 100%;
		height: 60upx;
		text-align: center;
		line-height: 60upx;
	}

	.an-notice-content-item-text {
		display: block;
		white-space: nowrap;
		text-overflow: ellipsis;
		overflow: hidden;
		/* align-items: center; */
	}

	.an-notice-more {
		width: 130upx;
		height: 60upx;
		font-size: 12px;
		line-height: 60upx;
		text-align: right;
		color: #999;
	}

	@keyframes anotice {
		0% {
			transform: translateY(100%);
		}

		30% {
			transform: translateY(0);
		}

		70% {
			transform: translateY(0);
		}

		100% {
			transform: translateY(-100%);
		}
	}
</style>