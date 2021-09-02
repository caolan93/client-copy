// REDUCER
const toggleReducer = (state = false, action) => {
	switch (action.type) {
		case 'MENU TOGGLE':
			return !state;
		default:
			return false;
	}
};

export default toggleReducer;
