<template>
	<div class="page-button">
		{{text}} 
		<input type="button" name="" value="click" @tap="emitFn">
		<div id="div">点击div</div>
		<div id="sheet1" class="mui-popover mui-popover-bottom mui-popover-action ">
		    <!-- 可选择菜单 -->
		    <ul class="mui-table-view">
		      <li class="mui-table-view-cell">
		        <a href="#">菜单1</a>
		      </li>
		      <li class="mui-table-view-cell">
		        <a href="#">菜单2</a>
		      </li>
		    </ul>
		    <!-- 取消菜单 -->
		    <ul class="mui-table-view">
		      <li class="mui-table-view-cell">
		        <a href="#sheet1"><b>取消</b></a>
		      </li>
		    </ul>
		</div>
	</div>
</template>
<script>
    export default {
    	name: 'page-hello',
        data() {
			return {
				text : "登陆页面"
			}
		},
		mounted(){
			// 事件绑定
			$("body").on("tap","#div",function(){
				mui.toast(this.innerHTML);
			});
		},
		methods: {
           	emitFn (){
           		this.alertText()
           		mui('#sheet1').popover('toggle');
           	},
           	alertText () {
           		mui.toast('123213');
           	}
		}
    }
</script>
<style scoped>
	
</style>