<?php
//后端路由
header('content-type:text/html; charset=utf8');

//include 在当前页面内部嵌入一个字页面

//必须能够通过url区分出用户想访问那个页面
//默认目录名称
$dir='main';
//默认文件名称
$filename='index';

//处理url的路径
if(array_key_exists('PATH_INFO',$_SERVER)){
//PATH_INFO属性存在
$path=$_SERVER['PATH_INFO'];
//去掉第一个斜杠
$str=substr($path,1);
//字符串分割方法和js中得split方法很像
$ret=explode('/',$str);
//var_dump($ret);
if(count($ret)==2){
//路由有两层
$dir=$ret[0];//覆盖目录
$filename=$ret[1];//覆盖文件名

}else{
//其他情况全部跳转到登陆页面
$filename='login';
};

};



//
//echo $path;
//嵌入子页面
include('./views/'.$dir.'/'.$filename.'.html');
?>