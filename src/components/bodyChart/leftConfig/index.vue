<template>
	<div class="sidebar">
			<h3>动态配置</h3>
		<form class="form-inline form-config">
			<div class="form-group">
				<label for="mainTitle">主标题： </label>
				<input type="text" id="mainTitle" class="form-control" v-model="ownJson.title" @input="updata" />
			</div>
			<div class="form-group">
				<label for="item1Title">x轴单位：</label>
				<input type="text" id="item1Title" class="form-control" v-model="ownJson.item1_title" />	
			</div>
			<div class="form-group">
				<label for="item2Title">y轴单位：</label>
				<input type="text" id="item2Title" class="form-control" v-model="ownJson.item2_title"/>
			</div>
			<div class="form-group" v-if="bubbleType">
				<label for="item2Title">气泡形状：</label>
				<select class="form-control" v-model="selected" @change="updataSel">
				    <option value="circle">circle</option>
				    <option value="rect" >rect</option>
				    <option value="roundRect">roundRect</option>
				    <option value="triangle">triangle</option>
				    <option value="diamond">diamond</option>
				    <option value="pin">pin</option>
				    <option value="arrow">arrow</option>
				</select>
			</div>
			<button class="btn btn-default downloadBtn">下载该动态表</button>
		</form>
	</div> 
</template>
<style scoped>
	.sidebar{ position: fixed; width:250px; top: 54px; bottom: 0; left: 0; z-index: 2; background: #FFF;  box-shadow: 0 0 6px 0 rgba(0, 0, 0, 0.2);}
	.sidebar{ padding: 20px; }
	.form-group{ margin-top: 10px;}
	.downloadBtn{ margin-top: 10px;}
</style>
<script>
	export default{
		data:function(){
			return {
				selected: "",
				typeP: '',
				bubbleType: false
			}
		},
		created(){
			this.fetchData();	
		},
		computed: {
			ownJson(){
				return this.$store.state.dataJson
			}
		},methods:{
			updataSel: function(){
				this.ownJson.symbol = this.selected;
				console.log(this.ownJson);
				this.$store.commit('setJson',this.ownJson);
			},
			updata: function(){
				this.$store.commit('setJson',this.ownJson);	
			},
			fetchData() {
				this.typeP = this.$store.state.pictureType;
				console.log(this.typeP);
				switch(this.typeP){
					case 'scatter':
						this.bubbleType = true;
						break;
					case 'bar':
						this.bubbleType = false;
						break;
				}
				console.log(this.bubbleType);
			}
		},
		mounted: function(){
			this.selected = this.ownJson.symbol;
		}
	}
</script>