export const initialState = {
  pokemon: "",
};

type State = {
  pokemon: string;
};

type Action = {
  type: string;
  payload: string;
};

export const reducer = (state: State, action: Action) => {
  switch (action.type) {
    case "CHANGE_POKEMON":
      return {
        ...state,
        pokemon: action.payload,
      };
    default:
      return state;
  }
};
