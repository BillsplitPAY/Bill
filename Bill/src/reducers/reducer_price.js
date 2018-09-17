//Price state

export default function(state = 0, action) {
	switch (action.type) {
		case 'ADDPRICE':
			return state += Number(action.payload)
			break;
		default:
			return state;
			break;
	}
};
