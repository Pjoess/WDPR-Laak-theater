import { useState, useEffect } from 'react'

export default function useData() {
    const [data, setData] = useState([]);

    useEffect(() => {
        fetch('http://synchronicity.ddns.net:7002/api/Programming')
            .then(response => response.json())
            .then(data => {
                setData(data);
            });
    }, []);

    

    return { data, setData};
}

