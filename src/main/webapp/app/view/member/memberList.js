 Ext.define('Study.view.product.memberList', {
    extend: 'Ext.grid.Panel',
    xtype: 'memberList',
    title : '회원목록',
    columnLines : true,
    plugins : 'cellediting',
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
        flex : 1,
        editor : {
            xtype : 'textfield'
        }
    },{
        text : '가격',
        dataIndex : 'price',
        flex : 1,
        editor : {
            xtype : 'numberfield'
        }
    },{
        text : '재고량',
        dataIndex : 'amount',
        flex : 1,
        editor : {
            xtype : 'numberfield'
        }
    },{
        text : '등록일',
        dataIndex : 'rgstrDt',
        flex : 1
    }
    ],
    store : {
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
    },
    bbar : {
        xtype: 'pagingtoolbar',
        // plugins : 'ux-slidingpager',
        plugins : 'ux-progressbarpager',
        displayInfo : true,

    }


  
});
