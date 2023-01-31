import axios from "axios";
import { useState } from "react";

export default function useEditGroupDetails(){
    const [isLoading, setIsLoading] = useState(false);

    async function putGroupDetails(id, groupName, groupDescription) {
        setIsLoading(true);
        try {
            const response = await axios.put('http://localhost:7002/api/group/edit', {id, groupName, groupDescription});
            console.log(response);
        } catch (error) {
            console.log(error);
            alert("er is een probleem gevonden, probeer het opnieuw");
        } finally {
            setIsLoading(false);
        }
    }

    return putGroupDetails;
}