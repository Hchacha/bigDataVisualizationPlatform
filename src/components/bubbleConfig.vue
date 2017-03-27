<template>
	<div class="container bConfig1">
		<process_nav process_index=1 ></process_nav>
		<h2 id="h22">Bubble基本配置</h2>
		<hr>
		<form>
			<div class="form-group">
	    		<label for="exampleInputFile">File input</label>
				<input type="file" name="upfile" id="upfile"  accept="application/json" />
				<input type="reset" name="reset" style="display: none;" />
				<p class="help-block">可支持的格式.json</p>
	  		</div>
	 		<button type="button" class="btn btn-lg btn-primary" disabled="disabled"><router-link :to="roulink" >下一步</router-link></button>
  		</form>
  		<p>如果报错此处是错误信息</p>
	</div>	
</template>
<style scoped>
	.bConfig1 a{ color: white; text-decoration: none;}
	.bConfig1 a:hover{ text-decoration: none;}
</style>
<script>
	import process_nav from "./process_nav"
	export default{
		components:{
			process_nav
		},data:function(){
			return {
				roulink: ""
			}
		},mounted: function(){
			var vmThis = this;

			var upfile = document.querySelector('#upfile');
			var newData,jsData,door1 = true, door2 = false;;

			upfile.onchange = function(){
				var fileList = this.files;
				var fileReader = new FileReader();
				fileReader.onload = function(evt){  
				    newData = this.result;
				    try{
				    	jsData = jQuery.parseJSON(newData);
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