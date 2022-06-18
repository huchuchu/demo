Ext.define('Study.view.window.UpdatePasswordController',{
    extend : 'Ext.app.ViewController',
    alias : 'controller.updatePassword',

    loginBtn : function(btn) {
        console.log("login click");
        btn.up("window").close();
        Ext.widget("main");
    }
    
});