define(['jquery','cookie'],function($){

	//NProgress.start();
    //
	//NProgress.done();

	$('.navs ul').prev('a').on('click', function () {
		$(this).next().slideToggle();
	});

	//实现退出功能
	$('#logoutBtn').click(function(){

		$.ajax({
			type:'post',
			url:'/api/logout',
			dataType:'json',
			success:function(data){
				if(data.code==200){
					//重新跳转到这个页面
					location.href='/main/login';
				}
			}



		})
	})

	//检测用户是否登录
	var flag=$.cookie('PHPSESSID')
	//console.log(flag)
	if(!flag&&location.pathname!='/main/login'){
		//如果cookie不存在，跳转登陆页面
		location.href='/main/login';
	}
//	设置头像用户信息
	var loginInfo=$.cookie('loginInfo')
	loginInfo=loginInfo && JSON.parse(loginInfo)
	$('.aside .profile img').attr('src',loginInfo.tc_avatar);
	$('.aside .profile h4').html(loginInfo.tc_name)

})
