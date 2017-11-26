import { combineReducers } from 'redux';

const DEFAULT_STATE = {
  activePost: {
    body: '',
    title: '',
  }
}

const blog = (state = DEFAULT_STATE, action) => {
  switch (action.type) {
    case 'ON_UPDATE_FIELD':
      return {
        ...state,
        activePost: {
          ...state.activePost,
          id: action.id,
          [action.prop]: action.text,
        },
      };
    default:
      return state
  }
}

const blogApp = combineReducers({
  blog,
})

export default blogApp
