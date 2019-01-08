

export default function(state = 'whatever', action) {
	switch (action.type) {
		case 'SETMENU':
			return action.payload
			break;
		default:
			return state;
			break;
	}
};
