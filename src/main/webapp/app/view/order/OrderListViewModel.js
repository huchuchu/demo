Ext.define('Study.view.order.OrderListViewModel',{
    extend : 'Ext.app.ViewModel',
    alias : 'viewmodel.orderList',
    data : {
        searchVal : ''
    }, 
    stores : {
        orderList : {
           type : 'orderList'
        }
    }
    
});