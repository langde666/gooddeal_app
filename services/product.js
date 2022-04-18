import axios from 'axios';
import { API_URL } from '../config';

export const listActiveProducts = async (filter) => {
    const {
        search,
        sortBy,
        order,
        limit,
        page,
        rating,
        minPrice,
        maxPrice,
        categoryId,
    } = filter;

    try { 
        const res = await axios.get(`${API_URL}/active/products?search=${search}&rating=${rating}&minPrice=${minPrice}&maxPrice=${maxPrice}&categoryId=${categoryId}&sortBy=${sortBy}&order=${order}&limit=${limit}&page=${page}`);
        return res.data;
    } catch (error) {
        console.log('listActiveProducts', error);
    }
}

export const listSellingProductsByStore = async (filter, storeId) => {
    const {
        search,
        sortBy,
        order,
        limit,
        page,
        rating,
        minPrice,
        maxPrice,
        categoryId,
    } = filter;

    try { 
        const res = await axios.get(`${API_URL}/selling/products/by/store/${storeId}?search=${search}&rating=${rating}&minPrice=${minPrice}&maxPrice=${maxPrice}&categoryId=${categoryId}&sortBy=${sortBy}&order=${order}&limit=${limit}&page=${page}`);
        return res.data;
    } catch (error) {
        console.log('listSellingProductsByStore', error);
    }
}

export const getProduct = async (productId) => {
    try { 
        const res = await axios.get(`${API_URL}/product/${productId}`);
        return res.data;
    } catch (error) {
        console.log('getProduct', error);
    }
}