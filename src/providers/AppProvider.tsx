import React, { useReducer, ReactNode, useContext } from "react";
import { initialState, reducer } from "../reducers/reducer";

const AppContext = React.createContext();

const useAppContext = () => {
  return useContext(AppContext);
};

type AppProviderProps = {
  children: ReactNode;
};

const AppProvider = ({ children }: AppProviderProps) => {
  const [state, dispatch] = useReducer(reducer, initialState);

  return (
    <AppContext.Provider value={{ pokemon: state.pokemon, dispatch }}>
      {children}
    </AppContext.Provider>
  );
};

export { AppProvider, useAppContext };
