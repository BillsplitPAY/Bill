//User state
const userInfo = {
  firstName: null,
  username: null,
  email: null,
  color: 'red'
}


export default function(state = userInfo, action) {
	switch (action.type) {
		case 'UPDATENAME':
			return Object.assign({}, state, {
        name: action.payload
      })
			break;
			
		default:
			return state;
			break;
	}
};
