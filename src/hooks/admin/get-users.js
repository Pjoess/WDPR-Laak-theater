import { useState, useEffect } from "react";
import axios from "axios";

export default function GetUsers() {
    const [userData, setUserData] = useState([]);

    useEffect(() => {
        async function fetchData() {
            try {
                const response = await axios.get(`${process.env.REACT_APP_API}api/admin/employees`);
                setUserData(response.data);
            } catch (error) {
                console.error(error);
            }
        }

        fetchData();
    }, []);

    return {userData};
}







