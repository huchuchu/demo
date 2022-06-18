 Ext.define('Study.view.order.OrderList', {
    extend: 'Ext.grid.Panel',
    xtype: 'orderList',
    controller : 'orderList',
    viewModel : 'orderList',
    // 동일함
    // viewModel : {
    //     type : 'orderList'
    // }
    title : '주문목록',
    columnLines : true,
    tbar : [{
        xtype : 'combo',
        displayField : 'a',
        valueField : 'b',
        store : {
            fields : ['a', 'b'],
            data : [{
                a : 'a',
                b : 'b'
            }]
        }
    },{
        xtype : 'textfield',
        emptyText : '검색어를 입력하세요'
    },{
        xtype : 'button',
        text : '검색'
    }],
    columns :[{
        xtype : 'rownumberer'
    },{
        text : '상품명',
        dataIndex : 'productNm',
        flex : 1
    },{
        text : '가격',
        dataIndex : 'price',
        flex : 1
    },{
        text : '재고량',
        dataIndex : 'amount',
        flex : 1
    },{
        text : '등록일',
        dataIndex : 'rgstrDt',
        flex : 1
    },{
        xtype : 'widgetcolumn',
        widget : {
            xtype : 'button',
            text : '배송정보',
            handler : 'deliveryInfoBtn'
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
