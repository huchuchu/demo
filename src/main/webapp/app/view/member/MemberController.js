Ext.define('Study.view.member.MemberController',{
    extend : 'Ext.app.ViewController',
    alias : 'controller.member',

    loginBtn : function(btn) {
        console.log("login click");
        btn.up("window").close();
        Ext.widget("main");
    }
    
});