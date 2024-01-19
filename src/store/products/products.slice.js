import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import { API_URL } from "../../const";

export const fetchProducts = createAsyncThunk(
  //создаем асинхронные запросы, т.к к серверу у нас запрос синхронный
  "products/fetchProducts",
  async (_, thunkAPI) => {
    //обьект с методами(нам один из методов , а именно нужен state для получения token)
    const state = thunkAPI.getState();
    const token = state.auth.accessToken;

    const response = await fetch(`${API_URL}api/products`, {
      //тут запрос на получение данных из апи
      headers: {
        //обьект с заголовками
        Authorization: `Bearer ${token}`,
      },
    });

    if (!response.ok) {
      throw new Error("Не удалось получить продукты");
    }

    return response.json(); // если ок, то возвращаем данные
  },
);

const initialState = {
  data: [],
  loading: false,
  error: null,
};

const productsSlice = createSlice({
  name: "products",
  initialState,
  reducers: {},
  extraReducers: (builder) => {
    builder
      .addCase(fetchProducts.pending, (state) => {
        //вызывается колбэк когда идет загрузка(ожидание)
        state.loading = true;
        state.error = null;
      })
      .addCase(fetchProducts.fulfilled, (state, action) => {
        //когда данные пришли,  в action наши данные
        state.data = action.payload;
        state.loading = false;
        state.error = null;
      })
      .addCase(fetchProducts.rejected, (state, action) => {
        //когда ошибка
        state.loading = false;
        state.error = action.error.message;
      });
  },
});

export default productsSlice.reducer;
