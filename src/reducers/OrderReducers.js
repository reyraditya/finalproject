const initialorder = {
    shippers: [],
    bank: [],
    orderhistory: [],
    orderadmin: [],
    // orderpaid: [],
    // orderrejected:[],
    // ordershipped:[]
}

export default (state = initialorder, action) => {
    switch (action.type) {
        case 'SHOW_SHIPPERS':
            return{
                ...state,
                shippers: action.payload.data
            }
        
        case 'SHOW_BANK':
            return{
                ...state,
                bank: action.payload.data
            }

        case 'SHOW_ORDERS':
            console.log(action.payload);
            
            return{
                ...state,
                orderhistory: action.payload.data
            }

        case 'SHOW_ORDERADMIN':
            console.log(action.payload);
            
            return{
                ...state,
                orderadmin: action.payload.data
            }

        // case 'SHOW_ORDERPAID':
        //     console.log(action.payload);
            
        //     return{
        //         ...state,
        //         orderpaid: action.payload.data
        //     }

        // case 'SHOW_ORDERREJECTED':
        //     console.log(action.payload);
            
        //     return{
        //         ...state,
        //         orderrejected: action.payload.data
        //     }

        // case 'SHOW_ORDERSHIPPED':
        //     console.log(action.payload);
            
        //     return{
        //         ...state,
        //         ordershipped: action.payload.data
        //     }

        default:
            return state
    }
}