import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import authService from "./auth.service";

// Get user from localStorage
const user = JSON.parse(localStorage.getItem("crypto_nest_network_user"));

const initialState = {
  user: user || null,
  userSave: [],
  userListingData: [],
  isError: false,
  isSuccess: false,
  isLoading: false,
  message: "",
};

// Get Token
export const getTokenAction = createAsyncThunk(
  "auth/getToken",
  async ({ finalData, moveToNext, notification }, thunkAPI) => {
    try {
      const response = await authService.getToken(finalData);
      if (response?.token_type === "Bearer") {
        if (notification) {
          notification(response.error_description, "success");
        }
        if (moveToNext) {
          moveToNext(response);
        }
      } else {
        notification(response.error_description, "error");
      }
      return response;
    } catch (error) {
      const message =
        (error.response &&
          error.response.data &&
          error.response.data.message) ||
        error.message ||
        error.toString();

      notification(message, "error");

      return thunkAPI.rejectWithValue(message);
    }
  }
);

// Get User Info
export const getUserInfoAction = createAsyncThunk(
  "auth/getUserInfo",
  async ({ data, setLocalStorage, notification }, thunkAPI) => {
    try {
      const response = await authService.getUserInfo(data);
      if (response.success === true) {
        if (notification) {
          notification(response.message, "success");
        }

        if (setLocalStorage) {
          setLocalStorage(response.data);
        }
      } else {
        notification(response.data, "error");
      }
      return response;
    } catch (error) {
      const message =
        (error.response &&
          error.response.data &&
          error.response.data.message) ||
        error.message ||
        error.toString();

      notification(message, "error");

      return thunkAPI.rejectWithValue(message);
    }
  }
);

// SignUp With Email
export const signUpWithEmailAction = createAsyncThunk(
  "auth/signupWithEmail",
  async ({ finalData, moveToNext, notification }, thunkAPI) => {
    try {
      const response = await authService.signupWithEmail(finalData);
      if (response.success === true) {
        if (notification) {
          notification(response.message, "success");
        }
        if (moveToNext) {
          moveToNext(response.data);
        }
      } else {
        notification(response.data, "error");
      }
      return response;
    } catch (error) {
      const message =
        (error.response &&
          error.response.data &&
          error.response.data.message) ||
        error.message ||
        error.toString();

      notification(message, "error");

      return thunkAPI.rejectWithValue(message);
    }
  }
);

// SignUp With Email
export const userListingAction = createAsyncThunk(
  "auth/userListing",
  async ({ finalData, moveToNext, notification }, thunkAPI) => {
    try {
      const response = await authService.userListing(finalData);
      if (response.success === true) {
        if (notification) {
          notification(response.message, "success");
        }
        if (moveToNext) {
          moveToNext(response.data);
        }
      } else {
        notification(response.data, "error");
      }
      return response;
    } catch (error) {
      const message =
        (error.response &&
          error.response.data &&
          error.response.data.message) ||
        error.message ||
        error.toString();

      notification(message, "error");

      return thunkAPI.rejectWithValue(message);
    }
  }
);

export const authSlice = createSlice({
  name: "auth",
  initialState,
  reducers: {
    reset: (state) => {
      state.isLoading = false;
      state.isSuccess = false;
      state.isError = false;
      state.message = "";
    },
    logout: (state) => {
      state.isLoggedIn = false;
      state.user = null;
      state.isSuccess = false;
    },
  },
  extraReducers: (builder) => {
    builder
      .addCase(getTokenAction.pending, (state) => {
        state.isLoading = true;
        state.message = "";
      })
      .addCase(getTokenAction.fulfilled, (state, action) => {
        state.isLoading = false;
        state.isSuccess = true;
        state.user = action.payload;
      })
      .addCase(getTokenAction.rejected, (state, action) => {
        state.message = action.payload.message;
        state.isLoading = false;
        state.isError = true;
        state.user = null;
      })

      .addCase(signUpWithEmailAction.pending, (state) => {
        state.isLoading = true;
        state.message = "";
      })
      .addCase(signUpWithEmailAction.fulfilled, (state, action) => {
        state.isLoading = false;
        state.isSuccess = true;
        state.userSave = action.payload;
      })
      .addCase(signUpWithEmailAction.rejected, (state, action) => {
        state.isLoading = false;
        state.isError = true;
        state.message = action.payload;
      })

      .addCase(userListingAction.pending, (state) => {
        state.isLoading = true;
        state.message = "";
      })
      .addCase(userListingAction.fulfilled, (state, action) => {
        state.isLoading = false;
        state.isSuccess = true;
        state.userListingData = action.payload.data;
      })
      .addCase(userListingAction.rejected, (state, action) => {
        state.isLoading = false;
        state.isError = true;
        state.message = action.payload;
      });
  },
});

export const { reset } = authSlice.actions;

export default authSlice.reducer;
