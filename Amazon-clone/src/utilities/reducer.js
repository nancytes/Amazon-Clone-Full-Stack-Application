import { Type } from './action.type'; 

export const initialState = {
  basket: [],
  user: null,
};


export const reducer = (state, action) => {
 
 switch (action.type) {
    case Type.ADD_TO_BASKET:
      const existingitem = state.basket.find(
        (item) => item.id === action.item.id
      );
      if (!existingitem) {
        return {
          ...state,
          basket: [...state.basket, { ...action.item, amount: 1 }],
        };
      } else {
        const updatedBasket = state.basket.map((item) => {
          return item.id === action.item.id
            ? { ...item, amount: item.amount + 1 }
            : item;
        });
        return {
          ...state,
          basket: updatedBasket,
        };
      }

    case Type.REMOVE_FROM_BASKET:
      const index = state.basket.findIndex((item) => item.id === action.id);
      if (index >= 0) {
        let newBasket = [...state.basket];
        if (newBasket[index].amount > 1) {
          // Decrease amount if greater than 1
          newBasket[index] = { ...newBasket[index], amount: newBasket[index].amount - 1 };
        } else {
          // Remove item if amount is 1
          newBasket.splice(index, 1);
        }
        return {
          ...state,
          basket: newBasket,
        };
      }
      return state; 

      case Type.SET_USER:
        return {
          ...state,
          user: action.user
          };

    default:
      return state;
  }
};
