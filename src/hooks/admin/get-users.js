import { useState, useEffect } from "react";
import axios from "axios";

export default function GetUsers() {
    const [userData, setUserData] = useState([]);

    useEffect(() => {
        async function fetchData() {
            try {
                const response = await axios.get("http://localhost:7002/api/admin/employees");
                setUserData(response.data);
            } catch (error) {
                console.error(error);
            }
        }
        fetchData();
    }, []);

    return { userData };
}







