export default function(state = 18, action) {
	switch (action.type) {
		case 'TIPUP':
			return state += 1;
			break;
      case 'TIPDOWN':
      return state -= 1;
		default:
			return state;
			break;
	}
};
