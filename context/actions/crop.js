import API from "../../helpers/api";
export const FETCH_CROP_SUCCESS = "FETCH_CROP_SUCCESS";

export function getCrops() {
  return (dispatch) => {
    try {
      API.apiGet("getCrops")
        .then((response) => {
          dispatch({ type: FETCH_CROP_SUCCESS, payload: response.data.data });
        })
        .catch((err) => {
        });
    } catch (err) {
    }
  };
}