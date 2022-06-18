Ext.define('Study.view.order.OrderController',{
    extend : 'Ext.app.ViewController',
    alias : 'controller.order',

    loginBtn : function(btn) {
        console.log("login click");
        btn.up("window").close();
        Ext.widget("main");
    }
    
});