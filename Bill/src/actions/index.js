export function fetchAPIData(){
	return {
		type: 'FETCH',
		payload: fetch('https://api.foursquare.com/v2/venues/4adaa371f964a520ec2321e3/menu?client_id=KUZ5DS21RPAGXYPZGDG1R2ACKA43X2SLTY3VNX5WN3PZLYYS&client_secret=WJ2HM3V5YFXSCDQSIVBDCJUCCSQLPRAWLXIZAXWFIRMGALVS&v=20180323', {
	        mode: 'cors',
	      }).then((resp) => resp.json())
	};
}

export function setMenu(menuObj){
  return {
	   type: 'SETMENU',
	    payload: menuObj,
    };
}

export function setCategory(category){
	return{
	type: 'CAT',
	payload:{
		category: category
	}
};
}

export function addItem(currentItem){
	return {
	   type: 'ADD',
	    payload: currentItem,
    };
}

export function removeItem(itemName){
	return {
	   type: 'REMOVE',
	    payload: itemName,
    };
}

export function setCurrentItem(currentItem){
  return {
	   type: 'SETITEM',
	    payload: currentItem,
    };
}



export function submitOrder(orderArray){
  return {
	   type: 'SUBMIT',
	    payload: orderArray
    };
}

export function updateName(name){
  return {
     type: 'UPDATENAME',
     payload: name
    };
}

export function yPos(key, value){
  return {
     type: 'YPOS',
     payload:{
			 key: key,
			 value: value,
		 }
    };
}


export function emptyCart(){
  return {
	   type: 'EMPTY'
    };
}

export function setTip(tip){
  return {
	   type: 'SETTIP',
		 payload: tip
    };
}

export function tipUp(){
  return {
	   type: 'TIPUP'
    };
}

export function tipDown(){
  return {
	   type: 'TIPDOWN'
    };
}

export function toFirebase(db){
  return {
	   type: 'FIREBASE',
		 payload: db
    };
}

export function clearFirebase(db){
  return {
	   type: 'CLEARBASE',
		 payload: db
    };
}

// export function updateTable(members, items, price){
//   return {
// 	   type: 'UPDATETABLE',
// 		 payload: {
// 			 members: members,
// 			 items: items,
// 			 price: price
// 		 }
//     };
// }
