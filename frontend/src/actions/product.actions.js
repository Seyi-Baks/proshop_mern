import {PRODUCT_LIST_REQUEST, PRODUCT_LIST_SUCCESS, PRODUCT_LIST_FAILED, PRODUCT_DETAILS_REQUEST, PRODUCT_DETAILS_SUCCESS, PRODUCT_DETAILS_FAILED} from '../constants/product.constants'
import axios from 'axios'

export const listProducts = () => async (dispatch) => {
  try {
    dispatch({ type: PRODUCT_LIST_REQUEST})

    const { data } = await axios.get('/api/products')

    dispatch({type: PRODUCT_LIST_SUCCESS, payload: data})
  } catch (error) {
    dispatch({type: PRODUCT_LIST_FAILED, payload: error.response && error.response.data.message ? error.response.data.message : error.message})
  }
}



export const listProductDetails = (id) => async (dispatch) => {
  try {
    dispatch({ type: PRODUCT_DETAILS_REQUEST})

    const { data } = await axios.get(`/api/products/${id}`)

    dispatch({type: PRODUCT_DETAILS_SUCCESS, payload: data})
  } catch (error) {
    dispatch({type: PRODUCT_DETAILS_FAILED, payload: error.response && error.response.data.message ? error.response.data.message : error.message})
  }
}