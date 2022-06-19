Ext.define('Study.view.login.LoginController',{
    extend : 'Ext.app.ViewController',
    alias : 'controller.login',

    // 로그인 버튼 클릭
    loginBtn : function(btn) {
        //1. 
        var id = btn.up("form").down("[name=adminId]").getValue();
        console.log("id", id);
        //2.
        var values = btn.up("form").getForm().getValues();
        console.log("values", values);

        Ext.Ajax.request({
            url : '/loginInfo',
            method : 'POST',
            params : values,
            success : function(res){
                console.log("res", res);
                var api = Ext.decode(res.responseText);
                if(api['code'] == 200){
                    btn.up("window").close();
                    Ext.widget("main");
                }else{
                    alert(api['msg']);
                    return ;
                }
                console.log("api",api);
            }
        })

        // btn.up("window").close();
        // Ext.widget("main");
    }
    
});