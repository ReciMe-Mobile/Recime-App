import axios from 'axios'

const GET_CATEGORIES = 'GET_CATEGORIES'
const ADD_CATEGORY = 'ADD_CATEGORY'

const gotCategories = categories => ({
  type: GET_CATEGORIES,
  categories
})

const addedCategory = category => ({
  type: ADD_CATEGORY,
  category
})

export const getCategories = () => async dispatch => {
  try {
    let userId = 1
    const {data} = await axios.get(`http://192.168.1.164:8080/api/categories/${userId}`)
    dispatch(gotCategories(data))
  } catch (error) {
    console.log(error)
  }
}

export const addCategory = (name, icon, order) => async dispatch => {
  try {
    console.log('orderrr', order)
    let userId = 1
    await axios.post('http://192.168.1.164:8080/api/categories', {name, icon, order, userId})
    dispatch(getCategories())
  } catch (error) {
    console.log(error)
  }
}

const initialState = {
  categories: []
}

export default function(state = initialState, action) {
  switch (action.type) {
    case GET_CATEGORIES: 
      return action.categories
    default:
      return state
  }
}