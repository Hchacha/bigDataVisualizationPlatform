<template>
	<div class="container">
		<div class="stepbar-head">
			<div class="stepbar-rec stepbar-rec-active"></div>
			<div class="stepbar-rec"></div>
		</div>
		<div class="stepbar-content">
			<ul>
				<li class="stepbar-content-active">
					<span>1</span>
					<p>上传数据</p>
				</li>
				<li>
					<span>2</span>
					<p>基本表信息设置</p>
				</li>
				<li>
					<span>3</span>
					<p>生成图标</p>
				</li>
			</ul>
		</div>
	</div>
</template>
<style>
	.stepbar-head{width: 750px; height: 9px; margin: 0 auto; margin-top: 58px;}
	.stepbar-rec{ width: 140px; height: 9px; margin: 0 -25px 0 140px; float: left; border-radius: 25px 25px 25px 25px; background: #d7d7d7; }
	.stepbar-rec-active { background: #0896DF; }
	.stepbar-content{ padding: 0 150px;}
	.stepbar-content li{ position: relative; top: -38px; width: 30%; padding: 0px; text-align: center; display: inline-block;}
	.stepbar-content span { display: block;     display: block; width: 65px; height: 65px; margin: 0 auto; line-height: 65px; color: #fff;font-size: 27px; border-radius: 50%; -moz-border-radius: 50%; -webkit-border-radius: 50%; border-radius: 50% 50% 50% 50%; background: #d7d7d7;}
	.stepbar-content-active span{ background: #0896DF;}
	.stepbar-content p{ font-family: "微软雅黑"; font-size: 14px; color: #d7d7d7; margin: 7px 0;}
	.stepbar-content-active p{ color: #0896DF; }
</style>
<script>
	export default{


	}
</script>