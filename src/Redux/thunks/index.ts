//Redux Thunks

export {
  toggleDarkModeWMessage,
  changeShadeWMessage,
  resetColors,
} from "./display.thunks";

/* 

Example:

export const testThunk = () => async (dispatch, getState) => {
  try {
    dispatch(aLoadingAction());
    const response = await fetch(aURL);
    const json = await response.json();

    dispatch(aSuccessAction(json));
  } catch (e) {
    dispatch(aFailureAction(e));
  }
};

*/
