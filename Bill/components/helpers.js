export const totalAdder = function() {
  let total = 0;
  for (i = 0; i < this.props.screenProps.order.length; i++){
    total += this.props.screenProps.order[i].price
  }
  return total
}
