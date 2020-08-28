import {
  GET_SUCCESS,
  GET_ERROR
} from './action-type';

const initialState = {
  userInfo: [],
  isLoading: false,
  error: false,
};

export const getSelector = (state) => ({ ...state });

const reducer = (state = initialState, action) => {
  switch (action.type) { 
    case GET_SUCCESS: {
      return {
        isLoading: false,
        error: false,
        userInfo: action.data,
      };
    }
    case GET_ERROR: {
      return {
        ...state,
        isLoading: false,
        error: true,
        userInfo: []
      };
    }
    default: {
      return state;
    }
  }
};

export default reducer;
