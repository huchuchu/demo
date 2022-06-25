Ext.define('Study.view.product.ProductListViewModel',{
    extend : 'Ext.app.ViewModel',
    alias : 'viewmodel.productList',
    data : {
        itemSeq : 0,
        itemNm : '',
        itemPrc : 0,
        itemAmt : 0 ,
        searchValue : ''
    },
    stores : {
        productList : {
            type : 'productList'
        }
    }
});