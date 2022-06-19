Ext.define('Study.view.product.ProductListController',{
    extend : 'Ext.app.ViewController',
    alias : 'controller.productList',

    // 최초 데이터 로드
    onLoadData : function(obj){
        // store 가져오기 -> viewModel에 담겨있는 dataStore 가져오기
        var me = this;
        var view = me.getView();
        var viewModel = me.getViewModel();
        // var store = viewModel.getStore("productList")
        // view의 xtype과 같은 명칭이기때문에 아래와 같이 써도 무방하다
        // view['xtype'] == "productList"
        var store = viewModel.getStore(view['xtype']);
        store.load();
    },
    // 상품목록 리사이즈
    setGridHeight : function(obj){
        obj.down("grid").setHeight(Ext.Element.getViewportHeight()-150);
    }

    
});