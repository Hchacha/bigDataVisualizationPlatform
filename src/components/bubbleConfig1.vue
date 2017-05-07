<template>
	<div class="container">
		<process_nav process_index=2></process_nav>
		<form class="form-inline">
			<div class="clear">
				<div class="fl fl-box">
						<div class="form-group">
							<label for="xValue">请输入图表的名字：</label>
							<input type="text" class="xValue"  v-model="ownJson.title" id="xValue">
						</div>
						<div class="form-group">
							<label for="">请输入x坐标单位：</label>
							<input type="text" class="xValue" v-model="ownJson.item1_title">
						</div>
						<div class="form-group">
							<label for="">输入y坐标单位：</label>
							<input type="text" class="yValue" v-model="ownJson.item2_title">
						</div>
						<div class="form-group">
							<label for="">设置背景颜色：</label>
							<input type="text" class="backgroundColor" placeholder="如果不输入将采取默认颜色" v-model="ownJson.bColor">
						</div>
				</div>
				<div class="fr fr-box">
					<h4>你输入的数据维度为{{this.ownJson.data[0].length}}</h4>
					<div class="form-group">
						<label for="">使用大小展示数据:</label>
						<select class="form-control" v-model="selected" @change="upSelect">
						    <option :value="index"  v-for="(arr, index) in arrs">{{arr}}</option>
						</select>
					</div>
					<div class="form-group">
						<label for="">使用颜色要展示数据:</label>
						<select class="form-control" v-model="selected1" @change="upSelect1">
						    <option :value="index"  v-for="(arr, index) in arrs">{{arr}}</option>
						</select>
					</div>
					
				</div>
			</div>
			<router-link to="/disChart"><button class="btn btn-lg" v-on:click="updata">生成图表</button></router-link>
		</form>
	</div>
</template>
<style scoped>
	.fl-box, .fr-box{ width: 50%;}
	.form-group{ display: block; margin-top: 10px;}
</style>
<script>
import process_nav from "./process_nav"
export default{
	data: function(){
		return {
			jia: "dsda",
			ownJson: this.$store.state.dataJson,
			selected: 0,
			selected1: 0,
			typeP: 'dasd'
		}
	},
	components:{
		process_nav
	},
	created(){
		this.fetchData();
	},
	methods:{
		updata: function(){
			this.$store.commit('setJson',this.ownJson);	
		},
		//选择哪组数据为大小的展示
		upSelect: function(){
			this.ownJson.nodeSize=this.selected;
		},
		//选择哪组数据为颜色的展示
		upSelect1: function(){
			this.ownJson.nodeColor=this.selected1;
		},
		//获取store中的数据
		fetchData(){
			this.typeP = this.$store.state.pictureType;
		}
	},
	computed: {
		arrs: function(){
			var arr = ["不使用"];
			for(var i=1; i<this.ownJson.data[0].length+1; i++){
				arr.push("第"+i+"组数据");
			}
			return arr;
		}
	},
	mounted(){
		//判断数据对象的维度
		this.ownJson.nodeSize = 0;
		this.ownJson.nodeColor = 0;
		//判断是否添加一些字段如果没有则添加默认值
		if(this.type="scatter"&&!this.ownJson.symbol){
	        this.ownJson.symbol="circle";
			this.$store.commit('setJson',this.ownJson);
		}
	    this.ownJson.type=this.typeP;
		this.$store.commit('setJson',this.ownJson);
	}
}
</script>