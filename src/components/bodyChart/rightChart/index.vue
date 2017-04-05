
<template>
	<div class="contianer">
			<div id="Draw" ></div>
	</div>
</template>
<style scoped>
	#Draw {  width: 800px; height: 564px;  margin-left: 400px; margin-top: 20px; }
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
		//判断如果有数据则初始化数据如果没有数据报错
		if(this.ownJson){
			this.init(this.ownJson);
		}else{
			alert("不可以直接访问该目录");	
		}
	},
	watch:{
		ownJson:{
			handler(curVal,oldVal){
				this.init(curVal);
			},
			deep:true
		}
	},
	methods: {
		init: function(config){
			var myChart = echarts.init(document.getElementById('Draw'));
			var data = config.data;
			var title = config.title;
			var symbol = config.symbol;
			console.log(config.nodeSize);
			if(config.nodeSize==0){
				var nodeSize = 20;
			}else{
				var nodeSize = function(data){
					return data[config.nodeSize-1]
				}
			}
			console.log(nodeSize);
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
					start: 0,
					end: 100 
				}, {
					type: 'slider',
					show: true,
					yAxisIndex: [0],
					left: '93%',
					start: 0,
					end: 100
				}, {
					type: 'inside',
					xAxisIndex: [0],
					start: 1,
					end: 100
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
						restore: {}, //开启还原工具
						saveAsImage: {} //开起保存为图片工具
					}
				},
				series: [{
					name: "数据对象一的名字",
					type: config.type,
					data: data,
					symbol: symbol,
					symbolSize: nodeSize,
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