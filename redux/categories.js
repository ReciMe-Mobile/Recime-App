import axios from 'axios'

const GET_CATEGORIES = 'GET_CATEGORIES'

const gotCategories = categories => ({
  type: GET_CATEGORIES,
  categories
})

export const getCategories = () => async dispatch => {
  try {
    console.log('here')
    const {data} = await axios.get('http://192.168.1.164:8080/api/categories')
    dispatch(gotCategories(data))
    console.log(data)
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