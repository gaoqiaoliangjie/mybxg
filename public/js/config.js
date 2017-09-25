require.config({
    baseUrl: '/public/assets',
    paths: {
        jquery: 'jquery/jquery',
        cookie: 'jquery-cookie/jquery.cookie',
        template:'artTemplate/template-web',
        bootstrap:'bootstrap/js/bootstrap.min',
        common: '../js/common',
        login: '../js/login',
        teacher:'../js/teacher'
    },
    shim:{
        bootstrap:{
            deps:['jquery']
        }
    }


})
