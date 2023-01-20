import { useState } from 'react';
import axios from 'axios';

export const useAddGroup = () => {
    const [isLoading, setIsLoading] = useState(false);

    async function addGroup(artistid, group) {
        setIsLoading(true);
        try {
            const response = await axios.put('http://localhost:7002/api/Artist/group/add', artistid,  group);
            console.log(response);
        } catch (error) {
            console.log(error);
        } finally {
            setIsLoading(false);
        }
    }

    return addGroup;
}