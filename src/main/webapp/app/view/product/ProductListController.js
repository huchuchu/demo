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
        store.load({
            callback : function(data){
                console.log("onLoadData", data);
            }
        });
    },
    
    // 상품목록 리사이즈
    setGridHeight : function(obj){
        obj.down("grid").setHeight(Ext.Element.getViewportHeight()-150);
    },

    // product 저장/수정
    addProduct : function(btn){
        var me = this;
        var view = me.getView();
        var viewModel = me.getViewModel();
        var url = "/api/add/Product";
        var params = {
            itemNm : viewModel.get("itemNm"),
            itemPrc : viewModel.get("itemPrc"),
            itemAmt : viewModel.get("itemAmt")
        }

        // 수정등록 
        console.log('itemSeq', viewModel.get("itemSeq"));
        if(viewModel.get("itemSeq") > 0) {
            params.itemSeq = viewModel.get("itemSeq");
            url = "/api/update/Product";
        }

        Ext.Ajax.request({
            url : url,
            method : 'POST',
            params : params,
            success : function(res){
                var result = Ext.decode(res.responseText);
                // 정상등록
                if(result['code']== 200){
                    viewModel.getStore(view['xtype']).reload();
                }else{
                    Ext.Msg.alert("알림", result['msg']);
                    return;
                }
            }
        });        
            
    },

    // 검색 기능
    searchBtn : function(btn){
        console.log("들어옴");
        var me = this;
        var view = me.getView();
        var viewModel = me.getViewModel();
        var store = viewModel.getStore('productList');

        // param은 싱글톤 방식이라 페이지가 유지되지않는다
        store.getProxy().setExtraParam("searchValue", viewModel.get("searchValue"));
        store.load();
    },

    // 그리드 정보수정을 위한 method
    onUpdateForm : function( obj, td, cellIndex, record, tr, rowIndex, e, eOpts )  {
        var me = this;
        var view = me.getView();
        var viewModel = me.getViewModel();

        console.log('Seq',record.get("itemSeq"));
        console.log('Nm',record.get("itemNm"));

        viewModel.set("itemSeq", record.get("itemSeq"));
        viewModel.set("itemNm", record.get("itemNm"));
        viewModel.set("itemPrc", record.get("itemPrc"));
        viewModel.set("itemAmt", record.get("itemAmt"));
    },
    // 상품삭제
    removeBtn : function(btn){
        var me = this;
        var view = me.getView();
        var viewModel = me.getViewModel();
        var record = btn.getWidgetRecord();

        console.log('itemSeq',record.get("itemSeq"))
        Ext.Ajax.request({
            url : '/api/delete/Product',
            method : 'POST',
            params : {
                itemSeq : record.get("itemSeq")
            },
            success : function(res){
                var result = Ext.decode(res.responseText);
                if(result['code'] == 200){
                    viewModel.getStore('productList').load();
                }else{
                    Ext.Msg.alert("알림", res['msg']);
                    return;
                }
            }
        })
    },

    // 그리드 초기화
    formatBtn : function(btn){
        var me = this;
        var view = me.getView();
        var viewModel = me.getViewModel();

        viewModel.set("itemSeq", 0);
        viewModel.set("itemNm", "");
        viewModel.set("itemPrc", 0);
        viewModel.set("itemAmt", 0);
    }


    
});