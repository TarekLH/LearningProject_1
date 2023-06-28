export const authReducer = (state, action) => {
  switch(action.type) {
    case 'SIGNIN':
      return { user: action.payload }
    case 'SIGNOUT':
      return { user: null }
    default: 
      return state
  }
};