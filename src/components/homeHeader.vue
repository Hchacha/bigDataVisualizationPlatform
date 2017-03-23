
<template>
    <header class="header">
    	<div class="container">
	        <div id="logo" class="fl">{{logo}}</div>
	        <ul class="nav fr">
	            <li v-for="nav in navs"><a href="#">{{nav.li}}</a></li>
	        </ul>

        </div>
    </header>
</template>
<script>
	export default{
		name: 'headerDiv',
		data(){
			return {
				navs: [
					{ li: '主页'},
					{ li: '日志'},
					{ li: '说说'},
					{ li: '留言'},
					{ li: '登录'},	
				]
			}
		},
		props: ['logo']
	}
	$(function(){
		$('.nav li:eq(4)').attr({"data-toggle": "modal", "data-target":"#myModal"});
	});
	</script>
<style>
	.nav li{ float: left; }	
	.header{ background-color: #222; height: 54px; }
	#logo{ height: 54px; color: #9d9d9d; line-height: 54px; font-size: 20px; }
	.nav li a{ color: #9d9d9d; font-size: 15px; line-height: 54px; display: block; padding: 0;}
	.nav li a:hover{ background: none; color: #fff;}
	.nav li{ padding:0 20px;}
</style>
