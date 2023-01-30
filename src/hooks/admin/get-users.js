import { useState, useEffect } from "react";
import axios from "axios";

export function GetEmployees() {
    const [employeeData, setEmployeeData] = useState([]);

    useEffect(() => {
        const fetchData = async () => {
            try {
                const response = await axios.get(`${process.env.REACT_APP_API}/api/admin/employees`);
                setEmployeeData(response.data);
            } catch (error) {
                console.error(error);
            }
        }
        fetchData();
    }, []);

    return {userData: employeeData};
}

export function GetUsers(){
    axios.defaults.headers.common["Authorization"] = `Bearer ${localStorage.getItem("jwt")}`;
    const [userData, setUserData] = useState([]);

    useEffect(() => {
        const fetchData = async () => {
            try {
                const token = localStorage.getItem("jwt");
                const response = await axios.get(`${process.env.REACT_APP_API}/api/admin/users`, {
                    headers: {
                        Authorization: `Bearer ${token}`
                    }
                });
                setUserData(response.data);
            } catch (error){
                console.error(error);
            }
        }
        fetchData();
    }, [])


    return { userData: userData }
}







