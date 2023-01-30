import { useState } from 'react';
import axios from 'axios';

export default function useAddToGroup () {
    const [isLoading, setIsLoading] = useState(false);

    async function addGroup(artistId, groupId) {
        setIsLoading(true);
        try {
            console.log(artistId);
            console.log(groupId);
            const response = await axios.put('http://localhost:7002/api/artist/group/add', {artistId, groupId});
            console.log(response);
        } catch (error) {
            console.log(error);
        } finally {
            setIsLoading(false);
        }
    }

    return addGroup;
}