import api from "../../api/axios";

export const SET_USER = "SET_USER";
export const SET_ROLES = "SET_ROLES";
export const SET_THEME = "SET_THEME";
export const SET_LANGUAGE = "SET_LANGUAGE";

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

      const response = await api.post("/login", loginData);

      if (rememberMe) {
        localStorage.setItem("token", response.data.token);
      } else {
        localStorage.removeItem("token");
      }

      dispatch(setUser(response.data));

      return { success: true, data: response.data };
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
      const response = await api.get("/verify");
      dispatch(setUser(response.data));

      if (response.data?.token) {
        localStorage.setItem("token", response.data.token);
        api.defaults.headers.common["Authorization"] = response.data.token;
      }

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
