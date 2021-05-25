const reducer = (state, action) => {
  const { type } = action;

  if (type === "INCREMENT") {
    return { number: state.number + 1 };
  } else if (type === "DECREMENT") {
    return { number: state.number - 1 };
  }
  return null;
};

export default reducer;
