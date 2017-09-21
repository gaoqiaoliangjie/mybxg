define(['jquery','cookie'],function($){
    $('#loginBtn').click(function () {
        $.ajax({
            type: 'post',
            url: '/api/login',
            data: $('#loginForm').serialize(),
            dataType: 'json',
            success: function (data) {
                //console.log(data)
                if(data.code==200){
                    //���û��ĵ�¼��Ϣ���浽cookie�з����ҳ�湲��


                    $.cookie('loginInfo',JSON.stringify(data.result),{path:'/'})
//                    ��¼�ɹ�����ת����ҳ��
                    location.href='/main/index'
                }
            }


        })


        return false //��ֹ��ť��Ĭ����Ϊ
    })
})