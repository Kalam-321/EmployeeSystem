import axios from 'axios';

const API_BASE_URL = 'http://localhost:8000';

export const fetchEmployees = async ()=>{
    try {
        const response = await axios.get(`${API_BASE_URL}/employees`);
        console.log(response);
       return response.data;
    } catch (error) {
        console.error('Error while fetching employees',error);
        throw error;
    }
}

export const createEmployee = async (employeeData)=>{
    try {
        const response = await axios.post(`${API_BASE_URL}/addEmployee`,employeeData);
        return response.data;
    } catch (error) {
        console.error('Error while creating employee',error);
        throw error;
    }
}