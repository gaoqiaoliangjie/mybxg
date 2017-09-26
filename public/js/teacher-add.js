define(['jquery','template','util'],function($,template,util){
    var tcId=util.qs('tc_id');
    //console.log(tcId)
    if(tcId){
        //编辑讲师
        $.ajax({
            type:'get',
            url:'/api/teacher/edit',
            data:{tc_id:tcId},
            dataType:'json',
            success:function(data){
                //console.log(data)
                data.result.operate='编辑讲师'
                var html=template('teacheraddTpl',data.result)
                $('#teacheraddInfo').html(html)

            //    处理表单提交
                submitForm('/api/teacher/update')

            }

        })

    }else{
    //    添加讲师
        var html=template('teacheraddTpl',{operate:'添加讲师'})
        $('#teacheraddInfo').html(html)
        submitForm('/api/teacher/add')
    }

//    实现表单提交
    function submitForm(url){
        $('#teacherBtn').click(function(){
            $.ajax({
                type:'post',
                url:url,
                data:$('#teacherForm').serialize(),
                dataType:'json',
                success:function(data){
                    if(data.code==200){
                        location.href='/teacher/teacher_list'
                    }


                }

            })



        })


    }

})