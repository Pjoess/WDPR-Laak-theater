import { useState, useEffect } from 'react'

export default function useData() {
    const [data, setData] = useState([]);

    useEffect(() => {
        fetch('api/Programming')
            .then(response => response.json())
            .then(data => {
                setData(data);
            });
    }, []);

    

    return { data, setData};
}

