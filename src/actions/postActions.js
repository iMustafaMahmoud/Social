export const addPost = (dispatch) => (post) => {
  dispatch({ type: "ADD_POST", payload: { post } });
};

export const updateMostRecent = (dispatch, mostRecent) => {
  dispatch({ type: "UPDATE_MOST_RECENT", payload: mostRecent });
};

export const updateFilter = (dispatch, filterKey,filterValue) => {
  dispatch({ type: "UPDATE_FILTER", payload: { filterKey, filterValue } });
};
