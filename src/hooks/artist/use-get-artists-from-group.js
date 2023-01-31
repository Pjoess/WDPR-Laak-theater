import { useState, useEffect } from "react";
import axios from "axios";


export default function useGetArtistsFromGroup(groupId) {
    const [data, setCardData] = useState([]);
  
    useEffect(() => {
      async function fetchData() {
        try {
          const response = await axios.get(`http://localhost:7002/api/Artist/groups/${groupId}`);
          setCardData(response.data);
        } catch (error) {
          console.error(error);
        }
      }
      fetchData();
    }, [groupId]);
  
    return data;
  }