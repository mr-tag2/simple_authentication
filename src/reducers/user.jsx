export const userReducer = (state = {}, action) => {
  switch (action.type) {
    case "LOGIN":
    case "REGISTER":
      return { ...action.payload };

    default:
      return state;
  }
};
