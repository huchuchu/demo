 Ext.define('Study.view.member.MemberList', {
    extend: 'Ext.grid.Panel',
    listeners : {
        boxready : 'onLoadData'
    },  
    xtype: 'memberList',
    controller : 'memberList',
    viewModel : 'memberList',
    title : '회원목록 조회',
    columnLines : true,
    plugins : 'cellediting',
    tbar : [{
        xtype : 'combo',
        editable : false,
        displayField : 'key',
        valueField : 'value',
        queryMode : 'local',
        value : 'member_id',
        name : 'searchCode',
        store : {
            fields : ['key','value'],
            data : [{
                key : '아이디',
                value : 'member_id'
            },{
                key : '이름',
                value : 'member_name'
            }]
        }
    },{
        xtype : 'textfield',
        name : 'searchValue',
        emptyText : '검색어를 입력하세요'
    },{
        xtype : 'button',
        text : '검색',
        handler : 'searchBtn',
    }],
    columns :[{
        xtype : 'rownumberer'
    },{
        text : '아이디',
        dataIndex : 'memberId',
        flex : 1
    },{
        text : '이름',
        dataIndex : 'memberNm',
        flex : 1,
        editor : {
            xtype : 'textfield'
        }
    },{
        text : '주소',
        dataIndex : 'memberAddr',
        flex : 1,
        editor : {
            xtype : 'textfield'
        }
    },{
        text : '가입일',
        dataIndex : 'memberRegDt',
        flex : 1,
        renderer : function(value){
            if(value != undefined && value != null && value !=""){
                return Ext.util.Format.date(new Date(value), "Y-m-d H:i:s")
            }
            return value;
        }
    }
    ],
    bind : {
        store : '{memberList}'
    },
    bbar : {
        xtype: 'pagingtoolbar',
        // plugins : 'ux-slidingpager',
        plugins : 'ux-progressbarpager',
        displayInfo : true,

    }
});
