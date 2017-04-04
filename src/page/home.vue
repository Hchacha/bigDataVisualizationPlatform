<!-- Home.vue -->  
<style src="bootstrap"></style>
<template>  
    <div class="container1">  
        <HeaderDiv :logo="logoMsg"></HeaderDiv>
        <Modal></Modal> 
        <div class="body_box">
        	<router-view></router-view>
        </div>
    </div>  
</template>  
<style>  
	.body_box{ padding-top: 56px;}
    .container1 {  /* background: url(../../static/background.jpg); */ background: #f5f5f5; }
    .fl { float: left; }
    .fr { float: right;}
    p,h1,h2,h3,h4{ margin: 0; padding: 0;}
</style>  
<script>  
    import $ from '../tool/jquery-vendor.js'    
    import HeaderDiv from '../components/homeHeader'
    import Modal from '../components/modal'
    import PrDisplay from '../components/prDisplay'
    import BubbleConfig from '../components/bubbleConfig'
    import VueRouter from 'vue-router'
    export default {  
        data () {  
            return {  
               logoMsg:'大数据可视化平台' 
            }  
        },components: {
            HeaderDiv,
            Modal,
            PrDisplay,
            BubbleConfig
        }
    }  
</script>  