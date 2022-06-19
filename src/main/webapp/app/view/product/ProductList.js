 Ext.define('Study.view.product.ProductList', {
    extend: 'Ext.form.Panel',
    xtype: 'productList',
    controller: 'productList',
    viewModel: 'productList',
    listeners : {
    	boxready : 'onLoadData',
    	resize : 'setGridHeight'
    },
    title : '상품목록 조회',
    items : [{
        xtype : 'toolbar',
        items : [{
            xtype : 'textfield',
            fieldLabel  : '상품명',
            name : 'itemNm',
            bind : {
                value :'{itemNm}'
            }
        },{
            xtype : 'numberfield',
            fieldLabel  : '가격',
            name : 'itemPrc',
            bind : {
                value :'{itemPrc}'
            }

        },{
            xtype : 'numberfield',
            fieldLabel  : '재고량',
            name : 'itemAmt',
            bind : {
                value : '{itemAmt}'
            }

        },{
            xtype : 'button',
            text : '저장',
            handler : 'addProduct'
        },{
            xtype: 'button',
            text : '초기화'
        }
        ]
    },{
        xtype : 'grid',
        viewConfig : {
            emptyText : '상품이 존재하지않습니다'
        },
        height: 150, // buffer 쓸 때는 지정해줘야함
        border: true,
        columnLines : true,
        tbar : [{
            xtype : 'textfield',
            emptyText : '찾을 상품명을 입력하세요'
        },{
            xtype : 'button',
            text : '검색'
        }],
        columns :[{
            xtype : 'rownumberer'
        },{
            text : '상품명',
            dataIndex : 'itemNm',
            flex : 1
        },{
            text : '가격',
            dataIndex : 'itemPrc',
            flex : 1
        },{
            text : '재고량',
            dataIndex : 'itemAmt',
            flex : 1
        },{
            text : '등록일',
            dataIndex : 'itemRegDt',
            flex : 1
        }
        ],
        bind : {
        	store : '{productList}'
        }
    }], 


});
