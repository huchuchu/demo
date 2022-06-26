Ext.define('Study.view.order.OrderListController',{
    extend : 'Ext.app.ViewController',
    alias : 'controller.orderList',
    // 최초 데이터 로드
    onLoadData : function(obj){
        var me = this;
        var view = me.getView();
        var viewModel = me.getViewModel();
        var store = viewModel.getStore('orderList');
        store.load();
    },

    // 검색버튼 클릭
    searchBtn : function(btn){
        var me = this;
        var view = me.getView();
        var viewModel = me.getViewModel();
        var store = viewModel.getStore('orderList');
        var searchValue = viewModel.get("searchVal");
        store.getProxy().setExtraParam("searchValue", searchValue);
        store.load();
    },

    // 배송조회버튼 클릭
    openDeliveryInfo : function(btn){
        // 위젯버튼만 가능
        var record = btn.getWidgetRecord();
        Ext.widget("selectDelivery",{
            // window component에 보내줄 파라미터를 key : value 형식으로 작성한다
            deliveryNm : record.get("deliveryNm"),
            deliveryAddr : record.get("deliveryAddr"),
            deliveryZipcode : record.get("deliveryZipcode"),
            deliveryStatus : record.get("deliveryStatus")
        })
    }
    
});