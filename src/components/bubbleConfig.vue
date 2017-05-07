<template>
	<div class="container bConfig1">
		<process_nav process_index=1 ></process_nav>
		<h3 id="h22" class="h3">{{title}}</h3>
		<hr>
		<form class="uploadfile_box">
			<div class="form-group fl">
  				<h4 class="h4">上传文件</h4>
	    		<label for="exampleInputFile">File input</label>
				<input type="file" name="upfile" id="upfile"  accept="application/json" />
				<input type="reset" name="reset" style="display: none;" />
				<p class="help-block">可支持的格式.json</p>
				<router-link :to="roulink" ><button type="button" class="btn btn-lg btn-primary" disabled="disabled">下一步</button></router-link>
	  		</div>
  		</form>
  	
  		<div class="fr editData" id="wangEdit_box">
  			<h4 class="h4">手动编辑JSON</h4>
  				<textarea name="" rows="10" cols="60" placeholder='实例：{
						"title": "Path test",
						"item2_title": "class 132",
						"data": [
							["217", "192", 30.0],
							["765", "746", 40.0],
							["282", "262", 20.0]
						],
						"item1_title": "class 131"
					}'
>{{configData}}</textarea>
  		</div>
	</div>	
</template>
<style scoped>
	.bConfig1 a{ color: white; text-decoration: none;}
	.bConfig1 a:hover{ text-decoration: none;}
	.bConfig1 p{ color: red; }
	.uploadfile_box{ width: 50%;}
	.editData{ width: 50%; height: 300px; }
	#wangEdit{ height: 300px;}
</style>
<script>
	import wangCss from "../assets/wangEdit/css/wangEditor.min.css"
	import wangJs from "../assets/wangEdit/js/wangEditor.min.js"
	import process_nav from "./process_nav"
	export default{
		components:{
			process_nav
		},
		data:function(){
			return {
				roulink: "",
				type: '',
				title: '',
				configData: ""	
			}
		},
		created(){
			this.fetchData();
	
		},
		watch:{
			'$route': 'fetchData'
		},
		methods: {
			fetchData(){
				this.type = this.$store.state.pictureType;
				switch(this.type){
					case 'scatter': 
						this.title ="气泡图的基本配置";
						break;
					case 'bar':
						this.title= "柱状图基本配置";
						break;
					default:
						this.title = "出错了";
						break;
				}
			}
		},
		beforeRouteEnter(to,from,next){
       		next();
    	},
		mounted(){
			var vmThis = this;
			var upfile = document.querySelector('#upfile');
			var newData,jsData,door1 = true, door2 = false;
			upfile.onchange = function(){
				var fileList = this.files;
				var fileReader = new FileReader();
				fileReader.onload = function(evt){  
				    newData = this.result;
				    console.log(vmThis.configData);
				    try{
				    	jsData = jQuery.parseJSON(newData);
				    	vmThis.configData = jsData;
				    	door1 = true;
				    }catch(e){
				    	alert("请上传指定后缀格式的");
				    	door2 = false;
				    	door1 = false;
				    }
				    if(door1){
					   	if(jsData.data){
					   		if(true){
					   			door2  = true;
					   		}
					   	}
					   	if(door2){
					   		vmThis.roulink = "/bubbleConfig1";
					   		$(".bConfig1 .btn-lg").removeAttr('disabled');
							vmThis.$store.commit('setJson',jsData);	
					   	}else{
					   		$("input[type=reset]").trigger("click");
					   		alert("请输入正确格式的json");
					   	}
					 }else{
					   	$("input[type=reset]").trigger("click");
					   	$(".bConfig1 .btn-lg").attr("disabled","disabled");
					 }
				}
				fileReader.readAsText(fileList[0]);
			}
		}
	}
</script>