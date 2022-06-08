import axios from "axios";
import { API_URL } from "../config";

export const listStoresByUser = async (userId, token, filter) => {
    try {
        const { search, sortBy, order, limit, page } = filter;
        const res = await axios.get(`${API_URL}/stores/by/user/${userId}?search=${search}&sortBy=${sortBy}&order=${order}&limit=${limit}&page=${page}`,
        {
            headers: {
                Accept: 'application/json',
                'Content-Type': 'application/json',
                Authorization: `Bearer ${token}`,
            },
        });
        return res.data;
    } catch (error) {
        console.log('listStoresByUser', error);
    }
}

export const getlistStores = async (filter) => {
    try {
        const { search, sortBy, sortMoreBy, order, limit, page, isActive } = filter;
        const res = await axios.get(`${API_URL}/stores?search=${search}&isActive=${isActive}&sortBy=${sortBy}&sortMoreBy=${sortMoreBy}&order=${order}&limit=${limit}&page=${page}`);
        return res.data;
    } catch (error) {
        console.log('getlistStores', error);
    }
}

export const getStore = async (storeId) => {
    try {
        const res = await axios.get(`${API_URL}/store/${storeId}`);
        return res.data;
    } catch (error) {
        console.log('getStore', error);
    }
}

export const getStoreProfile = async (userId, token, storeId) => {
    try {
        const res = await axios.get(`${API_URL}/store/profile/${storeId}/${userId}`,
            {
                headers: {
                    Accept: 'application/json',
                    'Content-Type': 'application/json',
                    Authorization: `Bearer ${token}`,
                },
            });
        return res.data;
    } catch (error) {
        console.log('getStore', error);
    }
};

export const addStaffs = async (userId, token, staffs, storeId) => {
    try {
        const res = await axios.post(`${API_URL}/store/staffs/${storeId}/${userId}`,
            staffs,
            {
                headers: {
                    Accept: 'application/json',
                    'Content-Type': 'application/json',
                    Authorization: `Bearer ${token}`,
                },
            });
        return res.data;
    } catch (error) {
        console.log('addStaffs', error);
    }
};

export const cancelStaff = async (userId, token, storeId) => {
    try {
        const res = await axios.delete(`${API_URL}/store/staff/cancel/${storeId}/${userId}`,
            {
                headers: {
                    Accept: 'application/json',
                    'Content-Type': 'application/json',
                    Authorization: `Bearer ${token}`,
                },
            });
        return res.data;
    } catch (error) {
        console.log('cancelStaff', error);
    }
};

export const deleteStaff = async (userId, token, staff, storeId) => {
    try {
        const res = await axios.delete(`${API_URL}/store/staff/remove/${storeId}/${userId}`,
            {
                headers: {
                    Accept: 'application/json',
                    'Content-Type': 'application/json',
                    Authorization: `Bearer ${token}`,
                },
                data: {
                    staff: staff,
                },
            });
        return res.data;
    } catch (error) {
        console.log('deleteStaff', error);
    }
};