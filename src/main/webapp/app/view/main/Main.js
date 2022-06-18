 Ext.define('Study.view.main.Main', {
    extend: 'Ext.container.Viewport',
    xtype: 'main',
    layout : 'border',
    items : [{
        xtype : 'panel',
        region : 'north',
        // title : 'demo Admin'
        title : '',
        header : false,
        items :[{
            xtype : 'toolbar',
            items : [{
                xtype : 'label',
                html : '<h2>Demo Admin</h2>'
            },'->',{
                xtype : 'button',
                text : 'xxx님',
                menu : [{
                    text : '비밀번호 변경'
                },{
                    text : '로그아웃'
                }]
            }]
        }]
    },{
        xtype : 'panel',
        split : true,
        width: 200,
        region : 'west',
        layout : 'fit',
        items : [{
            xtype : 'treelist',
            listeners : {
                selectionchange : function ( obj, record ) {
                    // 클릭한 cell에 대한 값을 가져올 때 recod.get을 사용한다.
                    console.log(record.get("page"));

                    var centerPage =  obj.up("viewport").down("component[region=center]");
                    centerPage.removeAll(true);
                    centerPage.add({
                        xtype : record.get("page")
                    })
                }
            },
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
                            page : 'productList',
                            leaf : true
                        }]
                    },{
                        text : 'wnans관리',
                        iconCls : 'fab fa-first-order',
                        expanded : true,
                        selectable : false,
                        children : [{
                            text : '주문목록',
                            page : 'orderList',
                            leaf : true
                        }]
                    },{
                        text : '회원관리',
                        iconCls : 'fas fa-user',
                        expanded : true,
                        selectable : false,
                        children : [{
                            text : '회원목록',
                            page : 'memberList',
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
