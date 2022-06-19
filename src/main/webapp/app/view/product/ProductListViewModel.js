Ext.define('Study.view.product.ProductListViewModel',{
    extend : 'Ext.app.ViewModel',
    alias : 'viewmodel.productList',
    data : {
        itemNm : 0,
        itemNm : '',
        itemPrc : 0,
        itemAmt : 0        
    },
    stores : {
        productList : {
            type : 'productList'
        }
    }
});