//Cart state

export default function(state = [], action) {
	switch (action.type) {
		case 'ADD':
			return [action.payload, ...state]
			break;
			case 'EMPTY':
				return []
				break;
		default:
			return state;
			break;
	}
};
