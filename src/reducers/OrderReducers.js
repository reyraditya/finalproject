const initialorder = {
    shippers: [],
    bank: [],
    orderhistory: [],
    orderadmin: []
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

        default:
            return state
    }
}