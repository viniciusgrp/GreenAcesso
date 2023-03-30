const characterReducer = (state = {}, action: any) => {
    switch (action.type) {
      case "CARACTERS_LIST":
        return action.list
      default:
        return state;
    }
  };
  
  export default characterReducer;
        