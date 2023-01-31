import { useState, useEffect } from "react";
import axios from "axios";

export default function useDeleteArtistFromGroup(){
    const [isLoading, setIsLoading] = useState(false);

    async function deleteFromGroup(artistId, groupId){
        setIsLoading(true);
        try {
            const response = await axios.put('http://localhost:7002/api/artist/group/delete', {artistId, groupId});
            console.log(response);
        } catch (error) {
            alert("er ging iets mis");
            console.log(error);
        } finally {
            setIsLoading(false);
        }
    }

    return deleteFromGroup;
}