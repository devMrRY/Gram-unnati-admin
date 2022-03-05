import { createContext, useContext, useReducer } from "react";
import { FETCH_CROP_SUCCESS } from "../actions/crop";

const CropContext = createContext();

const initialState = {
  crops: [],
};

const CropReducer = (state, { type, payload }) => {
  switch (type) {
      case FETCH_CROP_SUCCESS:
      return {
        ...state,
        crops: payload,
      };
    default:
      return state;
  }
};

export const CropProvider = ({ children }) => {
  return (
    <CropContext.Provider value={useReducer(CropReducer, initialState)}>
      {children}
    </CropContext.Provider>
  );
};

export const useCropContext = () => useContext(CropContext);
