import api from "../../api/axios";

export const SET_USER = "SET_USER";
export const SET_ROLES = "SET_ROLES";
export const SET_THEME = "SET_THEME";
export const SET_LANGUAGE = "SET_LANGUAGE";
export const SET_ADDRESS_LIST = "SET_ADDRESS_LIST";
export const SET_CREDIT_CARDS = "SET_CREDIT_CARDS";

export const setUser = (user) => ({
  type: SET_USER,
  payload: user,
});

export const setRoles = (roles) => ({
  type: SET_ROLES,
  payload: roles,
});

export const setTheme = (theme) => ({
  type: SET_THEME,
  payload: theme,
});

export const setLanguage = (language) => ({
  type: SET_LANGUAGE,
  payload: language,
});

export const setAddressList = (addressList) => ({
  type: SET_ADDRESS_LIST,
  payload: addressList,
});

export const setCreditCards = (cards) => ({
  type: SET_CREDIT_CARDS,
  payload: cards,
});

export const fetchRoles = () => {
  return async function (dispatch) {
    try {
      const response = await api.get("/roles");
      dispatch(setRoles(response.data));
    } catch (error) {
      console.log("Roles fetch error:", error);
    }
  };
};

export const loginUser = (formData) => {
  return async function (dispatch) {
    try {
      const { rememberMe, ...loginData } = formData;

      const loginResponse = await api.post("/auth/login", loginData);

      const token = loginResponse.data.token;

      if (rememberMe) {
        localStorage.setItem("token", token);
      } else {
        localStorage.removeItem("token");
      }

      api.defaults.headers.common["Authorization"] = `Bearer ${token}`;

      const meResponse = await api.get("/users/me");

      dispatch(setUser(meResponse.data));

      return {
        success: true,
        data: meResponse.data,
      };

    } catch (error) {
      return {
        success: false,
        error:
          error.response?.data?.message || "Login failed. Please try again",
      };
    }
  };
};

export const verifyToken = () => {
  return async function (dispatch) {
    try {
      const response = await api.get("/users/me");
      dispatch(setUser(response.data));
      return { success: true, data: response.data };
    } catch (error) {
      localStorage.removeItem("token");
      delete api.defaults.headers.common["Authorization"];

      return {
        success: false,
        error: error.response?.data?.message || "Token verification failed.",
      };
    }
  };
};

export const fetchAddresses = () => {
  return async function (dispatch) {
    try {
      const response = await api.get("/user/address");
      dispatch(setAddressList(response.data));
      return { success: true, data: response.data };
    } catch (error) {
      return {
        success: false,
        error: error.response?.data?.message || "Address fetch failed.",
      };
    }
  };
};

export const addAddress = (formData) => {
  return async function (dispatch) {
    try {
      const response = await api.post("/user/address", formData);

      await dispatch(fetchAddresses());

      return {
        success: true,
        data: response.data,
      };
    } catch (error) {
      return {
        success: false,
        error:
          error.response?.data?.message || "Address add failed.",
      };
    }
  };
};

export const deleteAddress = (addressId) => {
  return async function (dispatch) {
    try {
      await api.delete(`/user/address/${addressId}`);

      await dispatch(fetchAddresses());

      return { success: true };
    } catch (error) {
      return {
        success: false,
        error:
          error.response?.data?.message || "Address delete failed.",
      };
    }
  };
};

export const updateAddress = (formData) => {
  return async function (dispatch) {
    try {
      const response = await api.put("/user/address", formData);

      await dispatch(fetchAddresses());

      return {
        success: true,
        data: response.data,
      };
    } catch (error) {
      return {
        success: false,
        error:
          error.response?.data?.message || "Address update failed.",
      };
    }
  };
};

export const fetchCards = () => {
  return async function (dispatch) {
    try {
      const response = await api.get("/user/card");
      dispatch(setCreditCards(response.data));
      return { success: true, data: response.data };
    } catch (error) {
      return {
        success: false,
        error: error.response?.data?.message || "Card fetch failed.",
      };
    }
  };
};

export const addCard = (formData) => {
  return async function (dispatch) {
    try {
      const response = await api.post("/user/card", formData);

      await dispatch(fetchCards());

      return {
        success: true,
        data: response.data,
      };
    } catch (error) {
      return {
        success: false,
        error:
          error.response?.data?.message || "Card add failed.",
      };
    }
  };
};

export const deleteCard = (cardId) => {
  return async function (dispatch) {
    try {
      await api.delete(`/user/card/${cardId}`);

      await dispatch(fetchCards());

      return { success: true };
    } catch (error) {
      return {
        success: false,
        error:
          error.response?.data?.message || "Card delete failed.",
      };
    }
  };
};

export const updateCard = (formData) => {
  return async function (dispatch) {
    try {
      const response = await api.put("/user/card", formData);

      await dispatch(fetchCards());

      return {
        success: true,
        data: response.data,
      };
    } catch (error) {
      return {
        success: false,
        error:
          error.response?.data?.message || "Card update failed.",
      };
    }
  };
};

export const createOrder = (orderData) => {
  return async function () {
    try {
      const response = await api.post("/order", orderData);

      return {
        success: true,
        data: response.data,
      };
    } catch (error) {
      return {
        success: false,
        error:
          error.response?.data?.message || "Order creation failed.",
      };
    }
  };
};

  export const fetchPreviousOrders = () => {
  return async function () {
    try {
      const response = await api.get("/order");

      return { success: true, data: response.data };
    } catch (error) {
      return {
        success: false,
        error: error.response?.data?.message || "Order fetch failed.",
      };
    }
  };
};