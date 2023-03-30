const paginationReducer = (state = 1, action: any) => {
  switch (action.type) {
    case "CHANGE_PAGE":
      return action.page
    default:
      return state;
  }
};

export default paginationReducer;
      