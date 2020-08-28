import Channel from './api'
import {
  GET_SUCCESS,
  GET_ERROR
} from './action-type'

export const getList = (param) => {
  return (dispatch, getStore) => {
    const channel = new Channel()
  	return channel.getListFromApi(param)
  		.then(data => {
        if((data == null) || data.errors) {
          return dispatch({
            type: GET_ERROR,
            data: []
          });
  			} else {
          return dispatch({
            type: GET_SUCCESS,
            data: data,
          });
  			}
  		})
      .catch(err => {
        return dispatch({
          type: GET_ERROR,
          data: []
        })  
      })
  };
};
