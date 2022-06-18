 Ext.define('Study.view.product.ProductList', {
    extend: 'Ext.panel.Panel',
    xtype: 'productList',
    controller : 'productList',
    viewModel : 'productList',
    title : '상품목록',
    items : [{
        xtype : 'toolbar',
        items : [{
            xtype : 'textfield',
            fieldLabel  : '상품명'
        },{
            xtype : 'numberfield',
            fieldLabel  : '가격'

        },{
            xtype : 'numberfield',
            fieldLabel  : '재고량'

        },{
            xtype : 'button',
            text : '등록'
        }
        ]
    },{
        xtype : 'grid',
        columnLines : true,
        tbar : [{
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
        }
        ],
        bine : {
            store : '{productList}'
        }


    }], 


});
