 Ext.define('Study.view.order.OrderList', {
    extend: 'Ext.grid.Panel',
    listeners : {
        boxready : 'onLoadData'
    },
    xtype: 'orderList',
    controller : 'orderList',
    viewModel : 'orderList',
    title : '주문목록',
    columnLines : true,
    tbar : [
    {
        xtype : 'textfield',
        emptyText : '주문자명을 입력하세요',
        name : 'searchValue',
        bind : {
            value : '{searchVal}'
        }
    },{
        xtype : 'button',
        text : '검색',
        handler : 'searchBtn'
    }],
    columns :[{
        xtype : 'rownumberer'
    },{
        text : '주문자명',
        dataIndex : 'memberNm',
        flex : 1
    },{
        text : '주문일',
        dataIndex : 'orderRegDt',
        flex : 1,
        renderer : function(value) {
            if(value != null && value != undefined && value != ""){
                return Ext.util.Format.date(new Date(value), "Y-m-d H:i:s");
            }
            return value;
        }
    },{
        text : '주문상태',
        dataIndex : 'orderStatus',
        flex : 1,
        renderer : function(value){
            if(value != null && value != undefined && value != ""){
                if( value == "I"){
                    value = "주문완료";
                }else{
                    value = "주문취소";
                }
            }
            return value;
        }
    },{
        text : '제품명',
        dataIndex : 'orderNm',
        flex : 1
    },{
        text : '수량',
        dataIndex : 'orderCnt',
        flex : 1,
        renderer : function(value){
            if(value != null && value != undefined && value != ""){
                return Ext.util.Format.number(value, "0,000");
            }
            return value;
        }
        
    },{
        text : '금액',
        dataIndex : 'orderTotalPrc',
        flex : 1,
        renderer : function(value){
            if(value != null && value != undefined && value != ""){
                return Ext.util.Format.number(value, "0,000");
            }
            return value;
        }
    },{
        xtype : 'widgetcolumn',
        widget : {
            xtype : 'button',
            text : '배송정보',
            handler : 'openDeliveryInfo'
        }
    }
    ],
    bind : {
        store : '{orderList}'
    },
    bbar : {
        xtype : 'pagingtoolbar',
        displayInfo : true
    }

  
});
