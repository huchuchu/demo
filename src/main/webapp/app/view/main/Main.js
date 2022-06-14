 Ext.define('Study.view.main.Main', {
    extend: 'Ext.container.Viewport',
    xtype: 'main',
    layout : 'border',
    items : [{
        xtype : 'panel',
        region : 'north',
        title : 'demo Admin'
    },{
        xtype : 'panel',
        split : true,
        width: 200,
        region : 'west',
        layout : 'fit',
        items : [{
            xtype : 'treelist',
            store : {
                root : {
                    expanded : true,
                    children :[{
                        text : '상품관리',
                        iconCls : 'fab fa-product-hunt',
                        expanded : true,
                        selectable : false,
                        children : [{
                            text : '상품목록',
                            leaf : true
                        }]
                    },{
                        text : '주문관리',
                        iconCls : 'fab fa-first-order',
                        expanded : true,
                        selectable : false,
                        children : [{
                            text : '주문목록',
                            leaf : true
                        }]
                    },{
                        text : '회원관리',
                        iconCls : 'fas fa-user',
                        expanded : true,
                        selectable : false,
                        children : [{
                            text : '회원목록',
                            leaf : true
                        }]
                    }]
                }
            }
        }]
    },{
        xtype : 'panel',
        flex: 1,
        region : 'center',
        layout : 'fit',
        items :[{
            xtype : 'panel',
            html : "<h2> main dashBoard </h2>"
        }]
    }]
   
  
});
