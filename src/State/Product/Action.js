import api from "../../config/api";
import { FIND_PRODUCTS_FAILURE, FIND_PRODUCTS_REQUEST, FIND_PRODUCTS_SUCCESS, FIND_PRODUCT_BY_ID_FAILURE, FIND_PRODUCT_BY_ID_REQUEST, FIND_PRODUCT_BY_ID_SUCCESS, CREATE_PRODUCT_REQUEST, CREATE_PRODUCT_SUCCESS,
    CREATE_PRODUCT_FAILURE,    
    UPDATE_PRODUCT_REQUEST,
    UPDATE_PRODUCT_SUCCESS,
    UPDATE_PRODUCT_FAILURE,    
    DELETE_PRODUCT_REQUEST,
    DELETE_PRODUCT_SUCCESS,
    DELETE_PRODUCT_FAILURE} from "./ActionType";

export const findProducts = (reqData) => async (dispatch) => {
    dispatch({type:FIND_PRODUCTS_REQUEST})
    console.log("reqData: ", reqData)
    const { colors, sizes, minPrice, maxPrice, minDiscount, category, stock, sort, pageNumber, pageSize } = reqData;
    try {
        const {data} = await api.get(`/api/products?color=${colors}&size=${sizes}&minPrice=${minPrice}&maxPrice=${maxPrice}&minDiscount=${minDiscount}&category=${category}&stock=${stock}&sort=${sort}&pageNumber=${pageNumber}&pageSize=${pageSize}`)
        console.log("Product data: ",data)
        dispatch({type:FIND_PRODUCTS_SUCCESS,payload:data})
    } catch (error) {
        dispatch({type:FIND_PRODUCTS_FAILURE,payload:error.message})
    }
}


export const findProductsById= (reqData) => async (dispatch) => {
    dispatch({type:FIND_PRODUCT_BY_ID_REQUEST})
    const {productId} = reqData;
    try {
        const {data} = await api.get(`/api/products/id/${productId}`)
        console.log("Product info: ",data)
        dispatch({type:FIND_PRODUCT_BY_ID_SUCCESS,payload:data})
    } catch (error) {
        dispatch({type:FIND_PRODUCT_BY_ID_FAILURE,payload:error.message})
    }
}

export const createProduct = (product) => async (dispatch) => {
    dispatch({ type: CREATE_PRODUCT_REQUEST });
    try {
      const { data } = await api.post(`/api/admin/products/`, product.data);
  
      dispatch({type: CREATE_PRODUCT_SUCCESS, payload: data});
  
      console.log("created product ", data);
    } catch (error) {
      dispatch({type: CREATE_PRODUCT_FAILURE, payload: error.message});
    }
  };

  export const updateProduct = (productId,product) => async (dispatch) => {
    dispatch({ type: UPDATE_PRODUCT_REQUEST });
    try {
      const { data } = await api.put(`/api/admin/products/${productId}/update`, product);
      console.log("Updated product ", data);
      dispatch({type: UPDATE_PRODUCT_SUCCESS, payload: data });
    } catch (error) {
      dispatch({ type: UPDATE_PRODUCT_FAILURE, payload:error.message });
    }
  };
  
  export const deleteProduct = (productId) => async (dispatch) => {
    dispatch({ type: DELETE_PRODUCT_REQUEST });
    console.log("delete product action",productId)
    try {
      let {data}=await api.delete(`/api/admin/products/${productId}/delete`);
  
      dispatch({ type: DELETE_PRODUCT_SUCCESS, payload: data});
  
      console.log("product delete ",data)
    } catch (error) {
      console.log("catch error ",error)
      dispatch({ type: DELETE_PRODUCT_FAILURE, payload: error.message });
    }
  };