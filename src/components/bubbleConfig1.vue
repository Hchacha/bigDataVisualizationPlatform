<template>
	<div class="container">
		<process_nav process_index=2></process_nav>
		<form >
			<div class="form-group">
				<label for="">请输入图表的名字：</label>
				<input type="text" class="xValue"  v-model="ownJson.title">
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
			<button class="btn btn-lg" v-on:click="updata"><router-link to="/bubble">生成图表</router-link></button>
		</form>
	</div>
</template>
<style>

</style>
<script>
import process_nav from "./process_nav"
export default{
	data: function(){
		return {
			ownJson: this.$store.state.dataJson
		}
	},
	/*computed: {
		ownJson(){
			return this.$store.state.dataJson
		}
	},*/
	components:{
			process_nav
	},methods:{
		updata: function(){
			this.$store.commit('setJson',this.ownJson);	
			console.log(this.ownJson.xValue);
		}
	}
}
</script>