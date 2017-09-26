define(['jquery','template'],function($,template){
    return{
        qs:function(key){
            var param=location.search.substr(1);
            var result=null;
            if(param){
                var ps=param.split('&');
                $.each(ps,function(index,item){
                    var kv=item.split('=');
                    if(kv[0]==key){
                        result=kv[1];
                        return false;//÷’÷πeach—≠ª∑
                    }

                })


            }

         return result
        }



    }




})