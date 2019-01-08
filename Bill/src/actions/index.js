
export function fetchMenu(){
return {
	type: 'FETCH',
	payload: fetch('https://api.foursquare.com/v2/venues/4adaa371f964a520ec2321e3/menu?client_id=KUZ5DS21RPAGXYPZGDG1R2ACKA43X2SLTY3VNX5WN3PZLYYS&client_secret=WJ2HM3V5YFXSCDQSIVBDCJUCCSQLPRAWLXIZAXWFIRMGALVS&v=20180323', {
        mode: 'cors',
      }).then((resp) => resp.json())
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

export function setMenu(menuObj){
  return {
	   type: 'SETMENU',
	    payload: menuObj,
    };
}

export function fetchData(data){
return {
	type: 'FETCHY',
	payload: fetch(data, {
        mode: 'cors',
      })
      .then((resp) => resp.json())
};
}

export function addItem(currentItem){

	return {
	   type: 'ADD',
	    payload: currentItem,
    };
}

export function setCurrentItem(currentItem){
  return {
	   type: 'SETITEM',
	    payload: currentItem,
    };
}

export function addPrice(itemPrice){
  return {
	   type: 'ADDPRICE',
	    payload: itemPrice
    };
}

export function submitOrder(orderObject){
  return {
	   type: 'SUBMIT',
	    payload: orderObject
    };
}

export function emptyCart(){
  return {
	   type: 'EMPTY'
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
