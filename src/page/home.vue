<!-- Home.vue -->  
<style src="bootstrap"></style>
<template>  
    <div class="container1">  
        <HeaderDiv :logo="logoMsg"></HeaderDiv>
        <Modal></Modal> 
    </div>  
</template>  
<style>  
    .container1 { height: 600px; background: url(../../static/background.jpg); }
    .fl { float: left; }
    .fr { float: right;}
</style>  
<script>  
    import $ from '../tool/jquery-vendor.js'    
    import HeaderDiv from '../components/homeHeader'
    import Modal from '../components/modal'
    export default {  
        data () {  
            return {  
               logoMsg:'大数据可视化平台' 
            }  
        },components: {
            HeaderDiv,
            Modal
        }
    }  
</script>  