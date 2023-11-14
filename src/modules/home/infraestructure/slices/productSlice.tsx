import { createSlice, PayloadAction } from '@reduxjs/toolkit';
import { ECategory, Product } from '../../domain/product';

interface ProductState {
  products: Product[];
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

const initialState: ProductState = {
  products: [{
    id: 0,
    title: "Producto 1",
    description: "Este es un producto de prueba",
    image: "https://i.ebayimg.com/thumbs/images/g/FGgAAOSwV55lBzYJ/s-l640.jpg",
    price: '20500',
    quantity: 5,
    category: ECategory.SHOES
  }],
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
    addProduct: (state, action: PayloadAction<Product>) => {
        state.products.push(action.payload)
        console.log(state.products)
    },
    saveProduct: (state, action: PayloadAction<Save>) => {
        const {id} = action.payload;
        const {coords} = action.payload;
        const currentState = [...state.products]
        const productToUpdate = currentState.find((product) => product.id === id);
        if (productToUpdate) {
            const currentQuantity = productToUpdate.quantity
            productToUpdate.quantity = currentQuantity - 1;
            console.log(coords, state.products)
        }
    }
  },
});

export const {
    fetchProduct,
    fetchProductSuccess,
    fetchTasksFailure,
    addProduct,
    saveProduct
} = ProductSlice.actions

export default ProductSlice.reducer;