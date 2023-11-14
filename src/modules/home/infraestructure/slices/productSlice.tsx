import { createAsyncThunk, createSlice, PayloadAction } from '@reduxjs/toolkit';
import { Product } from '../../domain/product';
import { productService } from '../../../../service/productService';

interface ProductState {
  products: Product[];
  filter: Product[];
  loading: boolean;
  error: string | null;
}

interface Coords {
    latitude: number;
    longitude: number;
}

interface Save {
    id: number;
    coords: Coords;
}

interface SaveProductArgs {
    id: number;
    quantity: number;
    coords: Coords;
}

const initialState: ProductState = {
  products: [],
  filter:[],
  loading: false,
  error: null,
};

const ProductSlice = createSlice({
  name: 'product',
  initialState,
  reducers: {
    fetchProduct: (state) => {
        state.loading = true;
        state.error = null;
    },
    fetchProductSuccess: (state, action: PayloadAction<Product[]>) => {
        state.products = action.payload;
        state.loading = false;
        state.error = null;
    },
    fetchTasksFailure: (state, action: PayloadAction<string>) => {
        state.loading = false;
        state.error = action.payload;
    },
    productFilter: (state, action: PayloadAction<Product[]>) => {
        state.filter = [...action.payload]
    },
    addProduct: (state, action: PayloadAction<Product>) => {
        state.products.push(action.payload)
        console.log(state.products)
    },
    saveProduct: (state, action: PayloadAction<Save>) => {
        const {id} = action.payload;
        const currentState = [...state.products]
        const productToUpdate = currentState.find((product) => product.id === id);
        if (productToUpdate) {
            const currentQuantity = productToUpdate.quantity
            productToUpdate.quantity = currentQuantity - 1;
        }
    }
  },
});

export const {
    fetchProduct,
    fetchProductSuccess,
    fetchTasksFailure,
    productFilter,
    addProduct,
    saveProduct
} = ProductSlice.actions

export default ProductSlice.reducer;

export const getProducts = createAsyncThunk(
    'products/getProducts',
    async ( _, {dispatch} ) => {
        dispatch(fetchProduct());
        try{
            const response = await productService.getProducts();
            dispatch(fetchProductSuccess(response));
        } catch (err) {
            console.log(err)
        }
    }
);

export const addProductAsync = createAsyncThunk(
    'products/addProductAsync',
    async ( product: Product, {dispatch} ) => {
        try{
            const data = await productService.addProduct(product)
            dispatch(addProduct(data))
        } catch (err) {
            console.log(err)
        }
    }
);

export const saveProductAsync = createAsyncThunk(
    'products/saveProductAsync',
    async ( args: SaveProductArgs, {dispatch} ) => {
        const { id, quantity, coords } = args;
        try{
            const data = await productService.changeQuantity({id, quantity})
            const dataSave = await productService.saveData({productId:id, coords: coords})
            dispatch(saveProduct(data));
        } catch (err) {
            console.log(err)
        }
    }
);