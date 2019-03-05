//User state
const userInfo = {
  firstName: null,
  username: null,
  email: null,
  color: 'red'
}


export default function(state = null, action) {
	switch (action.type) {
		case 'UPDATENAME':
			return action.payload
			break;

		default:
			return state;
			break;
	}
};
