/**
 * Created by admin on 2017/9/22.
 */
define(['jquery','template'],function($,template){
    //���ýӿڻ�ȡ���еĽ�ʦ����

    $.ajax({
        type:'get',
        url:'/api/teacher',
        dataType:'json',
        success:function(data){
            console.log(data);
        //    �������ݣ���Ⱦҳ��
            var html=template('teacherTpl',{list:data.result});
            $('#teacherInfo').html(html);


        }


    })

})