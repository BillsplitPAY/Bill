export default function(state = '', action) {
	switch (action.type) {
		case 'FIREBASE':
			return action.payload
			break;
		default:
			return state;
			break;
	}
};
