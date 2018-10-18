
export function fetchMenu(){
return {
	type: 'FETCH',
	payload: fetch('https://api.foursquare.com/v2/venues/4cc6222106c25481d7a4a047/menu?client_id=KUZ5DS21RPAGXYPZGDG1R2ACKA43X2SLTY3VNX5WN3PZLYYS&client_secret=WJ2HM3V5YFXSCDQSIVBDCJUCCSQLPRAWLXIZAXWFIRMGALVS&v=20180323', {
        mode: 'cors',
      })
      .then((resp) => resp.json())
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

export function addItem(itemName, itemPrice, itemDesc){
  return {
	   type: 'ADD',
	    payload: {
        name: itemName,
        description: itemDesc,
        price: itemPrice
      }
    };
}

export function addPrice(itemPrice){
  return {
	   type: 'ADDPRICE',
	    payload: itemPrice
    };
}

export function submitOrder(orderArray){
  return {
	   type: 'SUBMIT',
	    payload: orderArray
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
