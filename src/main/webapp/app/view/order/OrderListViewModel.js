Ext.define('Study.view.order.OrderListViewModel',{
    extend : 'Ext.app.ViewModel',
    alias : 'viewmodel.orderList',
    stores : {
        orderList : {
            fields : ['productNm', 'price', 'amount', 'rgstrDt'],
            data : [{
                productNm : '지우개',
                price : 500,
                amount : 101,
                rgstrDt : new Date()
            },{
                productNm : '지우개',
                price : 500,
                amount : 102,
                rgstrDt : new Date()
            },{
                productNm : '지우개',
                price : 500,
                amount : 103,
                rgstrDt : new Date()
            },{
                productNm : '지우개',
                price : 500,
                amount : 104,
                rgstrDt : new Date()
            }
            ]
        }
    }
    
});