import api from "../../api/axios";

export const SET_CATEGORIES = "SET_CATEGORIES";
export const SET_PRODUCT_LIST = "SET_PRODUCT_LIST";
export const SET_TOTAL = "SET_TOTAL";
export const SET_FETCH_STATE = "SET_FETCH_STATE";
export const SET_LIMIT = "SET_LIMIT";
export const SET_OFFSET = "SET_OFFSET";
export const SET_FILTER = "SET_FILTER";
export const SET_SELECTED_PRODUCT = "SET_SELECTED_PRODUCT";
export const SET_PRODUCT_DETAIL_LOADING = "SET_PRODUCT_DETAIL_LOADING";

export const setCategories = (categories) => ({
  type: SET_CATEGORIES,
  payload: categories,
});

export const setProductList = (products) => ({
  type: SET_PRODUCT_LIST,
  payload: products,
});

export const setTotal = (total) => ({
  type: SET_TOTAL,
  payload: total,
});

export const setFetchState = (state) => ({
  type: SET_FETCH_STATE,
  payload: state,
});

export const setLimit = (limit) => ({
  type: SET_LIMIT,
  payload: limit,
});

export const setOffset = (offset) => ({
  type: SET_OFFSET,
  payload: offset,
});

export const setFilter = (filter) => ({
  type: SET_FILTER,
  payload: filter,
});

export const setSelectedProduct = (product) => ({
  type: SET_SELECTED_PRODUCT,
  payload: product,
});

export const setProductDetailLoading = (state) => ({
  type: SET_PRODUCT_DETAIL_LOADING,
  payload: state,
});

export const fetchCategories = () => {
  return async function (dispatch) {
    try {
      const response = await api.get("/categories");
      dispatch(setCategories(response.data));
      return { success: true, data: response.data };
    } catch (error) {
      return {
        success: false,
        error: error.response?.data?.message || "Category fetch failed.",
      };
    }
  };
};

export const fetchProducts = (queryString = "") => {
  return async function (dispatch) {
    try {
      dispatch(setFetchState("FETCHING"));
      const response = await api.get(`/products${queryString}`);
      dispatch(setProductList(response.data.products));
      dispatch(setTotal(response.data.total));
      dispatch(setFetchState("FETCHED"));
      return { success: true, data: response.data };
    } catch (error) {
      dispatch(setFetchState("FAILED"));
      return {
        success: false,
        error: error.response?.data?.message || "Product fetch failed",
      };
    }
  };
};

export const fetchProductById = (productId) => {
  return async function (dispatch) {
    try {
      dispatch(setProductDetailLoading("FETCHING"));

      const response = await api.get(`/products/${productId}`);

      dispatch(setSelectedProduct(response.data));
      dispatch(setProductDetailLoading("FETCHED"));

      return { success: true, data: response.data };
    } catch (error) {
      dispatch(setProductDetailLoading("FAILED"));

      return {
        success: false,
        error: error.response?.data?.message || "Product detail fetch failed",
      };
    }
  };
};
