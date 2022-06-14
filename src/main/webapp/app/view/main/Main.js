Ext.define('Study.view.main.Main', {
    extend: 'Ext.panel.Panel',
    xtype: 'app-main',
    width : 500,
    height : 500,
    items : [{
    	xtype : 'button',
    	text : 'click',
    	handler : function(btn){
    		Ext.Ajax.request({
    			url : '/getList',
    			success : function(res){
    				var api = Ext.decode(res.responseText);
    				console.log('api',api);
    			}
    		});
    	}
    }]

});
