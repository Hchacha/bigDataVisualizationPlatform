<!-- Home.vue -->  
<template>  
    <div class="container1">  
        <HeaderDiv :logo="logoMsg"></HeaderDiv>
        <Modal></Modal> 
        <div class="body_box">
        	<router-view></router-view>
        </div>
    </div>  
</template>  
<script>  
    import $ from '../tool/jquery-vendor.js'    
    import HeaderDiv from '../components/homeHeader'
    import Modal from '../components/modal'
    import PrDisplay from '../components/prDisplay'
    import BubbleConfig from '../components/bubbleConfig'
    export default {  
        mounted(){
            $.ajax({
                type: "POST",
                async: true,
                url: "http://localhost:80/",
                dataType: "json",
                data: {
                    NAME: 'sawyer',
                    NUM: 11
                },
                success: function(data){
                    console.log(data);
                },
                error: function(data){
                      alert("失败了");
                }
            });
        },
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
<style src="bootstrap"></style>
<style>  
	/* reset */
	body,h1,h2,h3,h4,h5,h6,p,dl,dd,ul,ol,pre,form,input,textarea,th,td,select{margin:0;padding:0;}
	h1, .h1, h2, .h2, h3, .h3 {
 		margin: 0; 
}
	em{font-style:normal}
	li{list-style:none}
	a{text-decoration:none;}
	img{border:none; vertical-align:top;}
	table{border-collapse:collapse;}
	textarea{ resize:none;overflow:auto;}
	/* end reset */
	
	/* public */
	.fl { float: left; }
    .fr { float: right;}
    .clear{
		zoom: 1;
	}
	.clear:after{
		content: "";
		display: block;
		clear: both;
	}
	/* end public */
	
	/* private */
	.body_box{ padding-top: 56px; height: 637px;}
    .container1 {  background: #f5f5f5; }
    /* end private */ 
</style>  
