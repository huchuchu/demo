Ext.define('Study.view.member.MemberListViewModel',{
    extend : 'Ext.app.ViewModel',
    alias : 'viewmodel.memberList',
    stores : {
        memberList : {
            fields : ['productNm', 'price', 'amount', 'rgstrDt'],
            data : [{
                productNm : '지우개1',
                price : 500,
                amount : 100,
                rgstrDt : new Date()
            },{
                productNm : '지우개2',
                price : 500,
                amount : 100,
                rgstrDt : new Date()
            },{
                productNm : '지우개3',
                price : 500,
                amount : 100,
                rgstrDt : new Date()
            },{
                productNm : '지우개4',
                price : 500,
                amount : 100,
                rgstrDt : new Date()
            }
            ]
        }
    }
    
});