jQuery(document).ready(function () {

  /*
      Fullscreen background
  */
  // $.backstretch("./assets/images/loginbackground.jpg");
  $(".login").backstretch(["./assets/images/loginbackground.jpg", "./assets/images/loginbackground.jpg"], {duration: 4000}); //元素背景，切换现实
  /*
      Form validation
  */
  $('.login-form input[type="text"], .login-form input[type="password"], .login-form textarea').on('focus', function () {
    $(this).removeClass('input-error');
  });

  //默认隐藏元素
  $('.errorTips').hide();

  $('.login-form').on('submit', function (e) {
    //判断元素是否为空
    $(this).find('input[type="text"], input[type="password"], textarea').each(function () {
      if ($(this).val() == "") {
        e.preventDefault();
        $(this).addClass('input-error');
      } else {
        $(this).removeClass('input-error');
      }
    });

    //判断两次密码输入是否相同
    if ($('#form-password').val() != $('#form-repassword').val()) {
      e.preventDefault();
      $('.errorTips').show();
    } else {
      $('.errorTips').hide();
    }
  });

  this.loginTimer = setTimeout(() => {
    $(".login").backstretch(["./assets/images/loginbackground.jpg", "./assets/images/loginbackground.jpg"], {duration: 500}); //元素背景，切换现实
    clearInterval(this.loginTimer);
  }, 1000)

});
