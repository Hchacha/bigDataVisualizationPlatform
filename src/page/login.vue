<template>
	<div class="login_box">
		<header>欢迎登入图像编辑系统</header>
		<div class="login_body">
			<div class="mdl-card">
				<div class="mdl-title">
					<h2>Log in</h2>
				</div>
			</div>
		</div>
	</div>
</template>
<script>
import $ from '../tool/jquery-vendor.js';
export default{
	mounted(){

	}
}
</script>
<style>
	header{ width: 100%; height: 64px; background:rgba(30,30,30,.7);  position: fixed; z-index: 2}
	.login_body{  padding-top: 64px; background: #eee; height: 500px; } 
	.mdl-card{
			margin: 0 auto;
			margin-top: 50px;
			background: #fff;
		    width: 330px;
		    font-size: 16px;
		    font-weight: 400;
		    min-height: 400px;
		    overflow: hidden;
		    z-index: 1;
		    position: relative;
		    border-radius: 2px;
		    box-sizing: border-box;
	}	
	.mdl-title{
		padding-top: 1px;
		width: 330px;
		background: #3eabb8;
		min-height: 192px;
		color: #fff;
	}	
	.mdl-title h2{
		margin-top: 140px;
		margin-left: 16px;
	    font-size: 24px;
    	font-weight: 300;
    	line-height: normal;
	}
</style>