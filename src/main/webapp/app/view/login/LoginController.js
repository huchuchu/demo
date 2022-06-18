Ext.define('Study.view.login.LoginController',{
    extend : 'Ext.app.ViewController',
    alias : 'controller.login',

    loginBtn : function(btn) {
        console.log("login click");
        btn.up("window").close();
        Ext.widget("main");
    }
    
});