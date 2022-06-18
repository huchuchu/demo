Ext.define('Study.view.product.ProductController',{
    extend : 'Ext.app.ViewController',
    alias : 'controller.product',

    loginBtn : function(btn) {
        console.log("login click");
        btn.up("window").close();
        Ext.widget("main");
    }
    
});