Ext.define("Study.store.MemberList",{
	extend : 'Ext.data.Store',
	alias : 'store.memberList',
	storeId : 'memberList',
	autoLoad : false,
    fields : ['memberSeq','memberId','memberNm','memberAddr','memberRegDt'],
    pageSize : 5,
    proxy : {
        type : 'ajax',
        actionMethods : {
            read : 'POST'
        },
        url : '/api/list/member',
        reader :{
            type : 'json',
            rootProperty  : 'data',
            totalProperty : 'totalCount'
        }
    }

})