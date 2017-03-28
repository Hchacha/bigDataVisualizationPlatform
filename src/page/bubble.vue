<style src="bootstrap"></style>
<template>
	<div class="contianer">
			<div id="Draw"></div>
	</div>
</template>
<style scoped>
	#Draw {  width:　100%; height: 665px; }
</style>
<script>
import echarts from 'echarts'
export default {
	data: function(){
		return {
			bubbleData: {"title":"Path test","item2_title":"class 132","data":[]}
		}
	},
	computed: {
		ownJson(){
			return this.$store.state.dataJson
		}
	},
	mounted: function(){
		if(this.ownJson){
			console.log(this.ownJson);	
			this.init(this.ownJson);
		}else{
			alert("不可以直接访问该目录");	
		}
		console.log(this.ownJson); // -> 1
		//console.log(this.ownJson);
	},
	methods: {
		init: function(config){
			var myChart = echarts.init(document.getElementById('Draw'));
			var data = config.data;
			var title = config.title;
			var option = {
				backgroundColor: new echarts.graphic.RadialGradient(0.3, 0.3, 0.8, [{
					offset: 0,
					color: '#f7f8fa'
				}, {
					offset: 1,
					color: '#cdd0d5'
				}]),
				title: {
					text: title
				},
				xAxis: {
					type: 'value',
					name: config.item1_title
				},
				yAxis: {
					type: 'value',
					name: config.item2_title
				},
				/*
				 * 	数据缩放组件
				 */
				dataZoom: [{
					type: 'slider',
					show: true,
					xAxisIndex: [0],
					start: 1,
					end: 35
				}, {
					type: 'slider',
					show: true,
					yAxisIndex: [0],
					left: '93%',
					start: 29,
					end: 36
				}, {
					type: 'inside',
					xAxisIndex: [0],
					start: 1,
					end: 35
				}, {
					type: 'inside',
					yAxisIndex: [0],
					start: 29,
					end: 36
				}],
				/*
				 * 提示工具
				 */
				tooltip: {},
				/*
				 * 工具箱组件
				 */
				toolbox: {
					show: true, //是否显示该工具栏
					feature: {
						dataZoom: {}, //开启数据视图缩放功能
						dataView: {}, //开启数据视图工具
						magicType: {type: ['line', 'bar','scatter']},                 //图的转换工具
						restore: {}, //开启还原工具
						saveAsImage: {} //开起保存为图片工具
					}
				},
				series: [{
					name: "销量",
					type: config.type,
					data: data,
					symbolSize: function(data) {
						return data[2];
					},
					itemStyle: {
						normal: {
							shadowBlur: 10,
							shadowColor: 'rgba(25, 100, 150, 0.5)',
							shadowOffsetY: 5,
							color: new echarts.graphic.RadialGradient(0.4, 0.3, 1, [{
								offset: 0,
								color: 'rgb(129, 227, 238)'
							}, {
								offset: 1,
								color: 'rgb(25, 183, 207)'
							}])
						}
					}
				}]
			};
			myChart.setOption(option);
		}
	}

}
</script>