import { Product } from "../modules/home/domain/product"

const MOCK_API = 'https://653932dae3b530c8d9e81816.mockapi.io'

interface Coords {
    latitude: number;
    longitude: number;
}

interface Save {
    productId: number;
    coords: Coords;
}

interface Change {
    id: number;
    quantity: number;
}

export class productService {

    static async getProducts() {
        const response = fetch(`${MOCK_API}/products`, {
            method: 'GET'
        })
            .then(response => response.json())
            .catch(() => [])
        return response
    }

    static async addProduct(product: Product) {
        const response = fetch(`${MOCK_API}/products`, {
            method: 'POST',
            headers: {
                "Content-Type": "application/json",
            },
            body: JSON.stringify(product)
        })
            .then(response => response.json())
            .catch(() => [])
        return response
    }

    static async changeQuantity({id, quantity}: Change) {
        const response = fetch(`${MOCK_API}/products/${id}`, {
            method: 'PUT',
            headers: {
                "Content-Type": "application/json",
            },
            body: JSON.stringify({ quantitity: quantity-1 })
        })
            .then(response => response.json())
            .catch(() => [])
        return response
    }

    static async saveData(save: Save) {
        const response = fetch(`${MOCK_API}/save`, {
            method: 'POST',
            headers: {
                "Content-Type": "application/json",
            },
            body: JSON.stringify(save)
        })
            .then(response => response.json())
            .catch(() => [])
        return response
    }
    
}