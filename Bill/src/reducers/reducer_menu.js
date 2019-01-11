//Menu state
console.log('connected')
export default function(state = [], action) {
	switch (action.type) {
		case 'FETCH':
			return [action.payload, 'load']
			break;
			case 'FETCHY':
			return [action.payload, 'load']
			break;
		default:
			return state;
			break;
	}
};
