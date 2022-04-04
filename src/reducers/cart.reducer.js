export function cart(defStore = [], action) {
  switch (action.type) {
    case 'ADD_TO_CART':
      defStore.push(action.product);
      console.log(defStore);

      return [...defStore];

    case 'REMOVE_FROM_CART':
      defStore.splice(
        defStore.findIndex((item) => item.id === action.product.id),
        1
      );
      return [...defStore];

    default:
      return defStore;
  }
}
