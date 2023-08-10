<!-- 
第二页
只有一个web-view,
所有功能放在/static/html/tianditu.html中实现
tianditu.html 使用原生html
这个就不怎么开发
 -->
<template>
	<view class="container">
		<web-view src="/static/html/tianditu.html"></web-view>
		<uni-fab ref="fab" :pattern="fab.pattern" :content="fab.content" :horizontal="fab.horizontal"
			:vertical="fab.vertical" :direction="fab.direction" @trigger="trigger" @fabClick="fabClick" />
	</view>
</template>

<script>
	export default {
		data() {
			return {
				fab: {
					title: 'uni-fab',
					horizontal: 'right',
					vertical: 'top',
					direction: 'vertical',
					pattern: {
						color: '#7A7E83',
						backgroundColor: '#fff',
						selectedColor: '#007AFF',
						buttonColor: '#007AFF',
						iconColor: '#fff'
					},
					is_color_type: false,
					content: [{
							iconPath: '/static/image.png',
							selectedIconPath: '/static/image-active.png',
							text: '相册',
							active: false
						},
						{
							iconPath: '/static/home.png',
							selectedIconPath: '/static/home-active.png',
							text: '首页',
							active: false
						},
						{
							iconPath: '/static/star.png',
							selectedIconPath: '/static/star-active.png',
							text: '收藏',
							active: false
						}
					]
				}
			}
		},
		mounted() {},
		methods: {
			message(arg) {
				const _funName = 'msgFromUniapp',
					_data = {
						msg: 'click'
					}
				const currentWebview = this.$scope.$getAppWebview().children()[0]
				currentWebview.evalJS(`${_funName}(${JSON.stringify(_data)})`)
			},
			trigger(e) {
				console.log(e)
				this.fab.content[e.index].active = !e.item.active
				uni.showModal({
					title: '提示',
					content: `您${this.fab.content[e.index].active ? '选中了' : '取消了'}${e.item.text}`,
					success: function(res) {
						if (res.confirm) {
							console.log('用户点击确定')
						} else if (res.cancel) {
							console.log('用户点击取消')
						}
					}
				})
			},
			fabClick() {
				uni.showToast({
					title: '点击了悬浮按钮',
					icon: 'none'
				})
			},

		},
	}
</script>

<style>
</style>