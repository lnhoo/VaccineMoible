<template>
	<header class="mui-bar mui-bar-nav page-home">
	 <a class="mui-icon mui-icon-left-reply mui-pull-left">
	  	<img src="../../assets/images/title1.png" class="title-img" />
	  </a>
	  <h1 class="mui-title">{{ headerName }}</h1>
	 <a class="mui-icon mui-icon-left-reply mui-pull-right">
	  	<img src="../../assets/images/title2.png" class="title-img" />
	  </a>
	</header>
</template>
<script>
	export default {
		name:"page-header",
		props : [ 'headerName' ],
		data() {
			return {}
		}
	}
</script>
<style lang="less">
	.mui-bar-nav {
	    top: 0;
	    -webkit-box-shadow: none;
	    box-shadow: none;
	    background: #303f7a;
	}
	.mui-title{color: white; font-size: 20px; font-weight: bold;}
	.title-img{width: 28px;}
</style>