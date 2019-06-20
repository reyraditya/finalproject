const initialorder = {
    shippers: [],
    bank: []
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

        default:
            return state
    }
}