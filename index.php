<?php
//���·��
header('content-type:text/html; charset=utf8');

//include �ڵ�ǰҳ���ڲ�Ƕ��һ����ҳ��

//�����ܹ�ͨ��url���ֳ��û�������Ǹ�ҳ��
//Ĭ��Ŀ¼����
$dir='main';
//Ĭ���ļ�����
$filename='index';

//����url��·��
if(array_key_exists('PATH_INFO',$_SERVER)){
//PATH_INFO���Դ���
$path=$_SERVER['PATH_INFO'];
//ȥ����һ��б��
$str=substr($path,1);
//�ַ����ָ����js�е�split��������
$ret=explode('/',$str);
//var_dump($ret);
if(count($ret)==2){
//·��������
$dir=$ret[0];//����Ŀ¼
$filename=$ret[1];//�����ļ���

}else{
//�������ȫ����ת����½ҳ��
$filename='login';
};

};



//
//echo $path;
//Ƕ����ҳ��
include('./views/'.$dir.'/'.$filename.'.html');
?>