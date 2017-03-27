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
			bubbleData: {"title":"Path test","item2_title":"class 132","data":[["217","192",30.0],["765","746",40.0],["282","262",20.0],["83","33",40.0],["23","123",40.0],["585","206",30.0],["29","248",20.0],["428","656",30.0],["111","783",30.0],["306","690",30.0],["35","92",40.0],["243","772",30.0],["318","322",40.0],["998","990",20.0],["364","421",30.0],["171","246",20.0],["990","339",20.0],["306","408",30.0],["147","7",40.0],["185","235",20.0],["115","821",30.0],["962","622",40.0],["300","692",30.0],["765","303",30.0],["29","275",20.0],["153","203",30.0],["573","125",30.0],["177","585",30.0],["223","173",30.0],["85","135",20.0],["256","119",40.0],["169","451",40.0],["990","582",20.0],["35","195",30.0],["272","798",30.0],["169","632",40.0],["300","183",20.0],["659","746",40.0],["243","997",30.0],["7","744",20.0],["221","964",30.0],["41","91",20.0],["256","987",40.0],["25","75",30.0],["872","111",40.0],["241","136",30.0],["253","293",20.0],["326","908",20.0],["390","701",20.0],["573","962",30.0]],"type":"scatter","item1_title":"class 131"}
		}
	},
	computed: {
		ownJson(){
			return this.$store.state.bubbleJson
		}
	},
	mounted: function(){
		this.init(this.bubbleData);
		console.log(this.$store);
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