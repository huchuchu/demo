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

    // product 저장
    addProduct : function(btn){
        var me = this;
        var view = me.getView();
        var viewModel = me.getViewModel();

        var params = {
            itemNm : viewModel.get("itemNm"),
            itemPrc : viewModel.get("itemPrc"),
            itemAmt : viewModel.get("itemAmt")
        }

        Ext.Ajax.request({
            url : '/api/add/Product',
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
            
    }


    
});