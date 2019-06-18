const initialproduct = {
    products: [],
    designers: [],
    cartwish: [],
}

export default (state = initialproduct, action) => {
    switch (action.type) {
        case 'SHOW_PRODUCT':
            return{
                ...state,
                products: action.payload.data
            }
        
        case 'SHOW_DESIGNERS':
            return{
                ...state,
                designers: action.payload.data
            }
        
        case 'SHOW_CARTWISH':
            return{
                ...state,
                cartwish: action.payload.data
            }

        case 'EMPTY_CARTWISH':
            return{
                ...state,
                cartwish: []
            }
                  
        default:
            return state
    }
}