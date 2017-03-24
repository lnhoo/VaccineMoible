<template>
	<div class="page-login">
		<div class="top-icon">
			<div class="img-wrap">
				<img src="../../assets/images/login.png" class="login-icon"/>	
			</div>
		</div>

		<div class="login-frm">
			<input type="text" class="mui-input-clear user-name" v-model="userName" placeholder="用户名">
			<input type="password" class="mui-input-clear password" v-model="password"  placeholder="密码">
			<button type="button" class="mui-btn mui-btn-primary mui-btn-block login-btn" @click="login">登陆</button>
			<div class="message"><a href="javascript:;" @click="forgetPwd">忘记密码?</a></div>
		</div>
	</div>
</template>
<script>
    export default {
    	name: 'page-login',
        data() {
			return {
				'userName' : "admin",
				'password' : "admin"
			}
		},
		mounted(){
			
		},
		methods: {
           	login (){
           		this.$router.push('/home');
           	},
           	forgetPwd(){
           		mui.toast("忘记密码");
           	}
		}
    }
</script>
<style lang="less">
	.page-login{
		width: 100%;
		height: 100%;
	   .top-icon{
			padding: 2em;
			width:100%;	
			display:block;
			text-align: center;
		}

		.img-wrap{
			width: 70px;
			height:70px;
			margin: 0 auto;
			background: #f5f6f8;
			border-radius: 50%;
			overflow: hidden;
		}
		.mui-input-clear{
			width: 94%;
			margin-left: 3%;
			border-radius: 40px;
			border:1px solid #F2F2F2;
			-webkit-box-shadow: 10px 8px 5px #888888;
			-moz-box-shadow: 10px 8px 5px #888888;
			box-shadow: 10px 8px 5px #888888;
			margin-bottom: 20px;;
		}

		.login-btn{
			width: 94%;
			margin-left: 3%;
			border-radius: 57px;
			margin-top: 1em;
			background:#4450a0; 
		}
		.login-frm{
			padding-top: 2em;
			input.user-name{
			    background: url(../../assets/images/userName.png) 2% 40% no-repeat;
			    background-size:25px;
			    height: 45px;
			    margin-bottom: 30px;
				padding-left: 50px;
				background-color: white;
			}
			input.password{
				background: url(../../assets/images/password.png) 2% 40% no-repeat;
				background-size:25px;
				height: 45px;
				margin-bottom: 20px;
				padding-left: 50px;
				background-color: white;
			}
			.message{width: 100%;text-align: center;}
			.message a{color:#6c708f;}
		}
	}
	
	
</style>