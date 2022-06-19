Ext.define('Study.view.product.ProductListViewModel',{
    extend : 'Ext.app.ViewModel',
    alias : 'viewmodel.productList',
    stores : {
        productList : {
            type : 'productList'
        }
    }
});