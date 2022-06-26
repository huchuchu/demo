Ext.define('Study.view.member.MemberListController',{
    extend : 'Ext.app.ViewController',
    alias : 'controller.memberList',
    // 최초 데이터 로드
    onLoadData : function(obj){
        var me = this;
        var view = me.getView();
        var viewModel = me.getViewModel();
        var store = viewModel.getStore('memberList');
        store.load({
            callback : function(data){
                console.log("memberonLoadData", data);
            }
        });
    },
    // 검색버튼 클릭
    searchBtn : function(btn){
        var me = this;
        var view = me.getView();
        var viewModel = me.getViewModel();
        var store = viewModel.getStore('memberList');

        var searchCode = view.down("[name=searchCode]").getValue();
        var searchValue = view.down("[name=searchValue]").getValue();

        store.getProxy().setExtraParam("searchCode", searchCode);
        store.getProxy().setExtraParam("searchValue", searchValue);      
        store.load();

    }

    
});