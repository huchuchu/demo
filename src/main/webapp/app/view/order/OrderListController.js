Ext.define('Study.view.order.OrderListController',{
    extend : 'Ext.app.ViewController',
    alias : 'controller.orderList',
    deliveryInfoBtn : function(btn){
        console.log("<<<<<<")
        var record = btn.getWidgetRecord();
        console.log(record.get("amount"));
        console.log(record.get("price"));
    }

});