// import React, {createContext, useReducer} from 'react'
// // import { initialState, reducer } from '../../utilities/reducer'

// export const DataContext = createContext()

// export const DataProvider = ({children, reducer, initialState}) => {
//   return (
//     <DataContext.Provider value={useReducer(reducer, initialState)}>
//         {children}
//     </DataContext.Provider>
//   )
// }

import React, { createContext, useReducer } from 'react';
import { initialState, reducer } from '../../utilities/reducer';

export const DataContext = createContext();

export const DataProvider = ({ children }) => {
  const [state, dispatch] = useReducer(reducer, initialState);

  return (
    <DataContext.Provider value={{ state, dispatch }}>
      {children}
    </DataContext.Provider>
  );
};


