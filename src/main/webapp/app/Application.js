/**
 * The main application class. An instance of this class is created by app.js when it
 * calls Ext.application(). This is the ideal place to handle application launch and
 * initialization details.
 */
Ext.define('Study.Application', {
    extend: 'Ext.app.Application',

    name: 'Study',

    quickTips: false,
    platformConfig: {
        desktop: {
            quickTips: true
        }
    },

    // application 이 뜨면서 login.js를 호출한다
    launch : function(){
      Ext.Ajax.request({
        url : '/api/sessioncheck',
        method : 'POST',
        success : function(res){
            var api = Ext.decode(res.responseText);
            if(api['code'] == 999){
                Ext.widget("login");
            }else{
                Ext.widget("main");
            }
        }
      });  
    //   Ext.widget("login"); 
      //  class명으로도 가능
      //   Ext.create("Study.view.main.Main");
    },

    onAppUpdate: function () {
        Ext.Msg.confirm('Application Update', 'This application has an update, reload?',
            function (choice) {
                if (choice === 'yes') {
                    window.location.reload();
                }
            }
        );
    }
});
