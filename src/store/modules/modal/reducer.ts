const modalReducer = (state = false, action: any) => {
    switch (action.type) {
      case "SHOW_MODAL":
        return action.modal
      default:
        return state;
    }
  };
  
  export default modalReducer;
        