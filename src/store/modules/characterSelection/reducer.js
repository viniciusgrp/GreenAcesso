const characterSelectionReducer = (state = null, action) => {
    switch (action.type) {
      case "CHARACTER_SELECT":
        return action.character
      default:
        return state;
    }
  };
  
  export default characterSelectionReducer;
        