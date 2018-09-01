const initialState = {
	values: new Array(20000).fill(0)
}

const reducer = (state = initialState, action) => {
    switch (action.type) {
      case 'SET_INPUT_VALUE':
        return {
						...state,
            values: state.values.map((value, i) => i === action.id ? action.value : value),
        };

      default:
        return {
					...state
				};
    }
}

export default reducer;
