const initialproduct = {
    products: []
}

export default (state = initialproduct, action) => {
    switch (action.type) {
        case 'SHOW_PRODUCT':
            return{
                ...state,
                products: action.payload.data
            }

        default:
            return state
    }
}