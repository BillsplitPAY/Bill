
export const menuSetter = (array) => {
  let newMenu = {};
 array.forEach(function(catObject){
   let key = catObject.name
   newMenu[key] = catObject.entries.items.map(function(index){
     return {name: index.name, desc: index.description, category: catObject.name, price: Number(index.price), id: index.entryId, options: index.options}
   });
 })
   return newMenu;
}

export const styles_menu = {
  menuPage: {
    backgroundColor: 'black',
    justifyContent: 'flex-end',
    alignItems: 'stretch',
    height: 'auto',
    width: '100%',
  },
  // scroller: {
  //   height: 36,
  //   width: 'auto',
  //   //flexDirection: 'row',
  //   justifyContent: 'center',
  //   alignItems: 'flex-start',
  //   //backgroundColor: 'green',
  //   //borderWidth: 0,
  //   //borderColor: 'black',
  // },
  items: {
    position: 'relative',
    flexDirection: 'column',
    height: 'auto',
    backgroundColor: 'white',
    //borderWidth: 2,
    borderColor: 'blue',
    flexWrap: 'wrap',
  },
  button:{
    flexDirection: 'column',
    backgroundColor: 'rgb(25, 52, 65)',
    height: 40,
    justifyContent: 'center',
    alignItems: 'center',
  },
   buttonText:{
     color: 'white',
     fontWeight:'bold',
   },
   price:{
     alignSelf: 'flex-end',
     color: 'white',
   }
};
