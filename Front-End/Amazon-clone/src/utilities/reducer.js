// import { Type } from './action.type'; 

// export const initialState = {
//   basket: [],
// };

// export const reducer = (state, action) => {
//   switch (action.type) {
//     case Type.ADD_TO_BASKET:
//       const existingItemIndex = state.basket.findIndex((item) => item.id === action.item.id);

//       if (existingItemIndex !== -1) {
//         // Item exists in basket, update its amount
//         const updatedBasket = [...state.basket];
//         updatedBasket[existingItemIndex].amount += 1;

//         return {
//           ...state,
//           basket: updatedBasket,
//         };
//       } else {
//         return {
//           ...state,
//           basket: [...state.basket, { ...action.item, amount: 1 }],
//         };
//       }
//       case Type.REMOVE_FROM_BASKET:
//         const index = state.basket.findIndex(item=> item.id===action.id)
//         let newBasket = [...state.basket]
//         if(index >= 0){
//             if(newBasket[index].amount > 1){
//                 newBasket[index]={...newBasket[index],amount: newBasket[index].amount-1}
//             }else{
//                 newBasket.splice(index,1)
//             }
//         }
//         return{
//             ...state,
//             basket:newBasket
//         }

//     default:
//       return state; 
//   }
// };


import { Type } from './action.type'; // Ensure this path is correct

export const initialState = {
  basket: [],
};

export const reducer = (state, action) => {
  switch (action.type) {
    case Type.ADD_TO_BASKET:
      const existingItemIndex = state.basket.findIndex((item) => item.id === action.item.id);

      if (existingItemIndex !== -1) {
        // Item exists in basket, update its amount
        const updatedBasket = [...state.basket];
        updatedBasket[existingItemIndex].amount += 1;

        return {
          ...state,
          basket: updatedBasket,
        };
      } else {
        // Item does not exist in basket, add it with amount 1
        return {
          ...state,
          basket: [...state.basket, { ...action.item, amount: 1 }],
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
      return state; // Return current state if item not found

    default:
      return state;
  }
};
