<template>
	<div class="bodyChart">
		<chartBox></chartBox>
		<sidebarContainer></sidebarContainer>
	</div>
</template>
<style>
	
</style>
<script>
	import sidebarContainer from './leftConfig/index.vue'
	import chartBox from './rightChart/index.vue'
	export default {
		components:{
			sidebarContainer,
			chartBox
		}
	}
</script>