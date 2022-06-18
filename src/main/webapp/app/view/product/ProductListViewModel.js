Ext.define('Study.view.product.ProductListViewModel',{
    extend : 'Ext.app.ViewModel',
    alias : 'viewmodel.productList',
    stores : {
        productList : {
            fields : ['productNm', 'price', 'amount', 'rgstrDt'],
            data : [{
                productNm : '지우개',
                price : 500,
                amount : 100,
                rgstrDt : new Date()
            },{
                productNm : '지우개',
                price : 500,
                amount : 100,
                rgstrDt : new Date()
            },{
                productNm : '지우개',
                price : 500,
                amount : 100,
                rgstrDt : new Date()
            },{
                productNm : '지우개',
                price : 500,
                amount : 100,
                rgstrDt : new Date()
            }
            ]
        }
    }
    
});