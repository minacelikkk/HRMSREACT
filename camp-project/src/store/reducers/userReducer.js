import userItems from "../initialValues/userItems"
const initialState = {
  userItems:userItems,
};

export default function userReducer(state = initialState, { type, payload }) {
  switch (type) {
    case ADD_TO_USER:
      let user = state.userItems.find((u) => u.user.id === payload.id);
      if (user) {
        user.quantity++;
        return {
          ...state,
        };
      } else {
        return {
          ...state,
          userItems: [...state.userItems, { userItems:payload }],
        };
      }

    case REMOVE_FROM_USER:
      return {
        ...state,
        userItems: state.userItems.filter((u) => u.user.id !== payload.id),
      };
    default:
      return state;
  }
}