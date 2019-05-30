$(function(){
    // 添加背景图片
    $.backstretch("assets/img/backgrounds/1.jpg");

    initData();

    $('#usertype').selectpicker({
        'selectedText': 'cat'
    });

    function createJson() {
        const json = {
            "ptn": "getUserInfoList",
        };
        return json;
    }

    function initData() {
        // 初始化，获取用户列表信息
        $.ajax({
            type: "POST",
            url: "http://114.115.167.76:8085/mall/user/query/list",
            contentType: "application/json; charset=utf-8",
            data: JSON.stringify(createJson()),  //JSON.stringify()
            dataType: "json",
            success: function (data) {
                for (let item of data.data) {
                    if (item.level === 1) {
                        $("#supperAdmin").append("<option value='"+item.userId+"'>"+item.username+"</option>");
                    }else {
                        $("#simpleAdmin").append("<option value='"+item.userId+"'>"+item.username+"</option>");                               $("#simple-admin").append("<option value="+item.userId+">"+item.username+"</option>");
                    }
                }
                $('.selectpicker').selectpicker('refresh');
            },
            error: function (data) {
                alert(data.msg);
                //alert("服务器错误，请求管理员信息失败!");
            }
        });
    }

    // 重置用户密码，发送请求到服务器
    function postRetPassword() {
        const json = {
            "ptn": "resetPassword",
        }
        const idsArray = $('.selectpicker').val();
        const ids = new Array();
        for (id of idsArray) {
            ids.push(parseInt(id));
        }
        const password = $('#form-password').val();
        json.ids = ids;
        json.password = $.md5(password);

        $.ajax({
            type: "POST",
            url: "http://114.115.167.76:8085/mall/reset/password",
            contentType: "application/json; charset=utf-8",
            data: JSON.stringify(json),  //JSON.stringify()
            dataType: "json",
            success: function (data) {
                alert(data.msg);
            },
            error: function (data) {
                alert(data.msg);
                //alert("服务器错误，请求管理员信息失败!");
            }
        });
    }

    /**
     * 表单验证
     */
    $('.login-form input[type="text"], .login-form input[type="password"], .login-form textarea').on('focus', function() {
        $(this).removeClass('input-error');
    });

    //默认隐藏元素
    $('.errorTips').hide();

    $('.login-form').on('submit', function(e) {
        var flag = true;
        //判断元素是否为空
        $(this).find('input[type="text"], input[type="password"], textarea').each(function(){
            if( $(this).val() == "") {
                $(this).addClass('input-error');
                flag = false;
            }
            else {
                $(this).removeClass('input-error');
            }
        });
        //判断两次密码输入是否相同
        if ($('#form-password').val() != $('#form-repassword').val()) {
            $('.errorTips').show();
            flag = false;
        }else {
            $('.errorTips').hide();
        }
        // 阻止表单提交
        e.preventDefault();
        if (flag == true) {
            // 重置用户密码，发送请求到服务器
            postRetPassword();
        }
    });
});