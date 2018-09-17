export function addItem(itemName, itemPrice, itemDesc){
  return {
	   type: 'ADD',
	    payload: {
        name: itemName,
        description: itemDesc,
        price: itemPrice,
      },

    };
}
