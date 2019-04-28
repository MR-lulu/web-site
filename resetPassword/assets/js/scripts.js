
jQuery(document).ready(function() {
	
    /*
        Fullscreen background
    */
    $.backstretch("assets/img/backgrounds/1.jpg");
    
    /*
        Form validation
    */
    $('.login-form input[type="text"], .login-form input[type="password"], .login-form textarea').on('focus', function() {
    	$(this).removeClass('input-error');
    });

    //默认隐藏元素
    $('.errorTips').hide();
    
    $('.login-form').on('submit', function(e) {
        //判断元素是否为空
    	$(this).find('input[type="text"], input[type="password"], input[type="hidden"], textarea').each(function(){
    		if( $(this).val() == "") {
    			e.preventDefault();
    			$(this).addClass('input-error');
    		}
    		else {
    			$(this).removeClass('input-error');
    		}
    	});

        //判断两次密码输入是否相同
        if ($('#form-password').val() != $('#form-repassword').val()) {
            e.preventDefault();
            $('.errorTips').show();
        }else {
            $('.errorTips').hide();
        }
    });
});
