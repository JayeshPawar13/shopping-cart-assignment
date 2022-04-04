export function cart(defStore = [], action) {
  switch (action.type) {
    case 'ADD_TO_CART':
      defStore.push(action.product);
      console.log(defStore);

      return [...defStore];

    default:
      return defStore;
  }
}
