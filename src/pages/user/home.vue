<template>
	<div class="page-home">
		<v-header :headerName="headerName"></v-header>
	    <div id="mui-slider" class="mui-slider" >
			<div class="mui-slider-group mui-slider-loop">
				<div class="mui-slider-item mui-slider-item-duplicate">
					<a href="#"><img class="sliderImg" src="../../assets/images/banner.jpg"></a>
				</div>
				<div class="mui-slider-item">
					<a href="#"><img class="sliderImg" src="../../assets/images/banner.jpg"></a>
				</div>
				<div class="mui-slider-item">
					<a href="#"><img class="sliderImg" src="../../assets/images/banner.jpg"></a>
				</div>
				<div class="mui-slider-item">
					<a href="#"><img class="sliderImg" src="../../assets/images/banner.jpg"></a>
				</div>
				<div class="mui-slider-item mui-slider-item-duplicate">
					<a href="#"><img class="sliderImg" src="../../assets/images/banner.jpg"></a>
				</div>
			</div>
			<div class="mui-slider-indicator">
				<div class="mui-indicator mui-active"></div>
				<div class="mui-indicator"></div>
				<div class="mui-indicator"></div>
			</div>
		</div>
        <div id="divMenu">
        	<ul class="shye_ul">
		    	<li class="cf">
		        	<a href="#" class="cf">
		            	<img src="../../assets/images/j29.png"  class="img1"/>
		                <span><b>库房盘点</b><i>Warehouse<br/>inventory</i></span>
		                <img src="../../assets/images/j22.png" class="img2"/>
		            </a>
		            <a href="#" class="cf">
		            	<img src="../../assets/images/j29.png" class="img1"/>
		                <span><b>接种登记</b><i> registered</i></span>
		                <img src="../../assets/images/j23.png" class="img2"/>
		            </a>
		        </li>
		        <li class="cf">
		        	<a href="#" class="cf">
		            	<img src="../../assets/images/j29.png" class="img1"/>
		                <span><b>出库</b><i>outbound</i></span>
		                <img src="../../assets/images/j24.png" class="img2"/>
		            </a>
		            <a href="#" class="cf">
		            	<img src="../../assets/images/j29.png" class="img1"/>
		                <span><b>入库</b><i> Put in<br/>storage</i></span>
		                <img src="../../assets/images/j25.png" class="img2"/>
		            </a>
		        </li>
		        <li class="cf">
		        	<a href="#" class="cf">
		            	<img src="../../assets/images/j29.png" class="img1"/>
		                <span><b>运输监控</b><i>Transportation</i></span>
		                <img src="../../assets/images/j26.png" class="img2"/>
		            </a>
		            <a href="#" class="cf">
		            	<img src="../../assets/images/j29.png" class="img1"/>
		                <span><b>冷链监控</b><i>Cold chain<br/>monitoring</i></span>
		                <img src="../../assets/images/j27.png" class="img2"/>
		            </a>
		        </li>

		    </ul>
        </div>
	
		
	</div>
</template>

<script>
	import header from 'pages/components/header'
    export default {
    	name: 'page-home',
    	components :{
    		"v-header" : header
    	},
        data() {
			return {
				headerName : '首页'
			}
		},
		mounted(){
			//获得slider插件对象
			var gallery = mui('.mui-slider');

			gallery.slider({
			  interval:2000//自动轮播周期，若为0则不自动播放，默认为0；
			});
		},
		methods: {
           
		}
    }
</script>
<style>
    	.sliderImg{height: 180px; margin-top: 43px;}
    	.shye_ul{ padding:10px;}
		.shye_ul li{ background:url(../../assets/images/j28.png) no-repeat center; background-size:100% 100%; padding:10px; margin-bottom:15px; padding-top:12px;}
		.shye_ul li a{ display:block; width:43%; padding:10px 3%; float:left;}
		.shye_ul li a img.img1{ float:left; height:4px; margin:6px 5px 0 0}
		.shye_ul li a span{ float:left;}
		.shye_ul li a span b{ display:block; color:#fff; font-size:15px; line-height:15px;}
		.shye_ul li a span i{ font-size:13px; color:#868da7; display:block; padding-top:3px; line-height:13px;}
		.shye_ul li a img.img2{ float:right; width:35px; height:auto}
		.shye_ul li a:last-child{ border-left:1px solid #fff;}
		.fixed:after, .clearfix:after, .cf:after, .header:after, .main:after, .footer:after { content: " "; display: block; clear: both; height: 0; overflow: hidden }
		.fixed, .clearfix, .cf, .header, .main, .footer { *zoom: 1 }

</style>