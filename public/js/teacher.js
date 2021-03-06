/**
 * Created by admin on 2017/9/22.
 */
define(['jquery','template','bootstrap'],function($,template){
    //调用接口获取所有的讲师数据

    $.ajax({
        type:'get',
        url:'/api/teacher',
        dataType:'json',
        success:function(data){
           // console.log(data);
        //    解析数据，渲染页面
            var html=template('teacherTpl',{list:data.result});
            $('#teacherInfo').html(html);

        //启用和注销管理功能
            $('.eod').click(function(){
                var that=this
                //console.log(123)
                var td=$(this).closest('td')
                var tcId=td.attr('data-tcId');
                var status=td.attr('data-status');
                //console.log(tcId,status)
                $.ajax({
                    type:'post',
                    url:'/api/teacher/handle',
                    data:{tc_id:tcId,tc_status:status},
                    dataType:'json',
                    success:function(data){
                        //console.log(data)
                        if(data.code==200){
                          td.attr('data-status',data.result.tc_status)
                            if(data.result.tc_status==0){
                                $(that).text('注销')
                            }else{
                                $(that).text('启用')
                            }
                        }

                    }
                })

            })
        //查看讲讲师信息
            $('.preview').click(function(){
                var td=$(this).closest('td')
                var tcId=td.attr('data-tcId');
                $.ajax({
                    type:'get',
                    url:'/api/teacher/view',
                    data:{tc_id:tcId},
                    dataType:'json',
                    success:function(data){
                        //console.log(data)
                        var html=template('modalTpl',data.result)
                        $('#modalInfo').html(html)
                        $('#teacherModal').modal()
                    }

                })

            })


        }


    })

})