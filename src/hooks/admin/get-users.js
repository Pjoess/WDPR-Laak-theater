import { useState, useEffect } from "react";
import axios from "axios";

export function GetUsers() {
    const [userData, setUserData] = useState([]);

    useEffect(() => {
        async function fetchData() {
            try {
                const response = await axios.get("http://localhost:7002/api/admin/users");
                setUserData(response.data);
            } catch (error) {
                console.error(error);
            }
        }
        fetchData();
    }, []);

    return { userData };
}

export function GetEmployees() {
    const [employeeData, setEmployeeData] = useState([]);

    useEffect(() => {
        async function fetchData() {
            try {
                const response = await axios.get("http://localhost:7002/api/admin/employees");
                setEmployeeData(response.data);
            } catch (error) {
                console.error(error);
            }
        }
        fetchData();
    }, []);

    return { employeeData };
}






