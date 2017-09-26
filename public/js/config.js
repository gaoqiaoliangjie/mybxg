require.config({
    baseUrl: '/public/assets',
    paths: {
        jquery: 'jquery/jquery',
        cookie: 'jquery-cookie/jquery.cookie',
        template:'artTemplate/template-web',
        bootstrap:'bootstrap/js/bootstrap.min',
        datepicker:'bootstrap-datepicker/js/bootstrap-datepicker',
        language:'bootstrap-datepicker/locales/bootstrap-datepicker.zh-CN.min',
        util:'../js/util',
        common: '../js/common',
        login: '../js/login',
        teacher:'../js/teacher',
        teacheradd:'../js/teacher-add',

    },
    shim:{
        bootstrap:{
            deps:['jquery']
        },
        language:{
            deps:['jquery','datepicker']
        }
    }


})
