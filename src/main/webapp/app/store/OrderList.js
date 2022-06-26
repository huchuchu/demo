Ext.define("Study.store.OrderList",{
	extend : 'Ext.data.Store',
	alias : 'store.orderList',
	storeId : 'orderList',
	autoLoad : false,
    pageSize : 2,
    proxy : {
        type : 'ajax',
        actionMethods : {
            read : 'POST'
        },
        url : '/api/list/order',
        reader :{
            type : 'json',
            rootProperty  : 'data',
            totalProperty : 'totalCount'
        }
    }

})