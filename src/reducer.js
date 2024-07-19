export const initialState = {
  basket: [],
  user: null,
};


export const getBasketTotal = (basket) =>
  basket?.reduce((amount, item) => amount + item.price * item.quantity, 0);

export const newquantity = () => {
  
}

const reducer = (state, action) => {
  console.log(action);
  switch (action.type) {
    case "add_to_cart":
      const existingItemIndex = state.basket.findIndex(
        (basketItem) => basketItem.id === action.item.id
    );

    if (existingItemIndex >= 0) {
        const updatedBasket = state.basket.map((basketItem, index) => 
            index === existingItemIndex 
                ? { ...basketItem, quantity: basketItem.quantity + 1 } 
                : basketItem
        );
        return {
            ...state,
            basket: updatedBasket,
        };
    } else {

        return {
            ...state,
            basket: [...state.basket, action.item],
        };
    }


    case "remove_from_cart":
      const index = state.basket.findIndex(
        (basketItem) => basketItem.id === action.id
      );
      let newBasket = [...state.basket];

      if (index >= 0) {
        newBasket.splice(index, 1);

      } else {
        console.warn(
          `Cant remove product (id: ${action.id}) as its not in basket!`
        )
      }
      return {
        ...state,
        basket: newBasket
      }

    case "quantity":
      const { id, quantity } = action.payload.item;
      const updatedBasket = state.basket.map(item =>
        item.id === id
          ? { ...item, quantity: quantity }
          : item
      );
      return {
        ...state,
        basket: updatedBasket
      };
     
    case "set_user":
      return{
        ...state,
        user : action.user
      }

    default:
      return state;
  }
};

export default reducer;