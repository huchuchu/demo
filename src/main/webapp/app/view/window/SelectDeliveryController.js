Ext.define('Study.view.window.SelectDeliveryController', {
    extend : 'Ext.app.ViewController',
    alias : 'controller.selectDeliveryController',
    onLoadData : function(obj){
        var me = this;
        var view = me.getView();
        var viewModel = me.getViewModel();
        // 아직 viewModel에 담기기 전 상태
        // view에 config처럼 떠 있는 상태이다
        console.log("view",view['deliveryNm']);
        console.log("view",view['deliveryAddr']);
        console.log("view",view['deliveryStatus']);
        console.log("view",view['deliveryZipcode']);

        // viewModel에 넣어줌
        viewModel.set("deliveryNm", view['deliveryNm']);
        // 주소는 addr + zipcode를 합쳐서 출력해야한다
        viewModel.set("deliveryAddr", "("+view['deliveryZipcode']+") "+ view['deliveryAddr']);
        // deliveryStatus 는 코드로 나와서 분기처리필요
        var deliveryStatusNm = "";
        if( view['deliveryStatus'] == "I"){
            deliveryStatusNm = "배송중";
        }else{
            deliveryStatusNm = "배송완료";
        }
        viewModel.set("deliveryStatus", deliveryStatusNm);
        
        



    }
});