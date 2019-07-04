export default function(state = {
  tableMembers: null,
  tableItems: null,
  tablePrice: null,
}, action) {
	switch (action.type) {
		case 'UPDATETABLE':
			return action.payload
			break;
		default:
			return state;
			break;
	}
};
