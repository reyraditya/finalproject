import axios from '../config/axios';
import cookies from 'universal-cookie';

const cookie = new cookies()

// Login users
export const onLoginClick = (email, password) => {
    return async (dispatch) => {
        try {
            const res = await axios.post('/users/login', { email, password })
            console.log(res);

            if(res.data.length !== 1) {
                return dispatch ({
                    type: 'LOGIN_ERR',
                    payload: res.data
                }) 
            }

            cookie.set('stillLogged', res.data[0].username, { path: '/' })
            cookie.set('idLogin', res.data[0].id, { path: '/' })
            cookie.set('email', res.data[0].email, { path: '/' })
            cookie.set('password', res.data[0].password, { path: '/' })
            cookie.set('status', res.data[0].status, {path: '/'})

            dispatch({
                type: 'LOGIN_SUCCESS',
                payload: {
                    id: res.data[0].id,
                    username: res.data[0].username,
                    email: res.data[0].email,
                    password: res.data[0].password,
                }
            })

        } catch (e) {
            console.log(e);

        }
    }
}

// keeping user's sessions
export const keepLogin = (id, username, email, password) => {
    if(username === undefined && id === undefined){
        return{
            type: 'KEEP_LOGIN',
            payload: {
                id: '',
                username: '',
                email: '',
                password: ''
            }
        } 
    }return{
        type: 'KEEP_LOGIN',
        payload: {
            id, 
            username,
            email,
            password
        }
    }
}

// Logout user
export const onLogoutUser = () => {
    cookie.remove("stillLogged")
    cookie.remove("idLogin")
    cookie.remove("username")
    cookie.remove("email")
    cookie.remove("password")
    return {type: "LOGOUT_USER"};
}

export const onSetTimeOut = () => {
    return {type: "SET_TIMEOUT"}
}

// Register new user
export const onRegisterUser = (username, email, password) => {
    return async (dispatch) => {
       try {
           const res = await axios.get(`/getusers/${email}/${username}`)
           console.log(res.data);
           
           if(res.data.length === 0){
                await axios.post('/users', {
                    username, email, password
                })
               
                return dispatch({
                   type: 'AUTH_SUCCESS',
                   payload: 'Register succeeded. Please go to login'
               })
           } else if(res.data.length !== 0){
               return dispatch({
                   type: 'AUTH_ERROR',
                   payload: 'Email or username has been taken'
               })
           }
       } catch (e) {
           console.log(e);
           
       }
    }
}

// Retrieve all address
 export const getAddress = () => {
     return async dispatch => {
        try {
         const userid = cookie.get('idLogin')
         const res = await axios.get(`/addresses/${userid}`)

         dispatch({
             type: 'GET_ADDRESSES',
             payload: res
         })
        
        } catch (e) {
            console.log(e);
         
        }
    }   
 }

//  Edit user's credentials
export const editCred = (username, email, password) => {
    return async (dispatch) =>  {
        try {
            const userid = cookie.get('idLogin')
            const res = await axios.patch(`/users/${userid}`, {
                username,
                email,
                password
            })
            console.log(res);

            if(res.data[0].username){
                return dispatch({
                    type: 'EDIT_PROFILE',
                    payload: res
                })
            }

        } catch (e) {
            console.log(e);
        }
    }
}

// Retrieve user's cred by user id
export const getUser = () => {
    return async dispatch => {
        try {
            const userid = cookie.get('idLogin')
            const res = await axios.get(`/getusers/${userid}`)
            console.log(res.data);
            
            return dispatch({
                type: 'EDIT_PROFILE',
                payload: res
            })
            
        } catch (e) {
            console.log(e);
            
        }
    } 
}

// Retrieve user's credentials (username and email) => as protective in register
export const getCred = () => {
    return async () => {
        try {
            const email = cookie.get('email')
            const username = cookie.get('stillLogged')
            const res = await axios.get(`/getusers/${email}/${username}`)
            console.log(res);
            
        } catch (e) {
            console.log(e);
            
        }
    }
}

// Upload avatar
export const uploadAvatar =  (username, avatar) => {
    console.log(avatar[0]);
    
    return async () => {
        try {
            const formData = new FormData()
    
            formData.append('username', username)
            formData.append('avatar', avatar[0])

            await axios.post('/avatar', formData, {
                headers: {
                    'Content-Type': 'multipart/form-data'
                }
            })
        } catch (e) {
            console.log(e);
            
        }
    }
}

// Delete avatar
export const deleteAvatar = (username) => {
    console.log(username);
    
    return async () => {
        try {
           const res = await axios.delete(`/users/${username}`)
           console.log(res);
            
        } catch (e) {
          console.log(e);
      
        }
    }
}

// Delete image
export const deleteImage = (productid) => {
    return async () => {
        try {
            const res = await axios.delete(`/deleteimage/${productid}`)
            console.log(res);
            
        } catch (e) {
            console.log(e);
            
        }
    }
}

// Add product
export const addProduct = (product_name, designer, gender, category, description, image, stock, price) => {
    return async () => {
        try {
            const formData = new FormData()

            formData.append('product_name', product_name)
            formData.append('designer', designer)
            formData.append('gender', gender)
            formData.append('category', category)
            formData.append('description', description)
            formData.append('image', image)
            formData.append('stock', stock)
            formData.append('price', price)
            
            const res = await axios.post('/addproduct', formData, {
                headers: {
                    'Content-Type': 'multipart/form-data'
                }
            })
            console.log(res);
            
        } catch (e) {
            console.log(e);
        }
    }
}

// Retrieve all products
export const getProducts = () => {
    return async (dispatch) => {
        try {
            const res = await axios.get('/allproducts')
            console.log(res);

            return dispatch ({
                type: 'SHOW_PRODUCT',
                payload: res
            })
            
        } catch (e) {
            console.log(e);
            
        }
    }
}

// Retrieve products based on gender
export const getProductsGender = (gender, category) => {
    return async (dispatch) => {
        try {
            const res = await axios.get(`/allproduct/${gender}/${category}`)
            console.log(res);

            return dispatch({
                type: 'SHOW_PRODUCT',
                payload: res
            })
            
        } catch (e) {
            console.log(e);
        
        }
    }
}

// Retrieve designers
export const getDesigners = () => {
    return async (dispatch) => {
        try {
            const res = await axios.get('/designers')
            console.log(res);
            
            return dispatch({
                type: 'SHOW_DESIGNERS',
                payload: res
            })
            
        } catch (e) {
            console.log(e);
            
        }
    }
}

// Edit products
export const editProducts = (productid, product_name, designer, gender, category, description, image, stock, price) => {
    return async () => {
        try {
            const formData = new FormData()

            formData.append('product_name', product_name)
            formData.append('designer', designer)
            formData.append('gender', gender)
            formData.append('category', category)
            formData.append('description', description)
            formData.append('image', image[0])
            formData.append('stock', stock)
            formData.append('price', price)

            const res = await axios.patch(`/editproduct/${productid}`, formData, {
                headers: {
                    'Content-Type': 'multipart/form-data'
                }
            })
            console.log(res);
            console.log('success');
            console.log(image[0]);
            
            
        } catch (e) {
            console.log(e);
            
        }
    }
}

// Delete products
export const deleteProducts = (productid) => {
    return async () => {
        try { 
            await axios.delete(`/deleteproducts/${productid}`)
            this.getProducts()
        } catch (e) {
            console.log(e);
    
        }
    }
}

// Post wishlist
export const addWishlist = (productid, userid) => {
    return async () => {
        try {
            const res = await axios.post('/wishlist/add', {
                productid,
                userid
            })
            console.log(res);
            
        } catch (e) {
            console.log(e);

        }
    }
}

// Retrieve wishlist
export const getWishlist = (userid) => {
    return async (dispatch) => {
        try {
            const res = await axios.get(`/wishlist/${userid}`)
            console.log(res);

            return dispatch({
                type: 'SHOW_CARTWISH',
                payload: res
            })
            
        } catch (e) {
            console.log(e);
            
        }
    }
}

// Remove wishlist
export const removeWishlist = (id) => {
    return async () => {
        try {
            const res = await axios.delete(`/wishlist/removewishlist/${id}`)
            console.log(res);
            
        } catch (e) {
            console.log(e);
            
        }
    }
}

// Add cart
export const addCart = (productid, userid) => {
    return async () => {
        try {
            const res = await axios.post('/cart/add', {
                userid, 
                productid
            })
            console.log(res);
    
        } catch (e) {
            console.log(e);
            
        }
    }
}

// Retrieve cart
export const getCart = (userid) => {
    return async (dispatch) => {
        try {
            const res = await axios.get(`/cart/${userid}`)
            console.log(typeof(res.data));

            if(res.data.length){
                return dispatch({
                    type: 'SHOW_CARTWISH',
                    payload: res
                })
            } else {
                return dispatch({
                    type: 'EMPTY_CARTWISH'
                })
            }
        } catch (e) {
            console.log(e);
            
        }
    }
}
