import { useState, useEffect } from 'react'

export default function UseProgramming() {
    const [data, setData] = useState([]);

    useEffect(() => {
        fetch(`${process.env.REACT_APP_API}/api/programming`)
            .then(response => response.json())
            .then(data => {
                setData(data);
            });
    }, []);
    return {data, setData};
}

