<template>
	<div class="container">
		<process_nav process_index=2></process_nav>
		<form >
			<div class="form-group">
				<label for="">请输入x坐标单位</label>
				<input type="text" class="xValue">
			</div>
			<div class="form-group">
				<label for="">输入y坐标单位</label>
				<input type="text" class="xValue">
			</div>
			<div class="form-group">
				<label for="">设置背景颜色</label>
				<input type="text" class="xValue">
			</div>
		</form>
	</div>
</template>
<style>

</style>
<script>
import process_nav from "./process_nav"
export default{
	components:{
			process_nav
	}
}
</script>